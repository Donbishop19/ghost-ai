"use client"

import { useState } from "react"

import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"

export function EditorShell() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-base text-copy-primary">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((isOpen) => !isOpen)}
      />

      <main className="relative min-h-0 flex-1 overflow-hidden bg-base">
        <ProjectSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <section className="flex h-[calc(100vh-3.5rem)] items-center justify-center px-6">
          <div className="max-w-md text-center">
            <p className="text-sm font-medium text-copy-secondary">
              Editor workspace
            </p>
            <h1 className="mt-3 text-2xl font-semibold tracking-normal text-copy-primary">
              Your architecture canvas will live here.
            </h1>
            <p className="mt-3 text-sm leading-6 text-copy-muted">
              The protected editor route is ready for the upcoming project and
              collaborative canvas features.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
