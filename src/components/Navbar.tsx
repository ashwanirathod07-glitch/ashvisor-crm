"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
          Ashvisor
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-slate-600 font-medium">

          <a href="#" className="hover:text-cyan-500 transition">
            About
          </a>

          <a href="#" className="hover:text-cyan-500 transition">
            Services
          </a>

          <a href="#" className="hover:text-cyan-500 transition">
            Platform
          </a>

          <a href="#" className="hover:text-cyan-500 transition">
            Case Studies
          </a>

          <a href="#" className="hover:text-cyan-500 transition">
            Contact
          </a>

        </nav>

        {/* Desktop CTA */}
        <button
          className="
            hidden md:block
            bg-gradient-to-r from-cyan-500 to-purple-600
            text-white px-8 py-4 rounded-full font-semibold
            hover:scale-105 transition duration-300 shadow-lg
          "
        >
          Book a Demo
        </button>

        {/* Mobile Button */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 bg-white border-t border-slate-200">

          <nav className="flex flex-col gap-6 text-slate-700 font-medium mt-6">

            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Platform</a>
            <a href="#">Case Studies</a>
            <a href="#">Contact</a>

            <button
              className="
                mt-4
                bg-gradient-to-r from-cyan-500 to-purple-600
                text-white px-6 py-4 rounded-full font-semibold
              "
            >
              Book a Demo
            </button>

          </nav>
        </div>
      )}
    </header>
  )
}