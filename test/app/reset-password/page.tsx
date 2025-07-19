import { ForgotPasswordForm } from '@/components/auth/forgot-password-form'
import { FormTitle } from '@/components/auth/form-title'
import { Suspense } from 'react'

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <FormTitle />
        <Suspense fallback={<div>Loading...</div>}>
          <ForgotPasswordForm />
        </Suspense>
      </div>
    </div>
  )
}
