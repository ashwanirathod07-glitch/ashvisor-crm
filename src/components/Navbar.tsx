"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent"
        >
          Ashvisor
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-slate-600 font-medium">

          <a
            href="#about"
            className="hover:text-cyan-500 transition duration-300"
          >
            About
          </a>

          <a
            href="#services"
            className="hover:text-cyan-500 transition duration-300"
          >
            Services
          </a>

          <a
            href="#platform"
            className="hover:text-cyan-500 transition duration-300"
          >
            Platform
          </a>

          <a
            href="#case-studies"
            className="hover:text-cyan-500 transition duration-300"
          >
            Case Studies
          </a>

          <a
            href="#pricing"
            className="hover:text-cyan-500 transition duration-300"
          >
            Pricing
          </a>

          <a
            href="#faq"
            className="hover:text-cyan-500 transition duration-300"
          >
            FAQ
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-500 transition duration-300"
          >
            Contact
          </a>

        </nav>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg">
          Book a Demo
        </button>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-800"
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {mobileMenuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-slate-200 shadow-xl"
          >

            <div className="flex flex-col px-6 py-8 gap-6 text-lg font-medium text-slate-700">

              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-cyan-500 transition"
              >
                About
              </a>

              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-cyan-500 transition"
              >
                Services
              </a>

              <a
                href="#platform"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-cyan-500 transition"
              >
                Platform
              </a>

              <a
                href="#case-studies"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-cyan-500 transition"
              >
                Case Studies
              </a>

              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-cyan-500 transition"
              >
                Pricing
              </a>

              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-cyan-500 transition"
              >
                FAQ
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-cyan-500 transition"
              >
                Contact
              </a>

              <button className="mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg">
                Book a Demo
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  )
}