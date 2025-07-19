"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTransition } from "react"
import { signIn } from "@/lib/auth-client"
import { Spinner } from "@/components/ui/spinner"
import { toast } from "sonner"
import Link from "next/link"
import { Routes } from "@/lib/routes"
import CustomLogo from "../custom-logo"

export const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
})

export function SignInForm() {
  const [isPending, startTransition] = useTransition()
  const form = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof SignInSchema>) {
    startTransition(async () => {
      const { data, error } = await signIn.email({
        email: values.email,
        password: values.password,
        callbackURL: "/",
      })
      if (error) {
        toast.error(error.message)
      }
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Giriş Yap</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-6">
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-posta</FormLabel>
                          <FormControl>
                            <Input
                              disabled={isPending}
                              placeholder="e-posta@dmivb.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Şifre</Label>
                      <Link
                        href="/reset-password"
                        className={`ml-auto text-sm underline-offset-4 hover:underline ${
                          isPending ? "pointer-events-none opacity-50" : ""
                        }`}
                      >
                        Şifremi unuttum
                      </Link>
                    </div>
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              disabled={isPending}
                              placeholder="********"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? <Spinner /> : "Giriş Yap"}
                  </Button>
                </div>
                <div className="text-center text-sm">
                  DMIVb&apos;de yeni misiniz?{" "}
                  <Link
                    href="/sign-up"
                    className={`underline underline-offset-4 ${
                      isPending ? "pointer-events-none opacity-50" : ""
                    }`}
                  >
                    DMIVb hesabı oluştur
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
