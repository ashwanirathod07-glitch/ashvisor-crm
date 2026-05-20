"use client"

import { useState } from "react"

const faqs = [
  {
    question: "How does Ashvisor improve marketing performance?",
    answer:
      "Ashvisor uses AI-driven optimization, analytics, and automation to improve ROI and campaign efficiency across digital platforms.",
  },
  {
    question: "Which advertising platforms do you support?",
    answer:
      "We support Google Ads, Meta Ads, programmatic advertising, YouTube, LinkedIn, and multi-channel growth campaigns.",
  },
  {
    question: "Do you provide analytics dashboards?",
    answer:
      "Yes. Our real-time dashboards help brands monitor ROAS, campaign performance, audience insights, and revenue metrics.",
  },
  {
    question: "Is Ashvisor suitable for startups?",
    answer:
      "Absolutely. We offer flexible pricing plans for startups, scaling brands, agencies, and enterprise businesses.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-20">
          <span className="text-cyan-500 font-semibold uppercase tracking-wider">
            FAQ
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-6">
            Frequently Asked Questions
          </h2>

          <p className="text-xl text-slate-600 mt-6">
            Everything you need to know about Ashvisor.
          </p>
        </div>

        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left bg-slate-50 hover:bg-slate-100 transition"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <span className="text-2xl text-cyan-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-8 py-6 bg-white text-slate-600 text-lg leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}