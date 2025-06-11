import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
