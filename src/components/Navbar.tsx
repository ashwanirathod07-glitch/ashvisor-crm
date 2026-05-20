"use client"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
          Ashvisor
        </h1>

        <nav className="hidden md:flex gap-10 text-slate-600 font-medium">

          <a href="#about" className="hover:text-cyan-500 transition duration-300">
            About
          </a>

          <a href="#services" className="hover:text-cyan-500 transition duration-300">
            Services
          </a>

          <a href="#platform" className="hover:text-cyan-500 transition duration-300">
            Platform
          </a>

          <a href="#case-studies" className="hover:text-cyan-500 transition duration-300">
            Case Studies
          </a>

          <a href="#pricing" className="hover:text-cyan-500 transition duration-300">
            Pricing
          </a>

          <a href="#faq" className="hover:text-cyan-500 transition duration-300">
            FAQ
          </a>

          <a href="#contact" className="hover:text-cyan-500 transition duration-300">
            Contact
          </a>

        </nav>

        <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg">
          Book a Demo
        </button>

      </div>

    </header>
  )
}