import { getTestimonials } from "../lib/data"

export default async function Testimonials() {
  const testimonials = await getTestimonials()

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#f59e0b] text-sm font-medium tracking-wider uppercase">THEY LOVE THE RESULT</span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-6 h-full">
              <blockquote className="text-white/80 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>

              <div className="mt-auto">
                <div className="font-semibold text-white mb-1">{testimonial.name}</div>
                <div className="text-white/60 text-sm">
                  {testimonial.role} • {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
