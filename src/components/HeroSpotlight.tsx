import Image from "next/image"

export default function HeroSpotlight() {
  return (
    <section className="relative min-h-[min(80vh,720px)] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/dark-moody-creative-studio-workspace.png"
          alt="Creative studio workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 md:px-8 text-center">
        {/* Breadcrumb */}
        <div className="mb-6">
          <span className="text-[#f59e0b] text-sm font-medium tracking-wider uppercase">WORKS / LUXURY</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-balance">
          Revamp Wedding Landing Page
        </h1>

        {/* Optional Glass Card */}
        <div className="inline-block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-4">
          <p className="text-white/80 text-sm">Featured Project • View Case Study</p>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  )
}
