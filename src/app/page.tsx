import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Privacy from '@/components/Privacy'
import Comparison from '@/components/Comparison'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import AnonymityCard from '@/components/AnonymityCard'
import { SoulviaRevealHero } from '@/components/ui/soulvia-reveal-hero'
import { Anonymity3DShowcase } from '@/components/ui/anonymity-3d-showcase'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* New RevealText Hero Section */}
      <SoulviaRevealHero />
      
      {/* Original Hero with Geometric Background */}
      <Hero />
      
      {/* 3D Anonymity Showcase */}
      <Anonymity3DShowcase />
      
      <Features />
      <Privacy />
      <Comparison />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}