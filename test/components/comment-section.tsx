"use client"

import { useState, useEffect } from 'react';
import { useSession } from '@/lib/auth-client';
import { fetcher } from '@/lib/fetcher';
import { toast } from 'sonner';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from './ui/dialog';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface Comment {
  id: string;
  text: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
    image: string | null;
  };
  likeCount: number;
  dislikeCount: number;
  netLikes: number;
  userLikeStatus: 'liked' | 'disliked' | null;
  replies?: Comment[];
}

interface CommentSectionProps {
  contentId: string;
}

interface CommentItemProps {
  comment: Comment;
  contentId: string;
  onReply: (parentId: string) => void;
  replyingTo: string | null;
  onCancelReply: () => void;
  onReplySubmit: (parentId: string, text: string) => Promise<void>;
  onLike: (commentId: string, isLike: boolean) => Promise<void>;
  onReport: (commentId: string, reason: string, details?: string) => Promise<void>;
  likingComments: Set<string>;
  reportingComments: Set<string>;
  isReply?: boolean;
}

function CommentItem({ 
  comment, 
  contentId, 
  onReply, 
  replyingTo, 
  onCancelReply, 
  onReplySubmit, 
  onLike, 
  onReport,
  likingComments,
  reportingComments,
  isReply = false 
}: CommentItemProps) {
  const [replyText, setReplyText] = useState('');
  const [isSubmittingReply, setIsSubmittingReply] = useState(false);
  const [reportReason, setReportReason] = useState('');
  const [reportDetails, setReportDetails] = useState('');
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const { data: session } = useSession();

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

  const handleReplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    try {
      setIsSubmittingReply(true);
      await onReplySubmit(comment.id, replyText.trim());
      setReplyText('');
      onCancelReply();
    } catch (error) {
      console.error('Error submitting reply:', error);
    } finally {
      setIsSubmittingReply(false);
    }
  };

  const handleReportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportReason.trim()) return;

    try {
      await onReport(comment.id, reportReason, reportDetails.trim() || undefined);
      setReportReason('');
      setReportDetails('');
      setIsReportModalOpen(false);
    } catch (error) {
      console.error('Error submitting report:', error);
    }
  };

  return (
    <div className={`${isReply ? 'ml-6 pl-4 border-l-2 border-gray-200 dark:border-gray-700' : ''}`}>
      <div className="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
        <div className="flex items-start space-x-3">
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={comment.user.image || undefined} alt={comment.user.name} />
            <AvatarFallback className="h-8 w-8 rounded-lg bg-primary text-primary-foreground">
              {comment.user.name?.charAt(0).toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {comment.user.name}
              </h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(comment.createdAt)}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              {comment.text}
            </p>
            
            {/* Like/Dislike and Reply buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onLike(comment.id, true)}
                disabled={likingComments.has(comment.id)}
                className={`flex items-center space-x-1 text-sm transition-colors ${
                  comment.userLikeStatus === 'liked'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400'
                } ${likingComments.has(comment.id) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>{comment.likeCount}</span>
              </button>
              
              <button
                onClick={() => onLike(comment.id, false)}
                disabled={likingComments.has(comment.id)}
                className={`flex items-center space-x-1 text-sm transition-colors ${
                  comment.userLikeStatus === 'disliked'
                    ? 'text-red-600 dark:text-red-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400'
                } ${likingComments.has(comment.id) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" transform="rotate(180)">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>{comment.dislikeCount}</span>
              </button>

              {/* Reply button (only show for top-level comments and if user is logged in) */}
              {!isReply && session?.user && (
                <button
                  onClick={() => onReply(comment.id)}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
                >
                  Yanıtla
                </button>
              )}

              {/* Report button (only show if user is logged in and it's not their own comment) */}
              {session?.user && session.user.id !== comment.user.id && (
                <Dialog open={isReportModalOpen} onOpenChange={setIsReportModalOpen}>
                  <DialogTrigger asChild>
                    <button
                      disabled={reportingComments.has(comment.id)}
                      className={`text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 transition-colors ${
                        reportingComments.has(comment.id) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                      }`}
                    >
                      {reportingComments.has(comment.id) ? 'Şikayet Ediliyor...' : 'Şikayet Et'}
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Yorumu Şikayet Et</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleReportSubmit} className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                          Şikayet Sebebi *
                        </label>
                        <Select value={reportReason} onValueChange={setReportReason}>
                          <SelectTrigger>
                            <SelectValue placeholder="Şikayet sebebini seçin" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="spam">Spam</SelectItem>
                            <SelectItem value="hate_speech">Nefret Söylemi</SelectItem>
                            <SelectItem value="inappropriate">Uygunsuz İçerik</SelectItem>
                            <SelectItem value="harassment">Taciz</SelectItem>
                            <SelectItem value="misinformation">Yanlış Bilgi</SelectItem>
                            <SelectItem value="other">Diğer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                          Detaylar (İsteğe bağlı)
                        </label>
                        <textarea
                          value={reportDetails}
                          onChange={(e) => setReportDetails(e.target.value)}
                          className="w-full border rounded-lg p-2 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white resize-none text-sm"
                          rows={3}
                          placeholder="Şikayetinizle ilgili ek bilgi verebilirsiniz..."
                        />
                      </div>
                      <div className="flex space-x-2 justify-end">
                        <DialogClose asChild>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setReportReason('');
                              setReportDetails('');
                            }}
                          >
                            İptal
                          </Button>
                        </DialogClose>
                        <Button
                          type="submit"
                          disabled={!reportReason.trim() || reportingComments.has(comment.id)}
                          className="bg-red-500 hover:bg-red-600 text-white"
                        >
                          {reportingComments.has(comment.id) ? 'Gönderiliyor...' : 'Şikayet Et'}
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        </div>

        {/* Reply form */}
        {replyingTo === comment.id && session?.user && (
          <div className="mt-4 ml-11">
            <form onSubmit={handleReplySubmit}>
              <div className="flex items-start space-x-3">
                <Avatar className="h-6 w-6 rounded-lg">
                  <AvatarImage src={session?.user.image || undefined} alt={session?.user.name} />
                  <AvatarFallback className="h-6 w-6 rounded-lg bg-primary text-primary-foreground text-xs">
                    {session?.user.name?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <textarea 
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className="w-full border rounded-lg p-2 mb-2 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white resize-none text-sm" 
                    rows={2} 
                    placeholder="Yanıtınızı yazın..."
                    disabled={isSubmittingReply}
                  />
                  <div className="flex space-x-2">
                    <button 
                      type="submit"
                      disabled={isSubmittingReply || !replyText.trim()}
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                    >
                      {isSubmittingReply ? 'Gönderiliyor...' : 'Yanıtla'}
                    </button>
                    <button 
                      type="button"
                      onClick={onCancelReply}
                      className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors text-sm"
                    >
                      İptal
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-4">
            {comment.replies.map(reply => (
              <CommentItem
                key={reply.id}
                comment={reply}
                contentId={contentId}
                onReply={onReply}
                replyingTo={replyingTo}
                onCancelReply={onCancelReply}
                onReplySubmit={onReplySubmit}
                onLike={onLike}
                onReport={onReport}
                likingComments={likingComments}
                reportingComments={reportingComments}
                isReply={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CommentSection({ contentId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [likingComments, setLikingComments] = useState<Set<string>>(new Set());
  const [reportingComments, setReportingComments] = useState<Set<string>>(new Set());
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    loadComments();
  }, [contentId]);

  const loadComments = async () => {
    try {
      setIsLoading(true);
      const data = await fetcher(`/api/comments?contentId=${contentId}`);
      setComments(data);
    } catch (error) {
      console.error('Error loading comments:', error);
      toast.error('Yorumlar yüklenirken hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!session?.user) {
      toast.error('Yorum yapmak için giriş yapmalısınız');
      return;
    }

    if (!newComment.trim()) {
      toast.error('Yorum içeriği boş olamaz');
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contentId,
          text: newComment.trim(),
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Yorum gönderilemedi');
      }

      const newCommentData = await response.json();
      // Add default like stats to new comment
      const commentWithStats = {
        ...newCommentData,
        likeCount: 0,
        dislikeCount: 0,
        netLikes: 0,
        userLikeStatus: null,
        replies: [],
      };
      setComments(prev => [commentWithStats, ...prev]);
      setNewComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
      toast.error(error instanceof Error ? error.message : 'Yorum gönderilirken hata oluştu');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReplySubmit = async (parentId: string, text: string) => {
    if (!session?.user) {
      toast.error('Yanıt yapmak için giriş yapmalısınız');
      return;
    }

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contentId,
          text,
          parentId,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Yanıt gönderilemedi');
      }

      // Reload comments to get updated replies
      await loadComments();
      toast.success('Yanıt başarıyla gönderildi');
    } catch (error) {
      console.error('Error submitting reply:', error);
      toast.error(error instanceof Error ? error.message : 'Yanıt gönderilirken hata oluştu');
    }
  };

  const handleLike = async (commentId: string, isLike: boolean) => {
    if (!session?.user) {
      toast.error('Beğenmek için giriş yapmalısınız');
      return;
    }

    if (likingComments.has(commentId)) {
      return; // Already processing
    }

    try {
      setLikingComments(prev => new Set(prev).add(commentId));
      
      const response = await fetch('/api/comments/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          commentId,
          isLike,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'İşlem başarısız');
      }

      // Reload comments to get updated like counts and order
      await loadComments();
    } catch (error) {
      console.error('Error liking comment:', error);
      toast.error(error instanceof Error ? error.message : 'İşlem sırasında hata oluştu');
    } finally {
      setLikingComments(prev => {
        const newSet = new Set(prev);
        newSet.delete(commentId);
        return newSet;
      });
    }
  };

  const handleReply = (parentId: string) => {
    setReplyingTo(parentId);
  };

  const handleCancelReply = () => {
    setReplyingTo(null);
  };

  const handleReport = async (commentId: string, reason: string, details?: string) => {
    if (!session?.user) {
      toast.error('Şikayet etmek için giriş yapmalısınız');
      return;
    }

    if (reportingComments.has(commentId)) {
      return; // Already processing
    }

    try {
      setReportingComments(prev => new Set(prev).add(commentId));
      
      const response = await fetch('/api/comments/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          commentId,
          reason,
          details,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Şikayet gönderilemedi');
      }

      toast.success('Yorum başarıyla şikayet edildi. İnceleme için teşekkürler.');
    } catch (error) {
      console.error('Error reporting comment:', error);
      toast.error(error instanceof Error ? error.message : 'Şikayet sırasında hata oluştu');
    } finally {
      setReportingComments(prev => {
        const newSet = new Set(prev);
        newSet.delete(commentId);
        return newSet;
      });
    }
  };

  // Calculate total comments including replies
  const totalComments = comments.reduce((total, comment) => {
    return total + 1 + (comment.replies?.length || 0);
  }, 0);

  if (isLoading) {
    return (
      <div className="p-4 bg-gray-50 dark:bg-gray-900">
        <h3 className="text-xl font-bold mb-4 border-b pb-2">Yorumlar</h3>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-300 rounded w-1/6 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-900">
      <h3 className="text-xl font-bold mb-4 border-b pb-2">
        Yorumlar ({totalComments})
      </h3>
      
      {/* Add new comment form */}
      {session?.user ? (
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex items-start space-x-3">
          <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={session?.user.image || undefined} alt={session?.user.name} />
              <AvatarFallback className="h-8 w-8 rounded-lg bg-primary text-primary-foreground">
                {session?.user.name?.charAt(0).toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <textarea 
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full border rounded-lg p-3 mb-2 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white resize-none" 
                rows={3} 
                placeholder="Yorumunuzu yazın..."
                disabled={isSubmitting}
              />
              <button 
                type="submit"
                disabled={isSubmitting || !newComment.trim()}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Yorum Yap'}
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <p className="text-yellow-800 dark:text-yellow-200">
            Yorum yapmak için <a href="/sign-in" className="underline hover:no-underline">giriş yapın</a>.
          </p>
        </div>
      )}

      {/* Comments list */}
      {comments.length === 0 ? (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          <p>Henüz hiç yorum yapılmamış.</p>
          <p className="text-sm mt-1">İlk yorumu siz yapın!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map(comment => (
            <CommentItem
              key={comment.id}
              comment={comment}
              contentId={contentId}
              onReply={handleReply}
              replyingTo={replyingTo}
              onCancelReply={handleCancelReply}
              onReplySubmit={handleReplySubmit}
              onLike={handleLike}
              onReport={handleReport}
              likingComments={likingComments}
              reportingComments={reportingComments}
            />
          ))}
        </div>
      )}
    </div>
  );
}