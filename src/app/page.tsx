import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import HeroSpotlight from "@/components/HeroSpotlight"
import AboutSection from "@/components/AboutSection"
import CaseStudyList from "@/components/CaseStudyList"
import ClientsGrid from "@/components/ClientsGrid"
import Testimonials from "@/components/Testimonials"
import CtaBanner from "@/components/CtaBanner"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Visual Kreasi - Creative Studio",
  description:
    "A small team with mighty impact. We are a group of passionate creatives mastering the art of digital alchemy.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
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
