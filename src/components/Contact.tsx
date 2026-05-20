"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { supabase } from "@/lib/supabase"

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setLoading(true)

    const { error } = await supabase.from("leads").insert([
      {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        budget: formData.budget,
        message: formData.message,
      },
    ])

    setLoading(false)

    if (!error) {
      setSuccess(true)

      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: "",
      })
    } else {
      alert("Something went wrong")
      console.log(error)
    }
  }

  return (
    <section
      id="contact"
      className="px-6 py-24 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Let’s Scale Your Revenue
          </h2>

          <p className="text-slate-600 text-xl">
            Connect with Ashvisor to build profitable
            performance marketing systems.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-3xl p-10 shadow-xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-cyan-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-cyan-500"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-cyan-500"
            />

            <input
              type="text"
              name="budget"
              placeholder="Monthly Budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-cyan-500"
            />
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your goals..."
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-cyan-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-slate-900 text-white py-4 text-lg font-semibold hover:bg-cyan-600 transition"
          >
            {loading ? "Submitting..." : "Submit Inquiry"}
          </button>

          {success && (
            <p className="text-green-600 text-center font-semibold">
              Inquiry submitted successfully 🚀
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}