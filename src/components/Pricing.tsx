"use client"

import { motion } from "framer-motion"

const plans = [
  {
    title: "Starter",
    price: "$499",
    description:
      "Perfect for small businesses starting digital growth.",
    features: [
      "Meta Ads Management",
      "Google Ads Setup",
      "Monthly Reports",
      "Basic Analytics Dashboard",
    ],
    button: "Get Started",
    featured: false,
  },
  {
    title: "Growth",
    price: "$1499",
    description:
      "Built for scaling brands focused on ROI acceleration.",
    features: [
      "Multi-Channel Campaigns",
      "AI Optimization",
      "Advanced Analytics",
      "Weekly Reporting",
      "Creative Strategy",
    ],
    button: "Scale Faster",
    featured: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description:
      "Custom solutions for enterprise-scale advertising.",
    features: [
      "Dedicated Growth Team",
      "Custom AI Models",
      "Real-Time Intelligence",
      "Unlimited Campaigns",
      "Priority Support",
    ],
    button: "Contact Sales",
    featured: false,
  },
]

export default function Pricing() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">

          <span className="text-cyan-500 font-semibold uppercase tracking-wider">
            Pricing
          </span>

          <h2 className="text-6xl font-bold text-slate-900 mt-6">
            Flexible Plans For Every Brand
          </h2>

          <p className="text-xl text-slate-600 mt-6 max-w-4xl mx-auto leading-relaxed">
            Choose a growth plan designed for startups, scaling brands,
            and enterprise-level performance marketing teams.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{ y: -12 }}
              className={`
                rounded-3xl p-10 shadow-xl transition duration-300
                ${
                  plan.featured
                    ? "bg-gradient-to-br from-cyan-500 to-purple-600 text-white scale-105"
                    : "bg-white border border-slate-200"
                }
              `}
            >

              {plan.featured && (
                <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-6">
                  Most Popular
                </div>
              )}

              <h3 className="text-4xl font-bold mb-4">
                {plan.title}
              </h3>

              <p
                className={`mb-8 ${
                  plan.featured
                    ? "text-white/80"
                    : "text-slate-600"
                }`}
              >
                {plan.description}
              </p>

              <div className="text-6xl font-bold mb-8">
                {plan.price}

                {plan.price !== "Custom" && (
                  <span className="text-lg font-medium">
                    /month
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-10">

                {plan.features.map((feature, i) => (
                  <li key={i}>
                    ✓ {feature}
                  </li>
                ))}

              </ul>

              <button
                className={`
                  w-full py-4 rounded-full font-semibold transition duration-300
                  ${
                    plan.featured
                      ? "bg-white text-slate-900 hover:scale-105"
                      : "bg-slate-900 text-white hover:scale-105"
                  }
                `}
              >
                {plan.button}
              </button>

            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  )
}