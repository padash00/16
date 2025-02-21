import dynamic from "next/dynamic"
import HeroSection from "../components/hero-section"

const AboutClub = dynamic(() => import("../components/about-club"), { ssr: false })
const GameZones = dynamic(() => import("../components/game-zones"), { ssr: false })
const Pricing = dynamic(() => import("../components/pricing"), { ssr: false })
const Gallery = dynamic(() => import("../components/gallery"), { ssr: false })
const ContactLocation = dynamic(() => import("../components/contact-location"), { ssr: false })
const SocialMedia = dynamic(() => import("../components/social-media"), { ssr: false })

// Новый клиентский компонент для использования useSmoothScroll
const SmoothScrollWrapper = dynamic(() => import('../components/smooth-scroll-wrapper'), { ssr: false })
export default function Home() {
  return (
    <SmoothScrollWrapper>
      <main className="min-h-screen bg-dark-bg text-white overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-cyber-blue opacity-5 z-0"></div>
          <div className="matrix-background"></div>
          <div className="relative z-10">
            <HeroSection />
            <AboutClub />
            <GameZones />
            <Pricing />
            <Gallery />
            <ContactLocation />
            <SocialMedia />
          </div>
        </div>
      </main>
    </SmoothScrollWrapper>
  )
}
