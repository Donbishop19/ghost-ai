"use client"

import { useEffect } from "react"
import { useAuth } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

interface RootAuthRedirectProps {
  editorUrl: string
  signInUrl: string
}

export function RootAuthRedirect({
  editorUrl,
  signInUrl,
}: RootAuthRedirectProps) {
  const { isLoaded, isSignedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoaded) {
      return
    }

    router.replace(isSignedIn ? editorUrl : signInUrl)
  }, [editorUrl, isLoaded, isSignedIn, router, signInUrl])

  return (
    <main className="flex min-h-screen items-center justify-center bg-base px-6 text-copy-primary">
      <p className="text-sm text-copy-muted">Loading Ghost AI...</p>
    </main>
  )
}
