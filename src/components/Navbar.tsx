"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <a
          href="#home"
          className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent"
        >
          Ashvisor
        </a>

        <nav className="hidden md:flex gap-10 text-slate-600 font-medium">

          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#platform">Platform</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>

        </nav>

        <button className="hidden md:block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold">
          Book a Demo
        </button>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {mobileMenuOpen && (

        <div className="md:hidden px-6 pb-6 flex flex-col gap-6 bg-white">

          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#platform">Platform</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>

        </div>

      )}

    </header>
  )
}