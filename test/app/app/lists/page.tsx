"use client"

import { useEffect, useState } from 'react'
import { useSession } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { Routes } from '@/lib/routes'
import { List, Plus, Users, Lock } from 'lucide-react'
import CreateListForm from '@/components/lists/create-list-form'
import ListCard from '@/components/lists/list-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface UserList {
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

export default function ListsPage() {
  const { data: session, isPending } = useSession()
  const router = useRouter()
  const [userLists, setUserLists] = useState<UserList[]>([])
  const [publicLists, setPublicLists] = useState<UserList[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isPending) return
    
    if (!session?.user) {
      router.push(Routes.Pages.SignIn)
      return
    }

    fetchLists()
  }, [session, isPending, router])

  const fetchLists = async () => {
    try {
      setIsLoading(true)
      const [userResponse, publicResponse] = await Promise.all([
        fetch('/api/lists'),
        fetch('/api/lists?public=true')
      ])

      if (userResponse.ok) {
        const userData = await userResponse.json()
        setUserLists(userData.lists)
      }

      if (publicResponse.ok) {
        const publicData = await publicResponse.json()
        setPublicLists(publicData.lists)
      }
    } catch (error) {
      console.error('Error fetching lists:', error)
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!session?.user) {
    return null
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <List className="w-8 h-8 text-blue-500" />
              Listelerim
            </h1>
            <p className="text-gray-600">
              Kişisel koleksiyonlarınızı oluşturun ve yönetin
            </p>
          </div>
          <CreateListForm onListCreated={fetchLists} />
        </div>
      </div>

      <Tabs defaultValue="my-lists" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="my-lists" className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            Listelerim ({userLists.length})
          </TabsTrigger>
          <TabsTrigger value="public-lists" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Halka Açık Listeler ({publicLists.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="my-lists" className="mt-6">
          {userLists.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {userLists.map((list) => (
                <ListCard
                  key={list.id}
                  list={list}
                  isOwner={true}
                  onListDeleted={fetchLists}
                  onListUpdated={fetchLists}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-sm mx-auto">
                <List className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Henüz liste oluşturmadınız
                </h3>
                <p className="text-gray-500 mb-6">
                  Beğendiğiniz film ve dizileri organize etmek için ilk listenizi oluşturun
                </p>
                <CreateListForm 
                  triggerText="İlk Listenizi Oluşturun"
                  triggerVariant="default"
                  onListCreated={fetchLists}
                />
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="public-lists" className="mt-6">
          {publicLists.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {publicLists.map((list) => (
                <ListCard
                  key={list.id}
                  list={list}
                  isOwner={false}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-sm mx-auto">
                <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Henüz halka açık liste yok
                </h3>
                <p className="text-gray-500">
                  Diğer kullanıcılar henüz halka açık liste paylaşmadı
                </p>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
} 