import type { ReactNode } from "react";
import { Bot, FileText, Network } from "lucide-react";

interface AuthPageShellProps {
  children: ReactNode;
}

const featureList = [
  {
    icon: Bot,
    title: "AI Architecture Generation",
    description: "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Network,
    title: "Real-time Collaboration",
    description: "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: FileText,
    title: "Instant Spec Generation",
    description: "Export a complete Markdown technical spec directly from the canvas graph.",
  },
];

export function AuthPageShell({ children }: AuthPageShellProps) {
  return (
    <div className="flex min-h-screen bg-base font-sans text-copy-primary">
      <aside className="hidden min-h-screen w-1/2 flex-col justify-between border-r border-surface-border bg-surface px-12 py-10 lg:flex xl:px-16">
        <div className="flex items-center gap-3">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand text-xs font-semibold text-background"
            aria-hidden="true"
          >
            G
          </div>
          <div>
            <p className="text-sm font-semibold leading-none tracking-normal text-copy-primary">
              Ghost AI
            </p>
            <p className="mt-1 text-[0.65rem] leading-none text-copy-faint">
              System design workspace
            </p>
          </div>
        </div>

        <div className="max-w-[32rem] space-y-9">
          <div className="space-y-4">
            <h1 className="max-w-[24rem] text-4xl font-semibold leading-tight tracking-normal text-copy-primary">
              Design systems at the speed of thought.
            </h1>
            <p className="max-w-[33rem] text-sm leading-6 text-copy-muted">
              Describe your architecture in plain English. Ghost AI maps it to a
              shared canvas your whole team can refine in real time.
            </p>
          </div>

          <ul className="space-y-6">
            {featureList.map(({ description, icon: Icon, title }) => (
              <li key={title} className="flex gap-4">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-surface-subtle bg-accent-dim text-brand">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="space-y-1">
                  <span className="block text-sm font-medium text-copy-secondary">{title}</span>
                  <span className="block max-w-[30rem] text-xs leading-5 text-copy-muted">
                    {description}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-copy-faint">(c) 2026 Ghost AI. All rights reserved.</p>
      </aside>

      <main className="flex min-h-screen flex-1 items-center justify-center bg-base px-4 py-10 sm:px-6 lg:w-1/2">
        <div className="w-full max-w-[24rem]">{children}</div>
      </main>
    </div>
  );
}
