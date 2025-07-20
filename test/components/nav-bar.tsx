"use client"

import Link from "next/link"
import CustomLogo from "./custom-logo"
import { ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useSession } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { Routes } from "@/lib/routes"
import { UserButton } from "./user-button"
import { User } from "@/generated/prisma"

export default function NavBar() {
  const { data: session, isPending, error } = useSession()
  const user = session?.user
  const router = useRouter()
  const pathname = usePathname()
  const [userType, setUserType] = useState<string | null>(null)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  // Define routes that should show simple navbar
  const simpleNavbarRoutes = [
    "/sign-up",
    "/reset-password",
    "/sign-in",
  ]

  // Check if current route should show simple navbar
  const isSimpleNavbar = simpleNavbarRoutes.includes(pathname)

  // Show full navbar for all routes except those in simpleNavbarRoutes
  const isFullNavbar = !isSimpleNavbar

  const navLinks = [
    {
      title: "Keşfet",
      href: "/search",
    },
    {
      title: "Filmler",
      href: "/movies",
    },
    {
      title: "Diziler",
      href: "/series",
    },
    {
      title: "Listelerim",
      href: "/app/lists",
    }
  ]

  return (
    <>
      <nav className="bg-black py-4 px-4 md:px-8 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center">
          <Link href="/">
            <CustomLogo />
          </Link>
          {isFullNavbar && (
            <div className="hidden md:flex space-x-8">
              {navLinks.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    href={item.href}
                    className="font-medium text-white flex items-center gap-1"
                  >
                    {item.title}
                    {item.subLinks && <ChevronDown className="w-4 h-4 ml-1" />}
                  </Link>
                  {item.subLinks && (
                    <div className="absolute left-0 top-4 mt-2 w-48 bg-black rounded-md shadow-lg hidden group-hover:block z-10">
                      <div className="p-4 space-y-2">
                        {item.subLinks.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block text-white hover:text-yellow-300"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {isFullNavbar && (
          <div className="flex items-center gap-4">
            {user ? (
              <UserButton user={user as User} />
            ) : (
              <Link
                href="/sign-in"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md font-medium transition-colors"
              >
                Giriş Yap
              </Link>
            )}
          </div>
        )}
      </nav>
    </>
  )
}
