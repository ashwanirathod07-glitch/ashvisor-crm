"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Programmatic Advertising",
    description:
      "AI-powered media buying and audience targeting across multiple channels for maximum ROI.",
  },
  {
    title: "Performance Marketing",
    description:
      "Scalable campaigns optimized for conversions, customer acquisition, and retention.",
  },
  {
    title: "Analytics & Insights",
    description:
      "Real-time dashboards and advanced reporting to help you make smarter marketing decisions.",
  },
]

export default function Services() {
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

          <span className="text-cyan-500 font-semibold uppercase tracking-wider">
            Services
          </span>

          <h2 className="text-6xl font-bold text-slate-900 mt-6">
            Growth Solutions Built for Scale
          </h2>

          <p className="text-xl text-slate-600 mt-6 max-w-4xl mx-auto leading-relaxed">
            Ashvisor combines AI-driven insights, performance marketing,
            and advanced targeting to help businesses scale faster.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="
                bg-white
                rounded-3xl
                p-10
                shadow-lg
                border border-slate-100
                hover:shadow-2xl
                transition duration-300
              "
            >

              <div
                className="
                  w-16 h-16 rounded-2xl
                  bg-gradient-to-r from-cyan-500 to-purple-600
                  mb-8
                "
              />

              <h3 className="text-4xl font-bold text-slate-900 mb-6">
                {service.title}
              </h3>

              <p className="text-slate-600 text-xl leading-relaxed">
                {service.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  )
}