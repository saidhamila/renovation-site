"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export function HomeButton() {
  const router = useRouter()

  const handleHomeClick = () => {
    router.push("/")
  }

  return (
    <Button
      onClick={handleHomeClick}
      className="bg-sky-500 hover:bg-sky-600 text-white font-semibold p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
    >
      <ArrowLeft className="h-5 w-5" />
    </Button>
  )
}