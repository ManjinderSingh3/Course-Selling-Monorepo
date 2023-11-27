import Link from "next/link";

export function SigninAndSignupButtons() {
  return (
    <div className="hidden lg:block">
      <Link
        href="/sign-in"
        className="animate-fade-in rounded-full px-4 py-1.5 text-sm font-medium text-primary transition-colors ease-out hover:text-primary"
      >
        Sign in
      </Link>
      <Link
        href="/sign-up"
        className="animate-fade-in rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
      >
        Sign Up
      </Link>
    </div>
  );
}
