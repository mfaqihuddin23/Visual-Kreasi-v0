import { getClients } from "@/lib/data"

export default async function ClientsGrid() {
  const clients = await getClients()

  return (
    <section className="py-16 md:py-24 relative">
      {/* Background Watermark */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <span className="text-[10vw] font-extrabold text-white/5 select-none">OUR CLIENT</span>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Top Border */}
        <div className="h-px bg-white/10 mb-12" />

        <div className="text-center mb-12">
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Fortunate to collaborate with outstanding companies and pioneers in the industry, we thrive in our
            partnership.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="text-white/60 text-xs font-medium">{client.name}</span>
            </div>
          ))}
        </div>

        {/* Bottom Border */}
        <div className="h-px bg-white/10 mt-12" />
      </div>
    </section>
  )
}
