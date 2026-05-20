"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="px-6 py-32 bg-gradient-to-br from-cyan-50 to-white"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>

          <span className="inline-block px-6 py-3 rounded-full border border-cyan-300 text-cyan-600 font-medium bg-white shadow-sm">
            Ashvisor • AI-Powered AdTech & Performance Marketing Platform
          </span>

          <h1 className="text-7xl font-bold text-slate-900 leading-tight mt-8">
            Scale Your Revenue with Smart Performance Marketing
          </h1>

          <p className="text-xl text-slate-600 mt-8 max-w-2xl leading-relaxed">
            We help brands, agencies, and enterprises maximize ROI through
            AI-powered advertising, data-driven insights, and scalable growth
            strategies.
          </p>

          <div className="flex flex-wrap gap-6 mt-12">

            <button
              className="
                bg-gradient-to-r from-cyan-500 to-purple-600
                text-white px-8 py-4 rounded-full font-semibold
                hover:scale-105 transition duration-300 shadow-lg
              "
            >
              Get Started
            </button>

            <button
              className="
                border border-slate-300
                px-8 py-4 rounded-full font-semibold text-slate-700
                hover:bg-slate-100 transition duration-300
              "
            >
              Learn More
            </button>

          </div>

        </div>

        {/* RIGHT DASHBOARD CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="
            bg-white rounded-[40px] p-10 shadow-2xl
            border border-slate-100
          "
        >

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-50 rounded-3xl p-8 shadow-sm">
              <p className="text-slate-500 text-lg mb-4">
                Monthly Revenue
              </p>

              <h3 className="text-6xl font-bold text-slate-900">
                $2.8M
              </h3>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 shadow-sm">
              <p className="text-slate-500 text-lg mb-4">
                ROAS Growth
              </p>

              <h3 className="text-6xl font-bold text-purple-600">
                +40%
              </h3>
            </div>

          </div>

          <div className="mt-10 bg-slate-50 rounded-3xl p-8">

            <div className="flex items-center justify-between mb-6">
              <h4 className="text-2xl font-bold text-slate-900">
                Campaign Performance
              </h4>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                Live Tracking
              </span>
            </div>

            {/* Progress Bars */}
            <div className="space-y-8">

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-600">Google Ads</span>
                  <span className="font-semibold">92%</span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-4">
                  <div className="bg-cyan-500 h-4 rounded-full w-[92%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-600">Meta Ads</span>
                  <span className="font-semibold">84%</span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-4">
                  <div className="bg-purple-500 h-4 rounded-full w-[84%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-600">Programmatic</span>
                  <span className="font-semibold">76%</span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-4">
                  <div className="bg-slate-900 h-4 rounded-full w-[76%]" />
                </div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </motion.section>
  )
}