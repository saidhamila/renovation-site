"use client"

import { usePathname } from "next/navigation"
import { HomeButton } from "@/components/HomeButton"

export function ConditionalHomeButton() {
  const pathname = usePathname()

  if (pathname === "/") {
    return null
  }

  return (
    <div className="fixed top-25 left-4 z-50">
      <HomeButton />
    </div>
  )
}