import CaseStudyCard from "./CaseStudyCard"
import { getCaseStudies } from "../lib/data"

export default async function CaseStudyList() {
  const caseStudies = await getCaseStudies()
  const [featured, ...others] = caseStudies

  return (
    <section id="works" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[#f59e0b] text-sm font-medium tracking-wider uppercase">WORKS / SPOTLIGHT</span>
        </div>

        {/* Featured Case Study */}
        <div className="mb-12">
          <CaseStudyCard
            title={featured.title}
            category={featured.category}
            image={featured.image}
            href={featured.href}
            featured
          />
        </div>

        {/* Other Case Studies */}
        <div className="space-y-4">
          {others.map((study, index) => (
            <CaseStudyCard
              key={index}
              title={study.title}
              category={study.category}
              image={study.image}
              href={study.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
