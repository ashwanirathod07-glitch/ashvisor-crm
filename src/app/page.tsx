import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Dashboard from "@/components/Dashboard"
import About from "@/components/About"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Dashboard />
    </main>
  )
}