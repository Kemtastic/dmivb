'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useTransition } from 'react'
import { signUp } from '@/lib/auth-client'
import { Spinner } from '@/components/ui/spinner'
import { toast } from 'sonner'
import Link from 'next/link'
import { Routes } from '@/lib/routes'

export const SignUpSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
  email: z.string().email({ message: 'Invalid email address' })
})

export function SignUpForm() {
  const [isPending, startTransition] = useTransition()
  const form = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })
  async function onSubmit(values: z.infer<typeof SignUpSchema>) {
    startTransition(async () => {
      const { data, error } = await signUp.email({
        email: values.email,
        password: values.password,
        name: values.name,
        image: '',
        callbackURL: "/"
      })
      if (data) {
        toast.success('Please check your email for verification')
      }
      if (error) {
        toast.error(error.message)
      }
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-6">
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Adınız</FormLabel>
                          <FormControl>
                            <Input
                              disabled={isPending}
                              placeholder="Ad ve soyadınız"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
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
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Şifre</FormLabel>
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
                    {isPending ? <Spinner /> : 'DMIVb hesabı oluştur'}
                  </Button>
                </div>
                <div className="text-center text-sm">
                  DMIVb&apos;de hesabınız var mı?{' '}
                  <Link
                    href="/sign-in"
                    className={`underline underline-offset-4 ${
                      isPending ? 'pointer-events-none opacity-50' : ''
                    }`}
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      {/* <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By signing up, you agree to our <a href="#">Terms of Service</a> and{" "}
        <a href="#">Privacy Policy</a>.
      </div> */}
    </div>
  )
}
