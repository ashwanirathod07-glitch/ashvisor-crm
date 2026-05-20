"use client"

import Link from "next/link"
import { SignInButton, UserButton, useUser } from "@clerk/nextjs"

export default function Navbar() {
  const { isSignedIn } = useUser()

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent"
        >
          Ashvisor
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-lg font-medium text-slate-700">

          <a href="#services" className="hover:text-cyan-500 transition">
            Services
          </a>

          <a href="#pricing" className="hover:text-cyan-500 transition">
            Pricing
          </a>

          <a href="#case-studies" className="hover:text-cyan-500 transition">
            Case Studies
          </a>

          <a href="#contact" className="hover:text-cyan-500 transition">
            Contact
          </a>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {!isSignedIn ? (
            <SignInButton mode="modal">
              <button className="bg-slate-950 text-white px-5 py-2 rounded-xl hover:bg-slate-800 transition">
                Admin Login
              </button>
            </SignInButton>
          ) : (
            <>
              <Link
                href="/dashboard"
                className="text-slate-700 hover:text-cyan-500 font-medium"
              >
                Dashboard
              </Link>

              <UserButton />
            </>
          )}

        </div>
      </div>
    </header>
  )
}