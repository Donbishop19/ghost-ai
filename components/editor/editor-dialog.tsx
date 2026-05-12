"use client"

import * as React from "react"

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface EditorDialogContentProps
  extends Omit<React.ComponentProps<typeof DialogContent>, "title"> {
  title: React.ReactNode
  description?: React.ReactNode
  footer?: React.ReactNode
}

export function EditorDialogContent({
  title,
  description,
  footer,
  children,
  className,
  ...props
}: EditorDialogContentProps) {
  return (
    <DialogContent
      className={cn(
        "rounded-3xl border-surface-border bg-elevated text-copy-primary shadow-2xl",
        className
      )}
      {...props}
    >
      <DialogHeader className="gap-2">
        <DialogTitle className="text-copy-primary">{title}</DialogTitle>
        {description ? (
          <DialogDescription className="text-copy-muted">
            {description}
          </DialogDescription>
        ) : null}
      </DialogHeader>

      {children}

      {footer ? (
        <DialogFooter className="border-t border-surface-border pt-4">
          {footer}
        </DialogFooter>
      ) : null}
    </DialogContent>
  )
}
