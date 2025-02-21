\import type { Metadata } from "next"
import Head from "next/head"
import { Inter, Oswald, Rajdhani, Orbitron, Play } from 'next/font/google'
import localFont from 'next/font/local'
import Navigation from "../components/navigation"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const oswald = Oswald({ subsets: ["latin", "cyrillic"], variable: "--font-oswald" })
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
})
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })
const play = Play({ 
  subsets: ["latin", "cyrillic"], 
  weight: ["400", "700"], 
  variable: "--font-play" 
})

const accid = localFont({
  src: '../public/fonts/accid.ttf',
  variable: '--font-accid'
})

export const metadata: Metadata = {
  title: "F16 Arena - Киберспортивный клуб в Усть-Каменогорске",
  description: "Максимальная мощность – максимум побед! Киберспортивный клуб F16 Arena в Усть-Каменогорске.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${oswald.variable} ${rajdhani.variable} ${orbitron.variable} ${play.variable} ${accid.variable}`}
    >
      <Head>
        <meta name="yandex-verification" content="b405395072309a48" />
      </Head>
      <body className="font-inter bg-dark-bg text-white">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
