export default function Dashboard() {
  return (
    <section className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <span className="text-purple-600 font-semibold uppercase tracking-wider">
            Analytics Dashboard
          </span>

          <h2 className="text-6xl font-bold text-slate-900 mt-6">
            Real-Time Marketing Intelligence
          </h2>

          <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
            Monitor campaign performance, ROAS, audience growth, and revenue metrics from one centralized dashboard.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-10">

          <div className="grid lg:grid-cols-3 gap-8 mb-10">

            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl p-8 text-white">
              <p className="text-cyan-100 mb-3">Monthly Revenue</p>
              <h3 className="text-5xl font-bold">$2.8M</h3>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 text-white">
              <p className="text-purple-100 mb-3">ROAS Growth</p>
              <h3 className="text-5xl font-bold">+40%</h3>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white">
              <p className="text-slate-300 mb-3">Active Campaigns</p>
              <h3 className="text-5xl font-bold">128</h3>
            </div>

          </div>

          <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200">

            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-slate-900">
                Campaign Performance
              </h3>

              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                Live Tracking
              </span>
            </div>

            <div className="space-y-6">

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-700 font-medium">Google Ads</span>
                  <span className="text-slate-900 font-bold">92%</span>
                </div>

                <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full w-[92%] bg-cyan-500 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-700 font-medium">Meta Ads</span>
                  <span className="text-slate-900 font-bold">84%</span>
                </div>

                <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full w-[84%] bg-purple-500 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-700 font-medium">Programmatic</span>
                  <span className="text-slate-900 font-bold">76%</span>
                </div>

                <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full w-[76%] bg-slate-800 rounded-full"></div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}