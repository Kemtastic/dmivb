import { LoaderCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
export const Spinner = ({ className }: { className?: string }) => {
  return (
    <LoaderCircle
      className={cn('animate-spin size-4 [animation-duration:0.4s]', className)}
    />
  )
}
