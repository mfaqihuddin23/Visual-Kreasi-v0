export default function CtaBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#f59e0b]/10 to-[#f59e0b]/5">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-balance">
          Join forces with us at Creative Minds Studio! We're eager to partner with innovative brands and help bring
          your vision to life.
        </h2>

        <button className="inline-flex items-center justify-center rounded-xl px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500">
          WORK WITH US →
        </button>
      </div>
    </section>
  )
}
