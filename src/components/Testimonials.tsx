"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Nova Brands",
    quote:
      "Ashvisor helped us increase ROAS by 230% within just 3 months. The AI insights completely transformed our campaign strategy.",
  },
  {
    name: "Michael Chen",
    role: "Growth Strategist",
    company: "Elevate Media",
    quote:
      "The dashboard is beautiful, fast, and packed with powerful analytics. Our team now makes smarter decisions every day.",
  },
  {
    name: "Emily Rodriguez",
    role: "Startup Founder",
    company: "ScaleFlow",
    quote:
      "Their automation and optimization engine saved us hundreds of hours while improving campaign performance significantly.",
  },
]

export default function Testimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">

          <span className="text-cyan-500 font-semibold uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="text-6xl font-bold text-slate-900 mt-6">
            Trusted By Growth-Focused Brands
          </h2>

          <p className="text-xl text-slate-600 mt-6 max-w-4xl mx-auto leading-relaxed">
            Businesses worldwide rely on Ashvisor to scale revenue,
            optimize campaigns, and unlock AI-powered marketing intelligence.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-300"
            >

              {/* Quote */}
              <div className="text-5xl mb-6 text-cyan-500">
                “
              </div>

              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                {testimonial.quote}
              </p>

              {/* User */}
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold text-xl text-slate-900">
                    {testimonial.name}
                  </h4>

                  <p className="text-slate-500">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  )
}