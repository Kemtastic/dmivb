import React, { useState } from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Content } from "@/generated/prisma"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"
import { mutate } from "swr"
import { fetcher } from "@/lib/fetcher"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"

const updateContentSchema = z.object({
  title: z.string().min(1, "Başlık gereklidir"),
  summary: z.string().min(1, "Özet gereklidir"),
  type: z.enum(["FILM", "DIZI"]),
  releaseYear: z
    .number()
    .min(1900)
    .max(new Date().getFullYear() + 5),
  trailerUrl: z.string().optional().or(z.literal("")),
  image: z.string().optional().or(z.literal("")),
  director: z.string().min(1, "Yönetmen gereklidir"),
  actors: z.string().min(1, "En az bir oyuncu gereklidir"),
  genres: z.string().min(1, "En az bir tür gereklidir"),
  platform: z.enum(["NETFLIX", "PRIME", "HBO", "DISNEY"]),
})

type UpdateContentFormData = z.infer<typeof updateContentSchema>

interface EditDialogProps {
  content: Content | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const EditDialog = ({
  content,
  open,
  onOpenChange,
}: EditDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<UpdateContentFormData>({
    resolver: zodResolver(updateContentSchema),
    defaultValues: {
      title: content?.title || "",
      summary: content?.summary || "",
      type: content?.type,
      releaseYear: content?.releaseYear || 0,
      trailerUrl: content?.trailerUrl || "",
      image: content?.image || "",
      director: content?.director || "",
      actors: Array.isArray(content?.actors) ? content.actors.join(", ") : content?.actors || "",
      genres: Array.isArray(content?.genres) ? content.genres.join(", ") : content?.genres || "",
      platform: content?.platform,
    },
  })

  React.useEffect(() => {
    if (content) {
      form.reset({
        title: content.title,
        summary: content.summary,
        type: content.type,
        releaseYear: content.releaseYear,
        trailerUrl: content.trailerUrl || "",
        image: content.image || "",
        director: content.director,
        actors: Array.isArray(content.actors) ? content.actors.join(", ") : content.actors,
        genres: Array.isArray(content.genres) ? content.genres.join(", ") : content.genres,
        platform: content.platform,
      })
    }
  }, [content, form])

  const onSubmit = async (data: UpdateContentFormData) => {
    if (!content) return

    setIsSubmitting(true)
    try {
      const response = await fetcher("/api/admin/content", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: content.id,
          ...data,
          actors: data.actors.split(",").map(actor => actor.trim()).filter(Boolean),
          genres: data.genres.split(",").map(genre => genre.trim()).filter(Boolean),
        }),
      })

      if (!response.success) {
        throw new Error("İçerik güncellenirken bir hata oluştu")
      }
      await mutate("/api/admin/content")

      toast.success("İçerik güncellendi")
      onOpenChange(false)
    } catch (error) {
      toast.error("İçerik güncellenirken bir hata oluştu")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="lg:max-w-screen-md overflow-y-scroll max-h-[98vh]">
        <DialogHeader>
          <DialogTitle>İçerik Düzenle</DialogTitle>
        </DialogHeader>
        {content && (
          <div className="max-w-3xl mx-auto p-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Başlık</FormLabel>
                      <FormControl>
                        <Input placeholder="İçerik başlığı" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="summary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Özet</FormLabel>
                      <FormControl>
                        <Input placeholder="İçerik özeti" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>İçerik Türü</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="İçerik türü seçin" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="FILM">Film</SelectItem>
                            <SelectItem value="DIZI">Dizi</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="releaseYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Çıkış Yılı</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="2024"
                            className="w-full"
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseInt(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="platform"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Platform</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Platform seçin" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="NETFLIX">Netflix</SelectItem>
                            <SelectItem value="PRIME">Prime Video</SelectItem>
                            <SelectItem value="HBO">HBO</SelectItem>
                            <SelectItem value="DISNEY">Disney+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="trailerUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fragman URL'si (İsteğe Bağlı)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://www.youtube.com/watch?v=..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Resim URL'si (İsteğe Bağlı)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://www.example.com/image.jpg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="director"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Yönetmen</FormLabel>
                        <FormControl>
                          <Input placeholder="Yönetmen adı" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="actors"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Oyuncular</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Oyuncu1, Oyuncu2, Oyuncu3..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="genres"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Türler</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Aksiyon, Drama, Komedi..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? <Spinner /> : "İçerik Güncelle"}
                </Button>
              </form>
            </Form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
