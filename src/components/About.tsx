"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-28 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        <div>

          <span className="text-cyan-600 uppercase tracking-widest font-semibold">
            About Ashvisor
          </span>

          <h2 className="text-6xl font-bold text-slate-900 mt-6 leading-tight">
            AI-Powered Growth For Modern Brands
          </h2>

          <p className="text-xl text-slate-600 mt-8 leading-relaxed">
            Ashvisor helps businesses scale revenue using intelligent
            performance marketing, AI-driven optimization, and advanced advertising analytics.
          </p>

          <p className="text-xl text-slate-600 mt-6 leading-relaxed">
            We combine automation, creativity, and data science to maximize ROI and accelerate growth.
          </p>

          <button className="mt-10 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
            Learn More
          </button>

        </div>

        <div className="bg-gradient-to-br from-cyan-100 to-purple-100 rounded-[40px] p-10 grid grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-5xl font-bold text-cyan-600">250+</h3>
            <p className="text-slate-600 mt-4">Successful Campaigns</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-5xl font-bold text-purple-600">98%</h3>
            <p className="text-slate-600 mt-4">Client Satisfaction</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-5xl font-bold text-cyan-600">40%</h3>
            <p className="text-slate-600 mt-4">Average ROAS Growth</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-5xl font-bold text-purple-600">24/7</h3>
            <p className="text-slate-600 mt-4">AI Optimization</p>
          </div>

        </div>

      </div>
    </motion.section>
  )
}