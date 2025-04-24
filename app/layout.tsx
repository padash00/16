import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Roboto } from "next/font/google"
import "./globals.css"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Facebook, Instagram, Twitch } from "lucide-react"
<link rel="icon" href="/favicon.ico" />

// Загрузка шрифта Orbitron
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-orbitron",
  display: "swap",
})

// Загрузка шрифта Roboto
const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "F16 Arena | Киберспортивный клуб",
  description: "65 высокопроизводительных ПК и зоны PlayStation",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${orbitron.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}


function Home() {
  // Data for pricing tiers
  const pricingTiers = [
    {
      name: "Standart",
      hourly: "600тг/час",
      package1: "1200тг/2+1",
      package2: "1800тг/3+2",
      night: "2200тг/ночь",
      day: "1500тг/день",
      color: "neon-cyan",
    },
    {
      name: "Standart PRO",
      hourly: "800тг/час",
      package1: "1600тг/2+1",
      package2: "2400тг/3+2",
      night: "2800тг/ночь",
      day: "2000тг/день",
      color: "neon-cyan",
    },
    {
      name: "Standart Premium",
      hourly: "1000тг/час",
      package1: "2000тг/2+1",
      package2: "3000тг/3+2",
      night: "4000тг/ночь",
      day: "3500тг/день",
      color: "neon-cyan",
    },
    {
      name: "VIP",
      hourly: "1300тг/час",
      package1: "2600тг/2+1",
      package2: "3900тг/3+2",
      night: "4500тг/ночь",
      day: "No day package",
      color: "neon-cyan",
    },
    {
      name: "PRO",
      hourly: "1600тг/час",
      package1: "3200тг/2+1",
      package2: "4800тг/3+2",
      night: "5500тг/ночь",
      day: "No day package",
      color: "neon-cyan",
    },
  ]

  // Data for specs
  const specsTiers = [
    {
      tier: "Standart",
      cpu: "i3-12100F",
      gpu: "GTX1660 Super",
      ram: "16GB",
      monitor: "165Hz",
    },
    {
      tier: "Standart PRO",
      cpu: "i5-12400F",
      gpu: "RTX 3060 8GB",
      ram: "16GB",
      monitor: "240Hz",
    },
    {
      tier: "Standart Premium",
      cpu: "i5-13400F",
      gpu: "RTX 4060 8GB",
      ram: "16GB",
      monitor: "280Hz",
    },
    {
      tier: "VIP",
      cpu: "i5-12400F",
      gpu: "RTX 4060TI 8GB",
      ram: "16GB",
      monitor: "380Hz",
    },
    {
      tier: "PRO",
      cpu: "i7-13700F",
      gpu: "RTX 4070 Super 12GB",
      ram: "32GB",
      monitor: "540Hz",
    },
  ]

  // Data for devices
  const devicesTiers = [
    {
      tier: "Standart",
      mouse: "Attack Shark X3 (Wireless)",
      keyboard: "Rapoo V500 PRO",
      headset: "HyperX Cloud 2",
    },
    {
      tier: "Standart PRO",
      mouse: "HyperX Haste 2 (Wireless)",
      keyboard: "HyperX Alloy Origin",
      headset: "HyperX Cloud 2",
    },
    {
      tier: "Standart Premium",
      mouse: "HyperX Haste 2 (Wireless)",
      keyboard: "HyperX Alloy Origin",
      headset: "HyperX Cloud 2 Black RED",
    },
    {
      tier: "VIP",
      mouse: "Logitech G PRO (Wireless)",
      keyboard: "Dark Project",
      headset: "HyperX Cloud Alpha 2",
    },
    {
      tier: "PRO",
      mouse: "Logitech Superlight 2 (Wireless)",
      keyboard: "Varmillo (Wireless)",
      headset: "Logitech G PRO X2 (Wireless)",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold font-orbitron glitch" data-text="CyberZone PC Rental">
              CyberZone PC Rental
            </h1>
            <p className="text-sm md:text-base neon-cyan font-medium tracking-wide">Power Up Your Game</p>
          </div>
          <nav>
            <ul className="flex space-x-6 text-sm md:text-base">
              <li>
                <Link href="#" className="hover:text-neon-magenta transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-neon-magenta transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#specs" className="hover:text-neon-magenta transition-colors">
                  Devices
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-neon-magenta transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-neon-magenta transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden border-t border-b border-neon-cyan/30">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Futuristic PC Setup"
            fill
            className="object-cover"
            priority
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-orbitron leading-tight">
              High-Performance Gaming PCs for Every Player
            </h2>
            <button className="px-8 py-3 bg-transparent border-2 border-neon-cyan rounded-md text-neon-cyan font-medium text-lg pulse hover:bg-neon-cyan/10 transition-colors duration-300 flex items-center mx-auto">
              Rent Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-orbitron glitch"
          data-text="Choose Your Zone"
        >
          Choose Your Zone
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden transition-transform hover:-translate-y-1 duration-300 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 p-0.5 rounded-lg neon-border-magenta opacity-70"></div>
              <div className="relative bg-black/50 backdrop-blur-sm p-6 rounded-lg h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4 font-orbitron">{tier.name}</h3>
                <div className="space-y-2 mb-6 flex-grow">
                  <p className="text-lg font-semibold neon-cyan">{tier.hourly}</p>
                  <p>{tier.package1}</p>
                  <p>{tier.package2}</p>
                  <p>{tier.night}</p>
                  <p>{tier.day}</p>
                </div>
                <button className="w-full py-2 rounded border-2 border-neon-magenta text-white font-medium hover:bg-neon-magenta/20 transition-colors">
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specs Section */}
      <section id="specs" className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-orbitron neon-cyan">Tech Power</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {specsTiers.map((spec, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-sm rounded-lg p-6 neon-border-cyan transition-transform hover:-translate-y-1 duration-300 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 font-orbitron neon-cyan">{spec.tier}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">CPU:</span>
                    <span className="text-gray-300">{spec.cpu}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">GPU:</span>
                    <span className="text-gray-300">{spec.gpu}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">RAM:</span>
                    <span className="text-gray-300">{spec.ram}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Monitor:</span>
                    <span className="text-gray-300">{spec.monitor}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-orbitron neon-purple">Gear Up</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {devicesTiers.map((device, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm rounded-lg p-6 neon-border-purple transition-transform hover:-translate-y-1 duration-300 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 font-orbitron neon-purple">{device.tier}</h3>
              <ul className="space-y-3">
                <li className="flex flex-col">
                  <span className="font-medium mb-1">Mouse:</span>
                  <span className="text-gray-300">{device.mouse}</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium mb-1">Keyboard:</span>
                  <span className="text-gray-300">{device.keyboard}</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium mb-1">Headset:</span>
                  <span className="text-gray-300">{device.headset}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 font-orbitron glitch"
            data-text="Cyber Gallery"
          >
            Cyber Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {["Standart", "Standart PRO", "Standart Premium", "VIP", "PRO"].map((tier, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg neon-border-magenta fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=${tier}`}
                  alt={`${tier} Gaming Setup`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-xl font-bold font-orbitron neon-magenta">{tier}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-10 border-t border-neon-cyan/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">
              Contact:{" "}
              <a href="mailto:info@cyberzone.kz" className="hover:text-neon-cyan transition-colors">
                info@cyberzone.kz
              </a>{" "}
              | +7 XXX XXX XX XX
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-magenta transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-magenta transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-magenta transition-colors">
                <Twitch className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} CyberZone PC Rental. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
