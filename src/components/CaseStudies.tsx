"use client"

import { motion } from "framer-motion"

const caseStudies = [
  {
    title: "E-Commerce Brand",
    result: "+230% ROI",
    description:
      "Scaled revenue using AI-powered Meta and Google Ads optimization.",
  },
  {
    title: "SaaS Startup",
    result: "+180% Leads",
    description:
      "Improved lead generation through advanced audience targeting.",
  },
  {
    title: "Fashion Brand",
    result: "4.8X ROAS",
    description:
      "Boosted campaign performance with creative automation strategies.",
  },
]

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-28 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="text-cyan-500 font-semibold uppercase tracking-widest">
            Success Stories
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mt-6">
            Proven Growth Results
          </h2>

          <p className="text-slate-600 text-xl mt-6 max-w-3xl mx-auto">
            Real campaigns. Real performance. Real revenue growth.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">

          {caseStudies.map((study, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-50 rounded-3xl p-10 border border-slate-200 shadow-lg"
            >

              <div className="text-cyan-500 font-semibold mb-4">
                {study.title}
              </div>

              <h3 className="text-5xl font-bold text-slate-900 mb-6">
                {study.result}
              </h3>

              <p className="text-slate-600 leading-relaxed text-lg">
                {study.description}
              </p>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  )
}