import { ContentForm } from '@/components/admin/content/content-form'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { notFound } from 'next/navigation'

export default async function AdminPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session || session.user.role !== 'admin') {
    return notFound()
  }  
  return <ContentForm />
}
