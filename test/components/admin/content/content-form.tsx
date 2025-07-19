"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { fetcher } from "@/lib/fetcher"
import { useTransition } from "react"
import { toast } from "sonner"
import { Spinner } from "@/components/ui/spinner"

const contentSchema = z.object({
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

type ContentFormData = z.infer<typeof contentSchema>

export const ContentForm = () => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<ContentFormData>({
    resolver: zodResolver(contentSchema),
    defaultValues: {
      title: "",
      summary: "",
      type: "FILM",
      releaseYear: new Date().getFullYear(),
      trailerUrl: "",
      image: "",
      director: "",
      actors: "",
      genres: "",
      platform: "NETFLIX",
    },
  })

  const onSubmit = async (data: ContentFormData) => {
    startTransition(async () => {
      try {
        const submitData = {
          ...data,
          actors: data.actors.split(",").map((actor) => actor.trim()),
          genres: data.genres.split(",").map((genre) => genre.trim()),
          trailerUrl: data.trailerUrl || undefined,
        }

        const response = await fetcher("/api/admin/content", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
        })

        if (response.success) {
          form.reset()
          toast.success("İçerik başarıyla eklendi!")
        }
      } catch (error) {
        console.error("Error adding content:", error)
        toast.error("İçerik eklenirken bir hata oluştu")
      }
    })
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">İçerik Ekle</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
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

            <FormField
              control={form.control}
              name="genres"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Türler</FormLabel>
                  <FormControl>
                    <Input placeholder="Aksiyon, Drama, Komedi..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? <Spinner /> : "İçerik Ekle"}
          </Button>
        </form>
      </Form>
    </div>
  )
}
