import Image from "next/image"
import Link from "next/link"

interface CaseStudyCardProps {
  title: string
  category: string
  image: string
  href: string
  featured?: boolean
}

export default function CaseStudyCard({ title, category, image, href, featured = false }: CaseStudyCardProps) {
  const cardClasses = featured
    ? "group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
    : "group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex gap-4 p-4"

  return (
    <Link href={href} className={cardClasses}>
      <div className={featured ? "aspect-video relative" : "w-24 h-16 relative flex-shrink-0"}>
        <Image
          src={
            image ||
            `/placeholder.svg?height=${featured ? 400 : 64}&width=${featured ? 600 : 96}&query=project thumbnail`
          }
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div className={featured ? "p-6" : "flex-1 min-w-0"}>
        <h3
          className={`font-semibold group-hover:text-[#f59e0b] transition-colors ${
            featured ? "text-xl mb-2" : "text-base mb-1"
          }`}
        >
          {title}
        </h3>
        <p className="text-white/60 text-sm uppercase tracking-wider">{category} • VIEW THE RESULT →</p>
      </div>
    </Link>
  )
}
