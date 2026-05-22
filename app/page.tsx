import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { RootAuthRedirect } from "@/components/auth/root-auth-redirect";

const signInUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? "/sign-in";
const editorUrl = "/editor";

interface HomeProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;

  if (params.__clerk_handshake) {
    return <RootAuthRedirect editorUrl={editorUrl} signInUrl={signInUrl} />;
  }

  const { isAuthenticated } = await auth();

  redirect(isAuthenticated ? editorUrl : signInUrl);
}
