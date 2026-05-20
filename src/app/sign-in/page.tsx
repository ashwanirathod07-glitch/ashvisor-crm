"use client"

import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

      <div className="relative z-10 w-full max-w-md">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome Back
          </h1>

          <p className="text-slate-400 text-lg">
            Sign in to access your AI dashboard
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">

          <SignIn
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-cyan-500 hover:bg-cyan-400 text-black font-semibold",
                card:
                  "bg-transparent shadow-none",
                headerTitle:
                  "hidden",
                headerSubtitle:
                  "hidden",
                socialButtonsBlockButton:
                  "bg-slate-800 border border-slate-700 text-white hover:bg-slate-700",
                formFieldInput:
                  "bg-slate-800 border border-slate-700 text-white",
                footerActionLink:
                  "text-cyan-400 hover:text-cyan-300",
              },
            }}
          />

        </div>
      </div>
    </main>
  )
}