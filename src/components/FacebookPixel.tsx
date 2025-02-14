"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { initFacebookPixel, pageview } from "@/lib/facebook-pixel"

export default function FacebookPixel() {
  const pathname = usePathname()

  useEffect(() => {
    initFacebookPixel()
  }, [])

  useEffect(() => {
    pageview()
  }, [pathname])

  return null
}
