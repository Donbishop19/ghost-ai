import { SignIn } from "@clerk/nextjs";

import { AuthPageShell } from "@/components/auth/auth-page-shell";

const signInUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? "/sign-in";
const signUpUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL ?? "/sign-up";

export default function SignInPage() {
  return (
    <AuthPageShell>
      <SignIn
        routing="path"
        path={signInUrl}
        signUpUrl={signUpUrl}
        fallbackRedirectUrl="/editor"
      />
    </AuthPageShell>
  );
}
