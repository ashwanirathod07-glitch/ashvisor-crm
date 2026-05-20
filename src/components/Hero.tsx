"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="px-6 py-32 bg-gradient-to-br from-cyan-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div>

          <span className="inline-block px-6 py-3 rounded-full border border-cyan-300 text-cyan-600 font-medium bg-white shadow-sm">
            Ashvisor • AI-Powered AdTech & Performance Marketing
          </span>

          <h1 className="text-7xl font-bold text-slate-900 leading-tight mt-8">
            Scale Your Revenue with Smart Performance Marketing
          </h1>

          <p className="text-xl text-slate-600 mt-8 max-w-2xl leading-relaxed">
            We help brands, agencies, and enterprises maximize ROI through
            AI-powered advertising, data-driven insights, and scalable growth strategies.
          </p>

          <div className="flex gap-6 mt-10">

            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300">
              Get Started
            </button>

            <button className="border border-slate-300 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition duration-300">
              Learn More
            </button>

          </div>

        </div>

        {/* RIGHT */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="bg-white rounded-[40px] shadow-2xl p-10 border border-slate-100"
        >

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-50 p-8 rounded-3xl">
              <p className="text-slate-500 text-lg">Monthly Revenue</p>
              <h3 className="text-6xl font-bold text-slate-900 mt-4">$2.8M</h3>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl">
              <p className="text-slate-500 text-lg">ROAS Growth</p>
              <h3 className="text-6xl font-bold text-purple-600 mt-4">
                +40%
              </h3>
            </div>

          </div>

        </motion.div>

      </div>
    </motion.section>
  )
}