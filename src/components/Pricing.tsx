export default function Pricing() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <span className="text-cyan-500 font-semibold uppercase tracking-wider">
            Pricing
          </span>

          <h2 className="text-6xl font-bold text-slate-900 mt-6">
            Flexible Plans For Every Brand
          </h2>

          <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
            Choose a growth plan designed for startups, scaling brands,
            and enterprise-level performance marketing teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Starter */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-200">
            <h3 className="text-3xl font-bold mb-4">Starter</h3>

            <p className="text-slate-600 mb-8">
              Perfect for small businesses starting digital growth.
            </p>

            <div className="text-5xl font-bold text-slate-900 mb-8">
              $499
              <span className="text-lg text-slate-500 font-medium">
                /month
              </span>
            </div>

            <ul className="space-y-4 text-slate-700 mb-10">
              <li>✓ Meta Ads Management</li>
              <li>✓ Google Ads Setup</li>
              <li>✓ Monthly Reports</li>
              <li>✓ Basic Analytics Dashboard</li>
            </ul>

            <button className="w-full py-4 rounded-full bg-slate-900 text-white font-semibold hover:scale-105 transition duration-300">
              Get Started
            </button>
          </div>

          {/* Growth */}
          <div className="bg-gradient-to-br from-cyan-500 to-purple-600 rounded-3xl p-10 shadow-2xl text-white scale-105">
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-6">
              Most Popular
            </div>

            <h3 className="text-3xl font-bold mb-4">Growth</h3>

            <p className="text-white/80 mb-8">
              Built for scaling brands focused on ROI acceleration.
            </p>

            <div className="text-5xl font-bold mb-8">
              $1499
              <span className="text-lg font-medium">
                /month
              </span>
            </div>

            <ul className="space-y-4 mb-10">
              <li>✓ Multi-Channel Campaigns</li>
              <li>✓ AI Optimization</li>
              <li>✓ Advanced Analytics</li>
              <li>✓ Weekly Reporting</li>
              <li>✓ Creative Strategy</li>
            </ul>

            <button className="w-full py-4 rounded-full bg-white text-slate-900 font-bold hover:scale-105 transition duration-300">
              Scale Faster
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-200">
            <h3 className="text-3xl font-bold mb-4">Enterprise</h3>

            <p className="text-slate-600 mb-8">
              Custom solutions for enterprise-scale advertising.
            </p>

            <div className="text-5xl font-bold text-slate-900 mb-8">
              Custom
            </div>

            <ul className="space-y-4 text-slate-700 mb-10">
              <li>✓ Dedicated Growth Team</li>
              <li>✓ Custom AI Models</li>
              <li>✓ Real-Time Intelligence</li>
              <li>✓ Unlimited Campaigns</li>
              <li>✓ Priority Support</li>
            </ul>

            <button className="w-full py-4 rounded-full border border-slate-900 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition duration-300">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}