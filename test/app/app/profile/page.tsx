"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession, updateUser } from "@/lib/auth-client"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import useSWRMutation from 'swr/mutation'
import useSWR from 'swr'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

interface ProfileFormData {
  name: string
  bio: string
  location: string
  twitter: string
  instagram: string
}

async function fetcher(url: string) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Veri alınamadı')
  }
  return response.json()
}

async function updateProfile(url: string, { arg }: { arg: Omit<ProfileFormData, 'name'> }) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  })

  if (!response.ok) {
    throw new Error('Güncelleme başarısız')
  }

  return response.json()
}

export default function ProfilePage() {
  const { data: session, isPending: sessionLoading, error: sessionError } = useSession()
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const { data: userData, error: userError, mutate: mutateUser } = useSWR(
    session ? '/api/user' : null,
    fetcher
  )
  const { trigger, isMutating } = useSWRMutation('/api/user', updateProfile)

  const form = useForm<ProfileFormData>({
    defaultValues: {
      name: "",
      bio: "",
      location: "",
      twitter: "",
      instagram: "",
    },
  })

  // Populate form with user data when available
  useEffect(() => {
    if (userData?.user) {
      const user = userData.user
      form.reset({
        name: user.name || "",
        bio: user.bio || "",
        location: user.location || "",
        twitter: user.twitter || "",
        instagram: user.instagram || "",
      })
      
      if (user.image) {
        setPreviewUrl(user.image)
      }
    }
  }, [userData, form])

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      const imageUrl = URL.createObjectURL(file)
      setPreviewUrl(imageUrl)
    }
  }

  const onSubmit = async (data: ProfileFormData) => {
    try {
      // Update name with better-auth
      await updateUser({
        name: data.name,
      })

      // Update other fields with custom API
      const { name, ...otherFields } = data
      await trigger(otherFields)

      toast.success("Profil başarıyla güncellendi!")
      setSelectedImage(null)
      // Refresh user data after successful update
      mutateUser()
    } catch (error) {
      console.error('Profile update error:', error)
      toast.error("Profil güncellenirken bir hata oluştu.")
    }
  }

  if (sessionLoading || (session && !userData && !userError)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-yellow-500 text-lg">Yükleniyor...</div>
      </div>
    )
  }

  if (sessionError || !session || userError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-lg">
          {sessionError || userError ? 'Veri yüklenirken hata oluştu.' : 'Oturum açmanız gerekiyor.'}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-yellow-500">
              Profil Ayarları
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Sol Bölüm - Profil Fotoğrafı */}
                  <div className="space-y-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full bg-yellow-500 flex items-center justify-center overflow-hidden">
                          {previewUrl ? (
                            <img
                              src={previewUrl}
                              alt="Profile"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-20 w-20 text-black"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <label
                          htmlFor="profile-image"
                          className="absolute bottom-0 right-0 bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                          <input
                            type="file"
                            id="profile-image"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                        </label>
                      </div>
                      
                      {selectedImage && (
                        <p className="text-sm text-green-400">
                          Yeni fotoğraf seçildi (şimdilik sadece önizleme)
                        </p>
                      )}
                    </div>

                    <Card>
                      <CardContent className="p-4">
                        <Label className="text-yellow-500 text-sm font-medium">
                          E-posta
                        </Label>
                        <p className="text-lg mt-1">
                          {userData?.user?.email}
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <Label className="text-yellow-500 text-sm font-medium">
                          Üyelik Tarihi
                        </Label>
                        <p className="text-lg mt-1">
                          {userData?.user?.createdAt 
                            ? new Date(userData.user.createdAt).toLocaleDateString('tr-TR')
                            : 'Bilinmiyor'
                          }
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <Label className="text-yellow-500 text-sm font-medium">
                          Hesap Durumu
                        </Label>
                        <p className="text-lg mt-1">
                          {userData?.user?.emailVerified ? 'Doğrulanmış' : 'Doğrulanmamış'}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Sağ Bölüm - Form Alanları */}
                  <div className="md:col-span-2 space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-yellow-500 text-lg">
                          Kişisel Bilgiler
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          rules={{ required: "İsim gereklidir" }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>İsim</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="İsminizi girin"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Konum</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Şehir, Ülke"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-yellow-500 text-lg">
                          Biyografi
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <FormField
                          control={form.control}
                          name="bio"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <textarea
                                  {...field}
                                  rows={4}  
                                  placeholder="Kendinizden bahsedin..."
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-yellow-500 text-lg">
                          Sosyal Medya
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="twitter"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Twitter</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="@kullaniciadi"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="instagram"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Instagram</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="@kullaniciadi"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </CardContent>
                    </Card>

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        disabled={isMutating}
                        className="bg-yellow-500 hover:bg-yellow-400 font-medium px-8 py-2"
                      >
                        {isMutating ? "Güncelleniyor..." : "Profili Güncelle"}
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
