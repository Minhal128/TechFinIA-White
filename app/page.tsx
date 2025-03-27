import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { FeatureSection } from "@/components/feature-section"
import { AdminPortalPreview } from "@/components/admin-portal-preview"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      <Navbar />
      <div className="pt-20">
        <HeroSection />
        <FeatureSection />
        <AdminPortalPreview />
      </div>
      <Footer />
    </div>
  )
}

