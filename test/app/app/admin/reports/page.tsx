"use client"

import { useState, useEffect } from 'react';
import { useSession } from '@/lib/auth-client';
import { fetcher } from '@/lib/fetcher';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { User } from '@/generated/prisma';

interface CommentReport {
  id: string;
  reason: string;
  details: string | null;
  status: string;
  createdAt: string;
  reviewedAt: string | null;
  user: {
    id: string;
    name: string;
    email: string;
  };
  comment: {
    id: string;
    text: string;
    createdAt: string;
    user: {
      id: string;
      name: string;
      email: string;
    };
    content: {
      id: string;
      title: string;
      type: string;
    };
  };
}

interface ReportsResponse {
  reports: CommentReport[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export default function AdminReportsPage() {
  const [reports, setReports] = useState<CommentReport[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('pending');
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0,
  });
  const [processingReports, setProcessingReports] = useState<Set<string>>(new Set());
  const { data: session } = useSession();

  const loadReports = async () => {
    try {
      setIsLoading(true);
      const params = new URLSearchParams({
        status: statusFilter,
        page: currentPage.toString(),
        limit: '20',
      });
      
      const data: ReportsResponse = await fetcher(`/api/comments/report?${params}`);
      setReports(data.reports);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error loading reports:', error);
      toast.error('Şikayetler yüklenirken hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (session?.user) {
      loadReports();
    }
  }, [session, statusFilter, currentPage]);

  const updateReportStatus = async (reportId: string, status: string, action?: string) => {
    if (processingReports.has(reportId)) {
      return;
    }

    try {
      setProcessingReports(prev => new Set(prev).add(reportId));
      
      const response = await fetch('/api/comments/report', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reportId,
          status,
          action,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Rapor güncellenemedi');
      }

      toast.success('Rapor başarıyla güncellendi');
      await loadReports(); // Reload reports
    } catch (error) {
      console.error('Error updating report:', error);
      toast.error(error instanceof Error ? error.message : 'Rapor güncellenirken hata oluştu');
    } finally {
      setProcessingReports(prev => {
        const newSet = new Set(prev);
        newSet.delete(reportId);
        return newSet;
      });
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      pending: { label: 'Beklemede', variant: 'secondary' as const },
      reviewed: { label: 'İncelenmiş', variant: 'default' as const },
      dismissed: { label: 'Reddedilmiş', variant: 'outline' as const },
      action_taken: { label: 'İşlem Yapıldı', variant: 'destructive' as const },
    };
    
    const statusInfo = statusMap[status as keyof typeof statusMap] || { label: status, variant: 'default' as const };
    return <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>;
  };

  const getReasonText = (reason: string) => {
    const reasonMap = {
      spam: 'Spam',
      hate_speech: 'Nefret Söylemi',
      inappropriate: 'Uygunsuz İçerik',
      harassment: 'Taciz',
      misinformation: 'Yanlış Bilgi',
      other: 'Diğer',
    };
    
    return reasonMap[reason as keyof typeof reasonMap] || reason;
  };

  if (!session?.user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">Giriş yapmalısınız.</p>
        </div>
      </div>
    );
  }

  // Check if user is admin
  if ((session?.user as User)?.role !== 'admin') {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">Bu sayfaya erişim yetkiniz yok.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Yorum Şikayetleri Yönetimi</h1>
        <div className="flex items-center space-x-4">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Durum Filtresi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Beklemede</SelectItem>
              <SelectItem value="reviewed">İncelenmiş</SelectItem>
              <SelectItem value="dismissed">Reddedilmiş</SelectItem>
              <SelectItem value="action_taken">İşlem Yapıldı</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : reports.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              {statusFilter === 'pending' ? 'Bekleyen şikayet bulunmuyor.' : 'Bu durumda şikayet bulunmuyor.'}
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="space-y-4">
            {reports.map((report) => (
              <Card key={report.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">
                        {getReasonText(report.reason)} Şikayeti
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        {getStatusBadge(report.status)}
                        <span className="text-sm text-gray-500">
                          {formatDate(report.createdAt)}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {report.status === 'pending' && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateReportStatus(report.id, 'dismissed')}
                            disabled={processingReports.has(report.id)}
                          >
                            Reddet
                          </Button>
                          <Button
                            size="sm"
                            variant="default"
                            onClick={() => updateReportStatus(report.id, 'reviewed')}
                            disabled={processingReports.has(report.id)}
                          >
                            İncele
                          </Button>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                size="sm"
                                variant="destructive"
                                disabled={processingReports.has(report.id)}
                              >
                                Yorumu Sil
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Yorumu Sil</DialogTitle>
                              </DialogHeader>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                Bu yorumu kalıcı olarak silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.
                              </p>
                              <div className="flex space-x-2 justify-end">
                                <DialogClose asChild>
                                  <Button variant="outline">İptal</Button>
                                </DialogClose>
                                <Button
                                  variant="destructive"
                                  onClick={() => updateReportStatus(report.id, 'action_taken', 'delete_comment')}
                                  disabled={processingReports.has(report.id)}
                                >
                                  Yorumu Sil
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Şikayet Eden Kullanıcı:</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {report.user.name} ({report.user.email})
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Şikayet Edilen Yorum:</h4>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                        <p className="text-sm mb-2">{report.comment.text}</p>
                        <div className="text-xs text-gray-500">
                          <span>Yazan: {report.comment.user.name} ({report.comment.user.email})</span>
                          <span className="mx-2">•</span>
                          <span>İçerik: {report.comment.content.title}</span>
                          <span className="mx-2">•</span>
                          <span>{formatDate(report.comment.createdAt)}</span>
                        </div>
                      </div>
                    </div>

                    {report.details && (
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Şikayet Detayları:</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{report.details}</p>
                      </div>
                    )}

                    {report.reviewedAt && (
                      <div>
                        <h4 className="font-semibold text-sm mb-2">İnceleme Tarihi:</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {formatDate(report.reviewedAt)}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-8">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                Önceki
              </Button>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Sayfa {pagination.page} / {pagination.totalPages} ({pagination.total} şikayet)
              </span>
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.min(pagination.totalPages, prev + 1))}
                disabled={currentPage === pagination.totalPages}
              >
                Sonraki
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
} 