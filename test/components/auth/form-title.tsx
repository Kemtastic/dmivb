import { Bot } from "lucide-react"
import Link from "next/link"
import CustomLogo from "../custom-logo"

export function FormTitle() {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <Link
        href="/"
        className="flex items-center gap-2 self-center font-medium"
      >
        <CustomLogo />
      </Link>
    </div>
  )
}
