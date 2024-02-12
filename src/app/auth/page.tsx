import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/app/auth/components/user-auth-form"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the pages.",
}

export default function AuthenticationPage() {
  return (
      <>
        <div className="container relative flex items-center justify-center lg:max-w-none lg:px-0 min-h-screen">
          <div className="lg:w-1/2 md:w-full lg:fixed lg:left-0 lg:top-10 lg:h-full lg:bg-background border-t border-primary/10 border lg:text-primary lg:flex lg:flex-col lg:justify-center lg:items-center lg:py-16 lg:px-8">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-4 h-12 w-12 text-primary"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            <h1 className="text-4xl font-bold mb-4 text-center lg:text-left">Maaagic AI</h1>
            <blockquote className="text-lg text-center lg:text-left">
              “This Open Source makes you integrate applications in rapid Speed”
              <footer className="text-sm">- Muhammad Fiaz</footer>
            </blockquote>
          </div>
          <div className="lg:w-1/2 md:w-full lg:ml-auto lg:px-8">
            <div className="mx-auto flex flex-col justify-center space-y-6 sm:max-w-[350px] lg:w-full lg:max-w-[400px]">
              <div className="flex flex-col space-y-2 text-center lg:text-left">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Sign in to your account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your email below to sign in your account
                </p>
              </div>
              <UserAuthForm />
              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                    href="/terms"
                    className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </>
  )
}
