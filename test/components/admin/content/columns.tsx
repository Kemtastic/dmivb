"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Content } from "@/generated/prisma"
import { Button } from "@/components/ui/button"
import { fetcher } from "@/lib/fetcher"
import { toast } from "sonner"
import { mutate } from "swr"

const deleteContent = async (id: string) => {
  try {
    await fetcher("/api/admin/content", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
    
    toast.success("İçerik başarıyla silindi")
    // Refresh the content list
    mutate("/api/admin/content")
  } catch (error) {
    console.error("Delete error:", error)
    toast.error("İçerik silinirken bir hata oluştu")
  }
}

export const columns: ColumnDef<Content>[] = [
  {
    accessorKey: "title",
    header: "Başlık",
  },
  {
    accessorKey: "type",
    header: "Tür",
  },
  {
    accessorKey: "platform",
    header: "Platform",
  },
  {
    accessorKey: "releaseYear",
    header: "Yayın Yılı",
  },
  {
    accessorKey: "director",
    header: "Yönetmen",
  },
  {
    accessorKey: "createdAt",
    header: "Oluşturulma Tarihi",
    cell: ({ row }) => {
      const createdAt = new Date(row.original.createdAt)
      return (
        <div className="text-sm">
          {createdAt.toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      )
    },
  },
  {
    accessorKey: "actions",
    header: "İşlemler",
    cell: ({ row }) => {
      const content = row.original
      
      return (
        <div className="flex gap-2">
          <Button 
            onClick={(e) => {
              e.stopPropagation()
              if (confirm("Bu içeriği silmek istediğinizden emin misiniz?")) {
                deleteContent(content.id)
              }
            }} 
            variant="outline" 
            size="sm" 
            className="cursor-pointer hover:bg-red-50 hover:text-red-600 hover:border-red-300"
          >
            Sil
          </Button>
        </div>
      )
    },
  },
]
