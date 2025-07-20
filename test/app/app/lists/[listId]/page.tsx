"use client"

import { useEffect, useState } from 'react'
import { useSession } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { Routes } from '@/lib/routes'
import { 
  List, 
  ArrowLeft, 
  Plus, 
  Eye, 
  EyeOff, 
  Calendar, 
  User, 
  Film,
  Tv
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AddToListButton from '@/components/lists/add-to-list-button'

interface ListDetail {
  id: string
  name: string
  description?: string | null
  isPublic: boolean
  userId: string
  createdAt: string
  updatedAt: string
  user: {
    id: string
    name: string
    image?: string | null
  }
  listItems: Array<{
    id: string
    createdAt: string
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

export default function ListDetailPage({
  params
}: {
  params: Promise<{ listId: string }>
}) {
  const { data: session, isPending } = useSession()
  const router = useRouter()
  const [listId, setListId] = useState<string>('')
  const [list, setList] = useState<ListDetail | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    params.then(({ listId }) => {
      setListId(listId)
    })
  }, [params])

  useEffect(() => {
    if (listId && !isPending) {
      fetchList()
    }
  }, [listId, isPending])

  const fetchList = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/lists/${listId}`)
      
      if (response.ok) {
        const data = await response.json()
        setList(data.list)
      } else if (response.status === 404) {
        setNotFound(true)
      }
    } catch (error) {
      console.error('Error fetching list:', error)
      setNotFound(true)
    } finally {
      setIsLoading(false)
    }
  }

  if (isPending || isLoading) {
    return (
      <div className="container mx-auto p-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (notFound || !list) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Liste Bulunamadı</h1>
        <p className="text-gray-600 mb-4">Aradığınız liste mevcut değil veya erişim izniniz yok.</p>
        <Link href={Routes.Pages.App.Lists}>
          <Button>Listelerime Geri Dön</Button>
        </Link>
      </div>
    )
  }



  const isOwner = session?.user?.id === list.userId

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          <Link href={Routes.Pages.App.Lists}>
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Geri Dön
            </Button>
          </Link>
        </div>

        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">{list.name}</h1>
              <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${
                list.isPublic 
                  ? "bg-blue-100 text-blue-800" 
                  : "bg-gray-100 text-gray-800"
              }`}>
                {list.isPublic ? (
                  <><Eye className="w-4 h-4 mr-1" />Halka Açık</>
                ) : (
                  <><EyeOff className="w-4 h-4 mr-1" />Gizli</>
                )}
              </span>
            </div>
            
            {list.description && (
              <p className="text-gray-600 text-lg">{list.description}</p>
            )}

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Film className="w-4 h-4" />
                {list._count.listItems} içerik
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(list.updatedAt).toLocaleDateString('tr-TR')}
              </span>
              {!isOwner && (
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {list.user.name}
                </span>
              )}
            </div>
          </div>

          {isOwner && (
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                İçerik Ekle
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Content Grid */}
      {list.listItems.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {list.listItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-shadow">
              <Link href={`/${item.content.type === 'FILM' ? 'movies' : 'series'}/${item.content.id}`}>
                <div className="relative aspect-[2/3] overflow-hidden rounded-t-lg">
                  <Image
                    src={item.content.image || '/placeholder-movie.jpg'}
                    alt={item.content.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                  />
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${
                      item.content.type === 'FILM' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-green-500 text-white'
                    }`}>
                      {item.content.type === 'FILM' ? (
                        <Film className="w-3 h-3 inline mr-1" />
                      ) : (
                        <Tv className="w-3 h-3 inline mr-1" />
                      )}
                      {item.content.type === 'FILM' ? 'Film' : 'Dizi'}
                    </span>
                  </div>

                  {/* Remove from list button for owners */}
                  {isOwner && (
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <RemoveFromListButton 
                        listId={list.id}
                        contentId={item.content.id}
                        onRemoved={fetchList}
                      />
                    </div>
                  )}
                </div>
              </Link>

              <CardContent className="p-3">
                <h3 className="font-semibold text-sm line-clamp-2 mb-2">
                  {item.content.title}
                </h3>
                <p className="text-xs text-gray-500">
                  Eklenme: {new Date(item.createdAt).toLocaleDateString('tr-TR')}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="max-w-sm mx-auto">
            <List className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Bu liste boş
            </h3>
            <p className="text-gray-500 mb-6">
              {isOwner 
                ? "Listeye film ve diziler ekleyerek başlayın" 
                : "Bu listede henüz içerik bulunmuyor"
              }
            </p>
            {isOwner && (
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                İçerik Ekle
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// Component for removing content from list
function RemoveFromListButton({ 
  listId, 
  contentId, 
  onRemoved 
}: { 
  listId: string
  contentId: string
  onRemoved: () => void
}) {
  const handleRemove = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!confirm('Bu içeriği listeden çıkarmak istediğinizden emin misiniz?')) {
      return
    }

    try {
      const response = await fetch(`/api/lists/${listId}/items`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contentId }),
      })

      if (response.ok) {
        onRemoved()
      }
    } catch (error) {
      console.error('Remove from list error:', error)
    }
  }

  return (
    <button
      onClick={handleRemove}
      className="bg-red-500 hover:bg-red-600 text-white p-1 rounded-full transition-colors"
      title="Listeden çıkar"
    >
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  )
} 