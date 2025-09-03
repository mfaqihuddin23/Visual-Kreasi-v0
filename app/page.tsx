import type { Metadata } from "next"
import Navbar from "../src/components/Navbar"
import HeroSpotlight from "../src/components/HeroSpotlight"
import AboutSection from "../src/components/AboutSection"
import CaseStudyList from "../src/components/CaseStudyList"
import ClientsGrid from "../src/components/ClientsGrid"
import Testimonials from "../src/components/Testimonials"
import CtaBanner from "../src/components/CtaBanner"
import Footer from "../src/components/Footer"

export const metadata: Metadata = {
  title: "Visual Kreasi - Creative Studio",
  description: "A small team with mighty impact. We are passionate creatives mastering the art of digital alchemy.",
  keywords: "creative studio, web design, branding, digital agency, visual design",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-[#e6e6e6]">
      <Navbar />
      <main>
        <HeroSpotlight />
        <AboutSection />
        <CaseStudyList />
        <ClientsGrid />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
