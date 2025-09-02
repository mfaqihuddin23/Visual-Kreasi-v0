import { getStats } from "@/lib/data"

export default async function AboutSection() {
  const stats = await getStats()

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-[#f59e0b] text-sm font-medium tracking-wider uppercase">ABOUT</span>
              <span className="text-white/40 text-sm tracking-wider">VISUAL KREASI</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              A Small Team, <span className="text-[#f59e0b]">Mighty Impact</span>.
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-8">
              We're a group of passionate creatives mastering the art of digital alchemy. Our expertise spans branding,
              visual design, creative content, and business solutions that transform ideas into impactful digital
              experiences.
            </p>

            <button className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-white/20 hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500">
              WORK WITH US →
            </button>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#f59e0b] mb-2">{stat.number}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
