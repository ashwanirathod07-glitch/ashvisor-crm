export default function Services() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <span className="text-cyan-500 font-semibold uppercase tracking-wider">
            Services
          </span>

          <h2 className="text-6xl font-bold text-slate-900 mt-6">
            Growth Solutions Built for Scale
          </h2>

          <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
            Ashvisor combines AI-driven insights, performance marketing, and advanced targeting to help businesses scale faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="p-10 rounded-3xl border border-slate-200 hover:shadow-2xl transition">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Programmatic Advertising
            </h3>

            <p className="text-slate-600 leading-relaxed">
              AI-powered media buying and audience targeting across multiple channels for maximum ROI.
            </p>
          </div>

          <div className="p-10 rounded-3xl border border-slate-200 hover:shadow-2xl transition">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Performance Marketing
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Scalable campaigns optimized for conversions, customer acquisition, and retention.
            </p>
          </div>

          <div className="p-10 rounded-3xl border border-slate-200 hover:shadow-2xl transition">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Analytics & Insights
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Real-time dashboards and advanced reporting to help you make smarter marketing decisions.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}