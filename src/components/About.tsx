export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <span className="text-cyan-600 font-semibold uppercase tracking-wider">
            About Ashvisor
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4 leading-tight">
            AI-Powered Growth
            <br />
            For Modern Brands
          </h2>

          <p className="text-slate-600 mt-6 text-lg leading-relaxed">
            Ashvisor helps businesses scale revenue using intelligent
            performance marketing, AI-driven optimization, and advanced
            advertising analytics.
          </p>

          <p className="text-slate-600 mt-4 text-lg leading-relaxed">
            We combine automation, creativity, and data science to help
            brands maximize ROI and accelerate growth across digital
            platforms.
          </p>

          <button className="mt-8 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition">
            Learn More
          </button>
        </div>

        <div className="bg-gradient-to-br from-cyan-100 to-purple-100 rounded-3xl p-10 shadow-xl">
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-4xl font-bold text-cyan-600">250+</h3>
              <p className="text-slate-600 mt-2">
                Successful Campaigns
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-4xl font-bold text-purple-600">98%</h3>
              <p className="text-slate-600 mt-2">
                Client Satisfaction
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-4xl font-bold text-cyan-600">40%</h3>
              <p className="text-slate-600 mt-2">
                Average ROAS Growth
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-4xl font-bold text-purple-600">24/7</h3>
              <p className="text-slate-600 mt-2">
                AI Optimization
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}