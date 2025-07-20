"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Plus, Check, List } from "lucide-react"
import { useSession } from "@/lib/auth-client"
import { toast } from "sonner"
import CreateListForm from "./create-list-form"

interface AddToListButtonProps {
  contentId: string
  className?: string
}

interface UserList {
  id: string
  name: string
  _count: {
    listItems: number
  }
}

export default function AddToListButton({ contentId, className }: AddToListButtonProps) {
  const { data: session } = useSession()
  const [userLists, setUserLists] = useState<UserList[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [addedToLists, setAddedToLists] = useState<string[]>([])
  const [showCreateListForm, setShowCreateListForm] = useState(false)

  // Fetch user's lists
  useEffect(() => {
    if (session?.user) {
      fetchUserLists()
    }
  }, [session])

  const fetchUserLists = async () => {
    try {
      const response = await fetch('/api/lists')
      if (response.ok) {
        const data = await response.json()
        setUserLists(data.lists)
      }
    } catch (error) {
      console.error('Error fetching lists:', error)
    }
  }

  // Check which lists already contain this content
  useEffect(() => {
    if (userLists.length > 0 && contentId) {
      checkContentInLists()
    }
  }, [userLists, contentId])

  const checkContentInLists = async () => {
    try {
      const promises = userLists.map(async (list) => {
        const response = await fetch(`/api/lists/${list.id}`)
        if (response.ok) {
          const data = await response.json()
          const hasContent = data.list.listItems.some(
            (item: any) => item.content.id === contentId
          )
          return hasContent ? list.id : null
        }
        return null
      })

      const results = await Promise.all(promises)
      const listsWithContent = results.filter(Boolean) as string[]
      setAddedToLists(listsWithContent)
    } catch (error) {
      console.error('Error checking content in lists:', error)
    }
  }

  const handleAddToList = async (listId: string) => {
    if (!session?.user) {
      toast.error("Listeye eklemek için giriş yapmanız gerekiyor")
      return
    }

    setIsLoading(true)
    
    try {
      const response = await fetch(`/api/lists/${listId}/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contentId }),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message)
        setAddedToLists(prev => [...prev, listId])
      } else {
        toast.error(result.error || 'Bir hata oluştu')
      }
    } catch (error) {
      console.error('Add to list error:', error)
      toast.error('Bir hata oluştu')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRemoveFromList = async (listId: string) => {
    if (!session?.user) {
      return
    }

    setIsLoading(true)
    
    try {
      const response = await fetch(`/api/lists/${listId}/items`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contentId }),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message)
        setAddedToLists(prev => prev.filter(id => id !== listId))
      } else {
        toast.error(result.error || 'Bir hata oluştu')
      }
    } catch (error) {
      console.error('Remove from list error:', error)
      toast.error('Bir hata oluştu')
    } finally {
      setIsLoading(false)
    }
  }

  if (!session?.user) {
    return null
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            disabled={isLoading}
            className={`flex items-center gap-2 ${className}`}
          >
            <Plus className="w-4 h-4" />
            Listeye Ekle
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          {userLists.length > 0 ? (
            <>
              {userLists.map((list) => {
                const isAdded = addedToLists.includes(list.id)
                return (
                  <DropdownMenuItem
                    key={list.id}
                    onClick={() => 
                      isAdded 
                        ? handleRemoveFromList(list.id)
                        : handleAddToList(list.id)
                    }
                    disabled={isLoading}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <List className="w-4 h-4" />
                        <span className="truncate">{list.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">
                          {list._count.listItems}
                        </span>
                        {isAdded && <Check className="w-4 h-4 text-green-500" />}
                      </div>
                    </div>
                  </DropdownMenuItem>
                )
              })}
              <DropdownMenuSeparator />
            </>
          ) : (
            <DropdownMenuItem disabled>
              <div className="text-center w-full text-gray-500">
                Henüz listeniz yok
              </div>
            </DropdownMenuItem>
          )}
          
          <DropdownMenuItem onClick={() => setShowCreateListForm(true)}>
            <div className="flex items-center gap-2 w-full">
              <Plus className="w-4 h-4" />
              <span>Yeni Liste Oluştur</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Create List Form - Rendered outside dropdown */}
      <CreateListForm 
        hideTrigger={true}
        open={showCreateListForm}
        onOpenChange={setShowCreateListForm}
        onListCreated={() => {
          fetchUserLists()
          setShowCreateListForm(false)
        }}
      />
    </>
  )
} 