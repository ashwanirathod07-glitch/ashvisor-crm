export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-5xl font-bold text-center mb-16">
          Trusted by Growth-Focused Brands
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <p className="text-gray-600 mb-6">
              “Ashvisor helped us scale ad ROI by 230% in just 3 months.”
            </p>

            <h3 className="font-bold text-xl">
              Sarah Johnson
            </h3>

            <p className="text-gray-500">
              Marketing Director
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <p className="text-gray-600 mb-6">
              “The AI insights completely changed how we optimize campaigns.”
            </p>

            <h3 className="font-bold text-xl">
              Michael Chen
            </h3>

            <p className="text-gray-500">
              Growth Strategist
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <p className="text-gray-600 mb-6">
              “Beautiful dashboard, powerful analytics, and incredible support.”
            </p>

            <h3 className="font-bold text-xl">
              Emily Rodriguez
            </h3>

            <p className="text-gray-500">
              Startup Founder
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}