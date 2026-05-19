export default function Hero() {
  return (
    <section className="px-6 py-32 bg-gradient-to-br from-cyan-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        <div>

          <span className="inline-block px-6 py-3 rounded-full border border-cyan-300 text-cyan-500 mb-8">
            Ashvisor • AI-Powered AdTech & Performance Marketing Platform
          </span>

          <h1 className="text-7xl font-bold text-slate-900 leading-tight mb-8">
            Scale Your Revenue with Smart Performance Marketing
          </h1>

          <p className="text-xl text-slate-600 mb-10 max-w-2xl">
            We help brands, agencies, and enterprises maximize ROI through AI-powered advertising, data-driven insights, and scalable growth strategies.
          </p>

          <div className="flex gap-6">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg">
              Get Started
            </button>

            <button className="border border-slate-300 px-8 py-4 rounded-full font-semibold text-slate-700">
              Learn More
            </button>
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-100">
          
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-50 rounded-2xl p-6">
              <p className="text-slate-500 mb-3">Monthly Revenue</p>
              <h3 className="text-5xl font-bold text-slate-900">$2.8M</h3>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6">
              <p className="text-slate-500 mb-3">ROAS Growth</p>
              <h3 className="text-5xl font-bold text-purple-600">+40%</h3>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}