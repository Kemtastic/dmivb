"use client"

import { DataTable } from "@/components/data-table"
import useSWR from "swr"
import { columns } from "./columns"
import { useState } from "react"
import { Content } from "@/generated/prisma"
import { fetcher } from "@/lib/fetcher"
import Link from "next/link"
import { Routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { EditDialog } from "./edit-content"

export const ContentsView = () => {
  const { data: contents, isLoading } = useSWR("/api/admin/content", fetcher)
  const [selectedContent, setSelectedContent] = useState<Content | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const handleRowClick = (content: Content) => {
    setSelectedContent(content)
    setDialogOpen(true)
  }

  return (
    <div className="flex flex-col gap-4 md:gap-6 py-4 md:py-6">
      <div className="flex justify-between px-4 lg:px-6">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-2xl font-medium">İçerikler</h1>
        </div>
        <div className="flex gap-x-2">
        <Link href={Routes.Pages.App.Admin.NewContent}>
          <Button
            variant="outline"
            size="sm"
            className="flex gap-x-2 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Yeni İçerik Ekle
          </Button>
        </Link>
      </div>
      </div>
      <div className="flex-1 pb-4 px-4 lg:px-6 flex flex-col gap-y-4">
        <DataTable
          columns={columns}
          data={contents?.data ?? []}
          loading={isLoading}
          onRowClick={handleRowClick}
        />
      </div>

      <EditDialog
        content={selectedContent}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  )
}
