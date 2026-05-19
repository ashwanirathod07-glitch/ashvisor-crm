export default function Home() {
  const services = [
    {
      title: 'OfferWall Monetization',
      desc: 'Rewarded surveys, tasks, CPI campaigns, and monetization systems designed for publishers and app developers.',
      icon: '🎯',
    },
    {
      title: 'Rewarded Advertising',
      desc: 'High-retention rewarded video campaigns for gaming apps, utilities, and mobile-first brands.',
      icon: '📱',
    },
    {
      title: 'Programmatic Advertising',
      desc: 'Advanced RTB infrastructure with DSP & SSP integrations and AI-driven optimization.',
      icon: '📊',
    },
    {
      title: 'Meta Advertising',
      desc: 'Facebook & Instagram lead generation, retargeting, and conversion-focused campaigns.',
      icon: '🚀',
    },
    {
      title: 'Social Media Advertising',
      desc: 'TikTok, Snapchat, YouTube, and influencer traffic acquisition strategies.',
      icon: '🌐',
    },
    {
      title: 'Performance Marketing',
      desc: 'CPA, ROAS, affiliate marketing, and scalable user acquisition systems.',
      icon: '⚡',
    },
  ]

  const stats = [
    '500M+ Monthly Impressions',
    '120+ Global Clients',
    '98% Client Retention',
    '40% Average ROAS Growth',
    '50+ Countries Reached',
  ]

  const features = [
    'Advanced targeting',
    'Real-time analytics',
    'Anti-fraud protection',
    'AI campaign optimization',
    'Dedicated account managers',
    'Multi-channel scaling',
    'Transparent reporting',
    'High-quality traffic sources',
  ]

  const testimonials = [
    {
      name: 'Daniel Carter',
      company: 'NovaPlay Studios',
      quote:
        'Outstanding ROAS and incredible support. Our app revenue increased by 300% within months.',
    },
    {
      name: 'Sophia Blake',
      company: 'ScaleCommerce',
      quote:
        'Their rewarded advertising campaigns delivered high-quality users with exceptional retention.',
    },
    {
      name: 'Ethan Brooks',
      company: 'GlobalAd Labs',
      quote:
        'Reliable traffic, transparent reporting, and powerful automation tools.',
    },
  ]

  const caseStudies = [
    {
      title: 'Gaming App Growth',
      problem: 'Low retention and high CPI.',
      strategy: 'Rewarded video campaigns with AI audience targeting.',
      results: '+270% installs, +180% retention uplift.',
    },
    {
      title: 'E-commerce ROAS Scaling',
      problem: 'High CAC and low conversion rates.',
      strategy: 'Meta Ads retargeting and performance creatives.',
      results: '4.5X ROAS and 62% lower acquisition cost.',
    },
    {
      title: 'OfferWall Monetization Success',
      problem: 'Underperforming publisher revenue.',
      strategy: 'Rewarded surveys and CPI monetization optimization.',
      results: '+320% revenue growth.',
    },
    {
      title: 'Lead Generation Campaign',
      problem: 'Poor lead quality from social ads.',
      strategy: 'Multi-channel social advertising with AI optimization.',
      results: '+210% qualified leads.',
    },
  ]

  const partners = [
    'Meta',
    'Google Ads',
    'TikTok',
    'Snapchat',
    'Unity Ads',
    'AppLovin',
    'IronSource',
    'Programmatic Exchanges',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-cyan-50 text-slate-900 overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#c4b5fd55,transparent_35%),radial-gradient(circle_at_bottom_left,#67e8f955,transparent_35%)]"></div>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ashvisor
            </h1>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition">About</a>
            <a href="#services" className="hover:text-slate-900 transition">Services</a>
            <a href="#platform" className="hover:text-slate-900 transition">Platform</a>
            <a href="#cases" className="hover:text-slate-900 transition">Case Studies</a>
            <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
          </nav>

          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-2 rounded-full text-sm font-semibold shadow-2xl hover:scale-105 transition">
            Book a Demo
          </button>
        </div>
      </header>

      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-6">
            Ashvisor • AI-Powered AdTech & Performance Marketing Platform
          </span>

          <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8">
            Scale Your Revenue with Smart Rewarded & Performance Advertising
          </h2>

          <p className="text-slate-600 text-lg leading-8 mb-10 max-w-2xl">
            We help brands, apps, and publishers grow through OfferWall monetization,
            programmatic advertising, Meta campaigns, and high-performance social ads.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition shadow-2xl">
              Book a Demo
            </button>
            <button className="border border-white/20 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
              Start Advertising
            </button>
            <button className="border border-cyan-500/30 px-8 py-4 rounded-2xl font-semibold text-cyan-300 hover:bg-cyan-500/10 transition">
              Become a Publisher
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-12 -left-12 h-40 w-40 bg-purple-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-40 w-40 bg-cyan-500/30 rounded-full blur-3xl"></div>

          <div className="relative bg-white border border-slate-200 backdrop-blur-xl rounded-[32px] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <p className="text-slate-400 text-sm mb-2">Monthly Revenue</p>
                <h3 className="text-3xl font-black">$2.8M</h3>
                <div className="mt-4 h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="w-4/5 h-full bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <p className="text-slate-400 text-sm mb-2">ROAS Growth</p>
                <h3 className="text-3xl font-black">+40%</h3>
                <div className="mt-4 flex gap-1">
                  <div className="h-16 w-4 rounded-full bg-cyan-500"></div>
                  <div className="h-20 w-4 rounded-full bg-purple-500"></div>
                  <div className="h-12 w-4 rounded-full bg-cyan-400"></div>
                  <div className="h-24 w-4 rounded-full bg-purple-400"></div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-slate-400 text-sm">Live Campaign Analytics</p>
                  <h4 className="text-xl font-bold">Programmatic Dashboard</h4>
                </div>
                <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">
                  Live Tracking
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>OfferWall Campaigns</span>
                    <span>89%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="w-[89%] h-full bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Meta Ads Performance</span>
                    <span>76%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="w-[76%] h-full bg-gradient-to-r from-purple-500 to-cyan-500"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Rewarded Video Revenue</span>
                    <span>94%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="w-[94%] h-full bg-gradient-to-r from-cyan-400 to-purple-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-5xl font-black mb-8">
              Performance Marketing Powered by Data & Automation
            </h3>

            <p className="text-slate-600 leading-8 text-lg mb-8">
              Ashvisor specializes in OfferWall advertising, rewarded user acquisition,
              programmatic ad buying, Meta Ads management, and high-performance social
              media growth campaigns.
            </p>

            <div className="grid grid-cols-2 gap-4 text-slate-600">
              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                🌍 Global Reach
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                ⚙️ Real-Time Optimization
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                🛡️ Fraud Protection
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                🤖 AI-Driven Targeting
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-slate-200 rounded-3xl p-8 backdrop-blur-xl"
              >
                <h4 className="text-3xl font-black mb-3">{item.split(' ')[0]}</h4>
                <p className="text-slate-600">{item.replace(item.split(' ')[0], '')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-28 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold">
              Services
            </span>
            <h3 className="text-5xl font-black mt-5 mb-6">
              Full-Scale Advertising & Monetization Solutions
            </h3>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Powerful advertising technologies designed for brands, app developers,
              gaming studios, and enterprise publishers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-[28px] p-8 backdrop-blur-xl hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-3xl mb-6 shadow-2xl">
                  {service.icon}
                </div>

                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-7">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-500/20 border border-slate-200 rounded-[40px] p-12 backdrop-blur-xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((item, index) => (
                <div key={index}>
                  <h4 className="text-4xl font-black mb-3 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {item.split(' ')[0]}
                  </h4>
                  <p className="text-slate-600">{item.replace(item.split(' ')[0], '')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-black mb-6">Why Choose Ashvisor</h3>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Advanced advertising infrastructure built for performance, scalability,
              and measurable ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-500/40 transition"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-5">
                  ✓
                </div>
                <h4 className="font-semibold text-lg">{feature}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="py-28 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-black mb-6">Unified AdTech Dashboard</h3>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Monitor campaigns, optimize revenue, track conversions, and scale globally
              from one intelligent platform.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-[40px] p-10 shadow-[0_20px_80px_rgba(15,23,42,0.08)] overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-200">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h4 className="text-2xl font-bold">Campaign Dashboard</h4>
                    <p className="text-slate-400 mt-2">Real-time analytics & revenue tracking</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="bg-slate-100 rounded-2xl p-5">
                    <p className="text-slate-400 text-sm mb-2">Conversions</p>
                    <h5 className="text-3xl font-black">128K</h5>
                  </div>
                  <div className="bg-slate-100 rounded-2xl p-5">
                    <p className="text-slate-400 text-sm mb-2">Revenue</p>
                    <h5 className="text-3xl font-black">$1.2M</h5>
                  </div>
                  <div className="bg-slate-100 rounded-2xl p-5">
                    <p className="text-slate-400 text-sm mb-2">CTR</p>
                    <h5 className="text-3xl font-black">8.4%</h5>
                  </div>
                </div>

                <div className="h-64 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-slate-200 flex items-end justify-between px-8 pb-8">
                  {[40, 65, 55, 80, 72, 96, 88].map((height, i) => (
                    <div
                      key={i}
                      className="w-10 rounded-t-2xl bg-gradient-to-t from-cyan-500 to-purple-600"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-6 border border-slate-200">
                  <h5 className="font-bold text-xl mb-4">Publisher Panel</h5>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Revenue insights</li>
                    <li>• OfferWall optimization</li>
                    <li>• Fraud monitoring</li>
                    <li>• Global payout tracking</li>
                  </ul>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200">
                  <h5 className="font-bold text-xl mb-4">Advertiser Panel</h5>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Real-time analytics</li>
                    <li>• Audience segmentation</li>
                    <li>• Campaign automation</li>
                    <li>• AI optimization tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-black mb-6">Trusted by Global Brands</h3>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              We help publishers, advertisers, and enterprise clients scale revenue with measurable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-[32px] p-8 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600"></div>
                  <div>
                    <h4 className="font-bold text-lg">{item.name}</h4>
                    <p className="text-slate-400">{item.company}</p>
                  </div>
                </div>

                <p className="text-slate-600 leading-8 mb-6">“{item.quote}”</p>

                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-28 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-black mb-6">Case Studies</h3>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Proven performance marketing campaigns delivering measurable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-[32px] p-8 backdrop-blur-xl hover:border-cyan-400/40 transition"
              >
                <span className="inline-flex px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-300 text-sm mb-5">
                  ROI Success Story
                </span>

                <h4 className="text-3xl font-bold mb-6">{item.title}</h4>

                <div className="space-y-5 text-slate-600 leading-7">
                  <p><strong className="text-slate-900">Problem:</strong> {item.problem}</p>
                  <p><strong className="text-slate-900">Strategy:</strong> {item.strategy}</p>
                  <p><strong className="text-slate-900">Results:</strong> {item.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-5xl font-black mb-12">Partners & Integrations</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 text-slate-600 font-semibold hover:border-cyan-500/40 transition"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-28 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold">
                Contact Us
              </span>

              <h3 className="text-5xl font-black mt-6 mb-8">
                Let’s Scale Your Advertising Revenue
              </h3>

              <p className="text-slate-600 text-lg leading-8 mb-10">
                Connect with our growth specialists to launch high-performance campaigns,
                monetize traffic, and maximize ROAS across global markets.
              </p>

              <div className="space-y-5 text-slate-600">
                <div className="bg-white border border-slate-200 rounded-2xl p-5">
                  📧 hello@ashvisor.com
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-5">
                  💬 WhatsApp Support Available
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-5">
                  ✈️ Telegram Business Inquiries
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[40px] p-10 backdrop-blur-xl">
              <h4 className="text-3xl font-black mb-8">Request a Demo</h4>

              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-slate-100 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400"
                />

                <input
                  type="email"
                  placeholder="Business Email"
                  className="w-full bg-slate-100 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400"
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full bg-slate-100 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400"
                />

                <textarea
                  placeholder="Tell us about your advertising goals"
                  rows="5"
                  className="w-full bg-slate-100 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400"
                ></textarea>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition shadow-2xl">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ashvisor
            </h4>
            <p className="text-slate-400 mt-2">
              Premium OfferWall, Rewarded Ads & Performance Marketing Platform
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-slate-400 text-sm">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">OfferWall Solutions</a>
            <a href="#">Programmatic Advertising</a>
            <a href="#">Case Studies</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-to-r from-green-500 to-cyan-500 rounded-full px-6 py-4 font-bold shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:scale-105 transition">
          Live Chat
        </button>
      </div>
    </div>
  )
}
