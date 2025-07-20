"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff, 
  Calendar, 
  User,
  Film 
} from "lucide-react"
import { toast } from "sonner"
import { format } from "date-fns"
import { tr } from "date-fns/locale"

interface ListCardProps {
  list: {
    id: string
    name: string
    description?: string | null
    isPublic: boolean
    createdAt: string
    updatedAt: string
    user: {
      id: string
      name: string
      image?: string | null
    }
    listItems: Array<{
      content: {
        id: string
        title: string
        image?: string | null
        type: string
      }
    }>
    _count: {
      listItems: number
    }
  }
  isOwner?: boolean
  onListDeleted?: () => void
  onListUpdated?: () => void
}

export default function ListCard({ list, isOwner = false, onListDeleted, onListUpdated }: ListCardProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!confirm('Bu listeyi silmek istediğinizden emin misiniz?')) {
      return
    }

    setIsDeleting(true)
    
    try {
      const response = await fetch(`/api/lists/${list.id}`, {
        method: 'DELETE',
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message)
        onListDeleted?.()
      } else {
        toast.error(result.error || 'Liste silinirken bir hata oluştu')
      }
    } catch (error) {
      console.error('Delete list error:', error)
      toast.error('Liste silinirken bir hata oluştu')
    } finally {
      setIsDeleting(false)
    }
  }

  const handleTogglePrivacy = async () => {
    try {
      const response = await fetch(`/api/lists/${list.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isPublic: !list.isPublic
        }),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message)
        onListUpdated?.()
      } else {
        toast.error(result.error || 'Liste güncellenirken bir hata oluştu')
      }
    } catch (error) {
      console.error('Update list error:', error)
      toast.error('Liste güncellenirken bir hata oluştu')
    }
  }

  // Get first few content images for preview
  const previewImages = (list.listItems || []).slice(0, 4).map(item => item.content)

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg font-semibold line-clamp-2">
                {list.name}
              </CardTitle>
              <Badge variant={list.isPublic ? "default" : "secondary"} className="text-xs">
                {list.isPublic ? (
                  <><Eye className="w-3 h-3 mr-1" />Halka Açık</>
                ) : (
                  <><EyeOff className="w-3 h-3 mr-1" />Gizli</>
                )}
              </Badge>
            </div>
            
            {list.description && (
              <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                {list.description}
              </CardDescription>
            )}
          </div>
          
          {isOwner && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">İşlemler menüsü</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleTogglePrivacy}>
                  {list.isPublic ? (
                    <><EyeOff className="mr-2 h-4 w-4" />Gizli Yap</>
                  ) : (
                    <><Eye className="mr-2 h-4 w-4" />Halka Açık Yap</>
                  )}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="text-destructive focus:text-destructive"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  {isDeleting ? 'Siliniyor...' : 'Sil'}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </CardHeader>

      <CardContent>
        <Link href={`/app/lists/${list.id}`}>
          <div className="space-y-3 cursor-pointer">
            {/* Content Preview */}
            {previewImages.length > 0 ? (
              <div className="grid grid-cols-4 gap-1 h-20 rounded-md overflow-hidden">
                {previewImages.map((content, index) => (
                  <div key={content.id} className="relative bg-gray-100">
                    <Image
                      src={content.image || '/placeholder-movie.jpg'}
                      alt={content.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 25vw, 25vw"
                    />
                  </div>
                ))}
                {/* Fill remaining slots with placeholder */}
                {Array.from({ length: 4 - previewImages.length }).map((_, index) => (
                  <div key={`placeholder-${index}`} className="bg-gray-100 rounded flex items-center justify-center">
                    <Film className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-20 bg-gray-100 rounded-md flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Film className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-xs">Henüz içerik eklenmedi</span>
                </div>
              </div>
            )}

            {/* List Stats */}
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Film className="w-3 h-3" />
                  {list._count.listItems} içerik
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {format(new Date(list.updatedAt), 'dd MMM yyyy', { locale: tr })}
                </span>
              </div>
              
              {!isOwner && (
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {list.user.name}
                </span>
              )}
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  )
} 