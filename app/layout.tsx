import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghost AI",
  description: "A real-time collaborative system design workspace.",
};

const signInUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? "/sign-in";
const signUpUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL ?? "/sign-up";
const editorUrl = "/editor";

const clerkAppearance = {
  theme: dark,
  variables: {
    colorPrimary: "var(--accent-primary)",
    colorPrimaryForeground: "var(--bg-base)",
    colorDanger: "var(--state-error)",
    colorSuccess: "var(--state-success)",
    colorWarning: "var(--state-warning)",
    colorNeutral: "var(--text-primary)",
    colorForeground: "var(--text-primary)",
    colorMuted: "var(--bg-subtle)",
    colorMutedForeground: "var(--text-muted)",
    colorBackground: "var(--bg-surface)",
    colorInput: "var(--bg-subtle)",
    colorInputForeground: "var(--text-primary)",
    colorRing: "var(--accent-primary)",
    colorBorder: "var(--border-default)",
    colorModalBackdrop: "var(--bg-base)",
    fontFamily: "var(--font-geist-sans)",
    fontFamilyButtons: "var(--font-geist-sans)",
    borderRadius: "var(--radius)",
  },
  elements: {
    rootBox: {
      width: "100%",
      fontFamily: "var(--font-geist-sans)",
    },
    cardBox: {
      width: "100%",
    },
    card: {
      backgroundColor: "var(--bg-surface)",
      borderColor: "var(--border-default)",
      borderWidth: "1px",
      borderStyle: "solid",
      boxShadow: "none",
      width: "100%",
    },
    headerTitle: {
      color: "var(--text-primary)",
      fontFamily: "var(--font-geist-sans)",
      fontSize: "1rem",
      fontWeight: "600",
      lineHeight: "1.5rem",
    },
    headerSubtitle: {
      color: "var(--text-muted)",
      fontFamily: "var(--font-geist-sans)",
    },
    socialButtonsBlockButton: {
      backgroundColor: "var(--bg-surface)",
      borderColor: "var(--border-default)",
      color: "var(--text-secondary)",
      fontFamily: "var(--font-geist-sans)",
    },
    dividerLine: {
      backgroundColor: "var(--border-default)",
    },
    dividerText: {
      color: "var(--text-muted)",
      fontFamily: "var(--font-geist-sans)",
    },
    formFieldLabel: {
      color: "var(--text-secondary)",
      fontFamily: "var(--font-geist-sans)",
    },
    formFieldInput: {
      backgroundColor: "var(--bg-subtle)",
      borderColor: "var(--border-subtle)",
      color: "var(--text-primary)",
      fontFamily: "var(--font-geist-sans)",
    },
    formButtonPrimary: {
      backgroundColor: "var(--accent-primary)",
      color: "var(--bg-base)",
      fontFamily: "var(--font-geist-sans)",
      fontWeight: "600",
    },
    footer: {
      backgroundColor: "var(--bg-elevated)",
      borderColor: "var(--border-default)",
    },
    footerActionText: {
      color: "var(--text-muted)",
      fontFamily: "var(--font-geist-sans)",
    },
    footerActionLink: {
      color: "var(--accent-primary)",
      fontFamily: "var(--font-geist-sans)",
      fontWeight: "600",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-base text-copy-primary">
        <ClerkProvider
          appearance={clerkAppearance}
          signInUrl={signInUrl}
          signUpUrl={signUpUrl}
          signInFallbackRedirectUrl={editorUrl}
          signUpFallbackRedirectUrl={editorUrl}
          afterSignOutUrl={signInUrl}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
