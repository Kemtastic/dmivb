"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Plus } from "lucide-react"
import { toast } from "sonner"

interface CreateListFormProps {
  onListCreated?: () => void
  triggerText?: string
  triggerVariant?: "default" | "outline" | "secondary" | "ghost" | "link"
  open?: boolean
  onOpenChange?: (open: boolean) => void
  hideTrigger?: boolean
}

export default function CreateListForm({ 
  onListCreated, 
  triggerText = "Yeni Liste Oluştur",
  triggerVariant = "default",
  open: externalOpen,
  onOpenChange: externalOnOpenChange,
  hideTrigger = false
}: CreateListFormProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  
  // Use external state if provided, otherwise use internal state
  const open = externalOpen !== undefined ? externalOpen : internalOpen
  const setOpen = externalOnOpenChange || setInternalOpen
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    isPublic: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim()) {
      toast.error("Liste adı gereklidir")
      return
    }

    setIsLoading(true)
    
    try {
      const response = await fetch('/api/lists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message)
        setFormData({ name: "", description: "", isPublic: false })
        setOpen(false)
        onListCreated?.()
      } else {
        toast.error(result.error || 'Bir hata oluştu')
      }
    } catch (error) {
      console.error('Create list error:', error)
      toast.error('Liste oluşturulurken bir hata oluştu')
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {!hideTrigger && (
        <DialogTrigger asChild>
          <Button variant={triggerVariant} className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            {triggerText}
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Yeni Liste Oluştur</DialogTitle>
          <DialogDescription>
            Kişisel koleksiyonunuz için yeni bir liste oluşturun
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Liste Adı *</Label>
            <Input
              id="name"
              type="text"
              placeholder="ör. En İyi 90'lar Filmleri"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              maxLength={100}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Açıklama</Label>
            <textarea
              id="description"
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Bu liste hakkında kısa bir açıklama..."
              value={formData.description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("description", e.target.value)}
              maxLength={500}
              rows={3}
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="isPublic"
              className="h-4 w-4 rounded border border-input"
              checked={formData.isPublic}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("isPublic", e.target.checked)}
            />
            <Label htmlFor="isPublic" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Halka açık liste (diğer kullanıcılar görebilir)
            </Label>
          </div>

          <DialogFooter className="gap-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
              disabled={isLoading}
            >
              İptal
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Oluşturuluyor...' : 'Liste Oluştur'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
} 