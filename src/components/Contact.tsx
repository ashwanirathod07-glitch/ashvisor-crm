export default function Contact() {
  return (
    <section className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto text-center">

        <span className="text-cyan-400 font-semibold uppercase tracking-wider">
          Contact
        </span>

        <h2 className="text-5xl font-bold mt-6">
          Let's Scale Your Growth
        </h2>

        <p className="text-slate-300 text-xl mt-6 max-w-3xl mx-auto">
          Ready to accelerate your marketing performance with AI-powered
          advertising and analytics? Let’s talk.
        </p>

        <form className="mt-16 grid md:grid-cols-2 gap-6 text-left">

          <input
            type="text"
            placeholder="Your Name"
            className="bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500"
          />

          <input
            type="text"
            placeholder="Company Name"
            className="bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500 md:col-span-2"
          />

          <textarea
            rows={5}
            placeholder="Tell us about your goals..."
            className="bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500 md:col-span-2"
          />

          <button
            className="
              md:col-span-2
              bg-gradient-to-r from-cyan-500 to-purple-600
              py-4 rounded-2xl font-semibold text-lg
              hover:scale-[1.02] transition duration-300
            "
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  )
}