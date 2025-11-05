"use client"
import { useEffect, useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  Instagram,
  Youtube,
  MessageCircle,
  Monitor,
  Cpu,
  Gamepad2,
  Headphones,
  Mouse,
  Keyboard,
  Package,
  Moon,
  Sun,
  Wifi,
  Server,
  Code,
  Flame,
  Award,
  Joystick,
  Headset,
} from "lucide-react"

type NeonKey = "red" | "blue" | "purple" | "yellow" | "green"

const NEON: Record<NeonKey, { text: string; bg: string; border: string; raw: string }> = {
  red:    { text: "neon-red",    bg: "bg-neon-red",    border: "border-neon-red",    raw: "var(--neon-red)" },
  blue:   { text: "neon-blue",   bg: "bg-neon-blue",   border: "border-neon-blue",   raw: "var(--neon-blue)" },
  purple: { text: "neon-purple", bg: "bg-neon-purple", border: "border-neon-purple", raw: "var(--neon-purple)" },
  yellow: { text: "neon-yellow", bg: "bg-neon-yellow", border: "border-neon-yellow", raw: "var(--neon-yellow)" },
  green:  { text: "neon-green",  bg: "bg-neon-green",  border: "border-neon-green",  raw: "var(--neon-green)" },
}

export default function Home() {
  // ===== ТАРИФЫ =====
  const pricingTiers = [
    {
      name: "Standart",
      hourly: "900тг/час",
      package1: "1800тг/2+1",
      package2: "2700тг/3+2",
      night: "3000тг/ночь",
      day: "1500тг/день",
      color: "red" as NeonKey,
      count: 25,
      icon: <Monitor className="h-5 w-5" />,
      features: ["240Hz Монитор", "RTX 4060 8GB", "16GB RAM", "i5-12400F"],
    },
    {
      name: "Standart Premium",
      hourly: "1200тг/час",
      package1: "2400тг/2+1",
      package2: "3600тг/3+2",
      night: "4500тг/ночь",
      day: "2500тг/день",
      color: "purple" as NeonKey,
      count: 30,
      icon: <Code className="h-5 w-5" />,
      features: ["280Hz Монитор", "RTX 5060 8GB", "32GB RAM", "i5-13400F"],
    },
    {
      name: "VIP",
      hourly: "1400тг/час",
      package1: "2800тг/2+1",
      package2: "3200тг/3+2",
      night: "4500тг/ночь",
      day: "Нет дневного пакета",
      color: "yellow" as NeonKey,
      count: 6,
      icon: <Wifi className="h-5 w-5" />,
      features: ["380Hz Монитор", "RTX 4070 Super 12GB", "32GB RAM", "i7-13700F"],
    },
    {
      name: "PRO",
      hourly: "1800тг/час",
      package1: "3600тг/2+1",
      package2: "5400тг/3+2",
      night: "5800тг/ночь",
      day: "Нет дневного пакета",
      color: "green" as NeonKey,
      count: 5,
      icon: <Server className="h-5 w-5" />,
      features: ["540Hz Монитор", "RTX 5070", "32GB RAM 6000MHz", "Ryzen 7 7800X3D"],
    },
  ] as const

  // ===== ПК-конфиги =====
  const specsTiers = [
    { tier: "Standart", cpu: "i5-12400F", gpu: "RTX 4060 8GB", ram: "16GB", monitor: "240Hz", color: "red" as NeonKey, icon: <Cpu className="h-5 w-5" />, count: 25 },
    { tier: "Standart Premium", cpu: "i5-13400F", gpu: "RTX 5060 8GB", ram: "16GB", monitor: "280Hz", color: "purple" as NeonKey, icon: <Code className="h-5 w-5" />, count: 30 },
    { tier: "VIP", cpu: "i7-13700F", gpu: "RTX 4070 Super 12GB", ram: "32GB", monitor: "380Hz", color: "yellow" as NeonKey, icon: <Flame className="h-5 w-5" />, count: 6 },
    { tier: "PRO", cpu: "Ryzen 7 7800X3D", gpu: "RTX 5070", ram: "32GB 6000MHz", monitor: "540Hz", color: "green" as NeonKey, icon: <Award className="h-5 w-5" />, count: 5 },
  ] as const

  // ===== Периферия =====
  const devicesTiers = [
    {
      tier: "Standart",
      devices: [
        { type: "Мышь", name: "Asus ROG", icon: <Mouse className="h-5 w-5" /> },
        { type: "Клавиатура", name: "RK ROYAL KLUDGE 87", icon: <Keyboard className="h-5 w-5" /> },
        { type: "Наушники", name: "HyperX Cloud 2", icon: <Headphones className="h-5 w-5" /> },
      ],
    },
    {
      tier: "Standart Premium",
      devices: [
        { type: "Мышь", name: "HyperX Haste 2 (Wireless)", icon: <Mouse className="h-5 w-5" /> },
        { type: "Клавиатура", name: "HyperX Alloy Origin", icon: <Keyboard className="h-5 w-5" /> },
        { type: "Наушники", name: "HyperX Cloud 2 Black RED", icon: <Headphones className="h-5 w-5" /> },
      ],
    },
    {
      tier: "VIP",
      devices: [
        { type: "Мышь", name: "Logitech SuperLight (Wireless)", icon: <Mouse className="h-5 w-5" /> },
        { type: "Клавиатура", name: "Dark Project", icon: <Keyboard className="h-5 w-5" /> },
        { type: "Наушники", name: "Logitech G PRO SE", icon: <Headphones className="h-5 w-5" /> },
      ],
    },
    {
      tier: "PRO",
      devices: [
        { type: "Мышь", name: "Logitech Superlight 2 (Wireless)", icon: <Mouse className="h-5 w-5" /> },
        { type: "Клавиатура", name: "Varmillo (Wireless)", icon: <Keyboard className="h-5 w-5" /> },
        { type: "Наушники", name: "Logitech G PRO X2 (Wireless)", icon: <Headphones className="h-5 w-5" /> },
      ],
    },
  ] as const

  // ===== F16 EXTRA =====
  const extraZones = [
    {
      name: "SimRacing",
      color: "green" as NeonKey,
      icon: <Joystick className="h-5 w-5" />,
      bullets: ["Руль, педали, кресло-ковш", "VR-ready", "Assetto Corsa / iRacing / WRC"],
      cta: "ЗАБРОНИРОВАТЬ SIMRACING",
    },
    {
      name: "VR",
      color: "blue" as NeonKey,
      icon: <Headset className="h-5 w-5" />,
      bullets: ["VR-квесты и аркады", "Подходит для компании", "Запись клипов и фото"],
      cta: "ЗАБРОНИРОВАТЬ VR",
    },
    {
      name: "PlayStation 5",
      color: "purple" as NeonKey,
      icon: <Gamepad2 className="h-5 w-5" />,
      bullets: ['Экраны 65" и 75"', "PS5 / PS5 Pro", "FIFA 25 и топовые игры"],
      cta: "ЗАБРОНИРОВАТЬ PS5",
    },
  ] as const

  // ===== ДЕКОР: частицы (фикс без динамических классов) =====
  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => {
        const colorKeys: NeonKey[] = ["blue", "red", "purple", "yellow", "green"]
        const key = colorKeys[Math.floor(Math.random() * colorKeys.length)]
        return {
          id: i,
          size: Math.random() * 3 + 1,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 10,
          color: key,
        }
      }),
    []
  )

  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null)

  const colorOf = (tierName: string): NeonKey => {
    if (tierName.includes("Standart") && !tierName.includes("Premium")) return "red"
    if (tierName.includes("Standart Premium")) return "purple"
    if (tierName.includes("VIP")) return "yellow"
    if (tierName.includes("PRO")) return "green"
    return "blue"
  }

  // ===== REVEAL + TILT =====
  useEffect(() => {
    if (typeof window === "undefined") return

    // Reveal on scroll
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in")
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => io.observe(el))

    // Lightweight 3D tilt
    const tiltTargets = Array.from(document.querySelectorAll<HTMLElement>(".tilt-3d"))
    const handleMove = (e: MouseEvent) => {
      const t = e.currentTarget as HTMLElement
      const rect = t.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      const rx = (y - 0.5) * -6
      const ry = (x - 0.5) * 6
      t.style.transform = `translateY(-6px) rotateX(${rx}deg) rotateY(${ry}deg)`
    }
    const handleLeave = (e: MouseEvent) => {
      const t = e.currentTarget as HTMLElement
      t.style.transform = ""
    }
    tiltTargets.forEach((t) => {
      t.addEventListener("mousemove", handleMove as any)
      t.addEventListener("mouseleave", handleLeave as any)
    })

    return () => {
      io.disconnect()
      tiltTargets.forEach((t) => {
        t.removeEventListener("mousemove", handleMove as any)
        t.removeEventListener("mouseleave", handleLeave as any)
      })
    }
  }, [])

  return (
    <main className="min-h-screen digital-noise matrix-effect">
      {/* Декор-границы */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-neon-blue opacity-60 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-full h-0.5 bg-neon-red opacity-60 pointer-events-none" />
      <div className="fixed top-0 left-0 h-full w-0.5 bg-neon-purple opacity-60 pointer-events-none" />
      <div className="fixed top-0 right-0 h-full w-0.5 bg-neon-green opacity-60 pointer-events-none" />

      {/* Частицы (inline-стили вместо bg-${color}) */}
      <div className="cyber-particles" aria-hidden>
        {particles.map((p) => (
          <div
            key={p.id}
            className="cyber-particle"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.x}%`,
              top: `${p.y}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              backgroundColor: `var(--neon-${p.color})`,
            }}
          />
        ))}
      </div>

      {/* Вертикальные data-stream линии (inline-стили вместо top-[...] и bg-neon-...) */}
      {[
        { t: "20%", l: "10%", h: "60%", c: "blue" as NeonKey },
        { t: "15%", l: "20%", h: "70%", c: "red" as NeonKey },
        { t: "25%", l: "30%", h: "50%", c: "purple" as NeonKey },
        { t: "10%", l: "40%", h: "80%", c: "yellow" as NeonKey },
        { t: "30%", l: "50%", h: "40%", c: "green" as NeonKey },
        { t: "20%", l: "60%", h: "60%", c: "blue" as NeonKey },
        { t: "15%", l: "70%", h: "70%", c: "red" as NeonKey },
        { t: "25%", l: "80%", h: "50%", c: "purple" as NeonKey },
        { t: "10%", l: "90%", h: "80%", c: "yellow" as NeonKey },
      ].map((v, i) => (
        <div
          key={i}
          className="fixed w-0.5 opacity-20 data-stream pointer-events-none"
          style={{
            top: v.t,
            left: v.l,
            height: v.h,
            backgroundColor: `var(--neon-${v.c})`,
          }}
          aria-hidden
        />
      ))}

      {/* Шапка */}
      <header className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
          <div className="cyber-corner cyber-shadow text-center md:text-left reveal" data-stagger="1">
            <h1 className="text-3xl md:text-5xl font-orbitron font-bold tracking-wider glitch" data-text="F16 ARENA">
              F16 ARENA
            </h1>
            <p className="text-sm md:text-base text-muted-color tracking-wide cyber-text">КИБЕРСПОРТИВНЫЙ КЛУБ</p>
            <div className="cyber-status mt-2" />
          </div>

          <nav className="bg-darker-bg/80 backdrop-blur-sm p-3 border border-border-color cyber-frame rounded-md reveal" data-stagger="2">
            <ul className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
              <li><Link href="#" className="cyber-nav-item active">ГЛАВНАЯ</Link></li>
              <li><Link href="#pricing" className="cyber-nav-item">ТАРИФЫ</Link></li>
              <li><Link href="#equipment" className="cyber-nav-item">ОБОРУДОВАНИЕ</Link></li>
              <li><Link href="#extra" className="cyber-nav-item">F16 EXTRA</Link></li>
              <li><Link href="#progress" className="cyber-nav-item">DISCOUNTS</Link></li>
              <li><Link href="#contact" className="cyber-nav-item">КОНТАКТЫ</Link></li>
              <li><Link href="#map" className="cyber-nav-item">КАРТА</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden border-t border-b border-border-color scanline hologram grid-overlay w-screen max-w-none">
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden" aria-hidden>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF3468%20%282%29.png-kkVKtNtjpSsnmvkmiUL230RwgQpTSX.jpeg"
            alt="Игровой компьютер F16 Arena с RGB подсветкой"
            fill
            className="object-cover object-center w-full h-full"
            sizes="100vw"
            priority
          />
          {/* Чуть мягче затемнение */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 leading-tight reveal" data-stagger="1">
              <span className="neon-blue">ИГРОВОЙ</span> КЛУБ <span className="neon-red">НОВОГО</span> УРОВНЯ
            </h2>

            <div className="flex flex-wrap gap-4 reveal" data-stagger="2">
              <a
                href="https://api.whatsapp.com/send/?phone=77080161720&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D0%B8%D0%B7+2GIS&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cyber-button-3d flex items-center pulse-effect ripple">
                  ЗАБРОНИРОВАТЬ
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </a>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Максимальная частота", value: "540Hz", color: "blue" as NeonKey },
                { label: "Режим работы", value: "24/7", color: "red" as NeonKey },
                { label: "Макс. диагональ", value: '75"', color: "purple" as NeonKey },
                { label: "Игр доступно", value: "1000+", color: "green" as NeonKey },
              ].map((s, i) => (
                <div key={i} className="text-center cyber-card-3d p-4 cyber-frame shimmer reveal tilt-3d" data-stagger={i + 1}>
                  <div className={`text-3xl font-bold ${NEON[s.color].text} font-orbitron mb-2`}>{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-color">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* точки */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
          <div className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-neon-red animate-pulse" />
          <div className="absolute top-1/2 left-2/3 w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
          <div className="absolute top-1/3 left-3/4 w-2 h-2 rounded-full bg-neon-yellow animate-pulse" />
          <div className="absolute top-2/3 left-1/4 w-2 h-2 rounded-full bg-neon-green animate-pulse" />
        </div>
      </section>

      {/* Тарифы */}
      <section id="pricing" className="py-20 cyber-mesh">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12">
            <h2 className="cyber-heading text-3xl md:text-4xl font-orbitron font-bold mb-4 cyber-title reveal" data-stagger="1">
              ВЫБЕРИ СВОЮ ЗОНУ
            </h2>
            <p className="text-muted-color max-w-2xl ml-4 reveal" data-stagger="2">Подбери оптимальный тариф для твоей игровой сессии</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => {
              const C = NEON[tier.color]
              return (
                <div
                  key={tier.name}
                  className={`bg-darker-bg/80 backdrop-blur-sm border ${C.border} rounded-lg overflow-hidden digital-distortion reveal tilt-3d`}
                  data-stagger={(index % 5) + 1}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <div className={`mr-2 ${C.text}`}>{tier.icon}</div>
                        <h3 className={`text-xl font-orbitron font-bold ${C.text}`}>{tier.name}</h3>
                      </div>
                      <span className="text-xs bg-darker-bg px-2 py-1 border border-border-color cyber-frame">{tier.count} ПК</span>
                    </div>

                    <div className="space-y-4 mb-6 flex-grow">
                      <div className={`text-2xl font-bold ${C.text} font-orbitron`}>{tier.hourly}</div>
                      <div className={`cyber-divider-${tier.color}`} />
                      <div className="space-y-2">
                        <Row label="Пакет 2+1:" icon={<Package className="h-4 w-4 mr-1 opacity-70" />} value={tier.package1} />
                        <Row label="Пакет 3+2:" icon={<Package className="h-4 w-4 mr-1 opacity-70" />} value={tier.package2} />
                        <Row label="Ночь:"      icon={<Moon className="h-4 w-4 mr-1 opacity-70" />} value={tier.night} />
                        <Row label="День:"      icon={<Sun  className="h-4 w-4 mr-1 opacity-70" />} value={tier.day} />
                      </div>

                      <div className="mt-4 pt-4 border-t border-border-color">
                        <h4 className="text-sm font-orbitron mb-2 text-muted-color">Особенности:</h4>
                        <ul className="space-y-1">
                          {tier.features.map((f, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <span className="h-1.5 w-1.5 rounded-full mr-2" style={{ backgroundColor: C.raw }} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <a href="https://api.whatsapp.com/send/?phone=77080161720&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BA&type=phone_number&app_absent=0">
                      <button className={`cyber-button w-full ripple ${C.text.replace("neon", "cyber-button")}`}>ВЫБРАТЬ</button>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Оборудование */}
      <section id="equipment" className="py-20 cyber-mesh">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12">
            <h2 className="cyber-heading text-2xl md:text-4xl font-orbitron font-bold mb-4 cyber-title reveal" data-stagger="1">
              ОБОРУДОВАНИЕ И УСТРОЙСТВА
            </h2>
            <p className="text-muted-color max-w-2xl ml-1 reveal" data-stagger="2">Конфигурации техники и периферии по зонам</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {specsTiers.map((spec, index) => {
              const C = NEON[spec.color]
              const device = devicesTiers.find((d) => d.tier === spec.tier)
              return (
                <div
                  key={spec.tier}
                  className={`bg-darker-bg/80 backdrop-blur-sm border ${C.border} rounded-lg overflow-hidden digital-distortion reveal tilt-3d`}
                  data-stagger={(index % 5) + 1}
                >
                  <div className="p-4 md:p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className={`text-lg md:text-xl font-orbitron font-bold ${C.text}`}>{spec.tier}</h3>
                      <span className="text-xs bg-darker-bg px-2 py-1 border border-border-color cyber-frame">{spec.count} ПК</span>
                    </div>

                    <div className="space-y-4 mb-6 flex-grow">
                      <div className={`cyber-divider-${spec.color}`} />
                      <Spec label="CPU"      value={spec.cpu} />
                      <Spec label="GPU"      value={spec.gpu} />
                      <Spec label="RAM"      value={spec.ram} />
                      <Spec label="Монитор"  value={spec.monitor} />

                      {device && (
                        <>
                          <Device lineIcon={<Mouse className="h-4 w-4 text-muted-color opacity-80" />} name={device.devices[0].name} />
                          <Device lineIcon={<Keyboard className="h-4 w-4 text-muted-color opacity-80" />} name={device.devices[1].name} />
                          <Device lineIcon={<Headphones className="h-4 w-4 text-muted-color opacity-80" />} name={device.devices[2].name} />
                        </>
                      )}
                    </div>

                    <a href="https://api.whatsapp.com/send/?phone=77080161720&text=Здравствуйте!%20Пишу%20по%20поводу%20выбора%20зоны&type=phone_number&app_absent=0">
                      <button className={`cyber-button w-full ripple ${C.text.replace("neon", "cyber-button")}`}>ВЫБРАТЬ</button>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* F16 EXTRA */}
      <section id="extra" className="py-8">
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative my-6 md:my-10 reveal" data-stagger="1">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="px-4 py-1 bg-black/70 border border-neon-purple rounded font-orbitron text-lg md:text-2xl neon-purple">F16 EXTRA</span>
            </div>
          </div>

          <p className="text-muted-color text-center max-w-2xl mx-auto mb-10 reveal" data-stagger="2">
            Отдельные зоны развлечений: симрейсинг, VR и PlayStation&nbsp;5.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {extraZones.map((z, i) => {
              const C = NEON[z.color]
              return (
                <div
                  key={z.name}
                  className={`bg-darker-bg/80 backdrop-blur-sm border ${C.border} rounded-lg overflow-hidden cyber-card-3d hologрам reveal tilt-3d`.replace("хограм", "hologram")}
                  data-stagger={(i % 5) + 1}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className={`mr-2 ${C.text}`}>{z.icon}</div>
                      <h3 className={`text-xl font-orbitron font-bold ${C.text}`}>{z.name}</h3>
                    </div>

                    <ul className="space-y-2 mb-6 flex-grow">
                      {z.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full mr-2" style={{ backgroundColor: C.raw }} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <a href="https://api.whatsapp.com/send/?phone=77080161720&text=Здравствуйте!%20Бронь%20зоны%20F16%20Extra&type=phone_number&app_absent=0">
                      <button className={`cyber-button w-full ripple ${C.text.replace("neon", "cyber-button")}`}>{z.cta}</button>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Level Up Discounts */}
      <section id="progress" className="py-20 bg-black/30 backdrop-blur-sm cyber-grid">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-orbitron glitch reveal" data-text="Level Up Discounts" data-stagger="1">
            Level Up Discounts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { tier: "Silver", need: "Потрать более 100 000 ₸", off: "-10%", color: "blue" as NeonKey },
              { tier: "Gold", need: "Потрать более 120 000 ₸", off: "-20%", color: "yellow" as NeonKey },
              { tier: "Platinum", need: "Потрать более 250 000 ₸", off: "-30%", color: "purple" as NeonKey },
              { tier: "Almaz", need: "Потрать более 500 000 ₸", off: "-40%", color: "red" as NeonKey },
            ].map((c, i) => (
              <div key={i} className={`bg-black/50 backdrop-blur-sm rounded-lg p-6 neon-border-${c.color} reveal tilt-3d`} data-stagger={(i % 5) + 1}>
                <div className="flex justify-center mb-4">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className={`${NEON[c.color].text}`}>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-4 font-orbitron ${NEON[c.color].text}`}>{c.tier}</h3>
                <p className="text-gray-300 mb-2">{c.need}</p>
                <p className={`text-2xl font-bold ${NEON[c.color].text}`}>{c.off}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-12 md:py-20 bg-darker-bg cyber-grid">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8 md:mb-12">
            <h2 className="cyber-heading cyber-heading-blue text-2xl md:text-4xl font-orbitron font-bold mb-3 md:mb-4 cyber-title reveal" data-stagger="1">
              СВЯЗАТЬСЯ С НАМИ
            </h2>
            <p className="text-muted-color max-w-2xl ml-4 text-sm md:text-base reveal" data-stagger="2">
              Мы всегда на связи и готовы ответить на все вопросы
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
              <div className="bg-darker-bg/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-neon-blue/30 reveal tilt-3d" data-stagger="1">
                <h3 className="text-lg md:text-xl font-orbitron font-bold mb-4 md:mb-6 neon-blue cyber-text">КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
                <ul className="space-y-4 md:space-y-6">
                  <li className="flex items-center">
                    <span className="text-muted-color mr-3 md:mr-4 text-xs md:text-sm font-mono terminal-text">[01]</span>
                    <div>
                      <span className="text-muted-color text-xs block">Бронирование:</span>
                      <a href="tel:+77080161720" className="text-sm md:text-base hover:text-neon-blue transition-colors">
                        +7708 016 17 20
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-muted-color mr-3 md:mr-4 text-xs md:text-sm font-mono terminal-text">[02]</span>
                    <div>
                      <span className="text-muted-color text-xs block">Email:</span>
                      <a href="mailto:f16arena@gmail.com" className="text-sm md:text-base hover:text-neon-blue transition-colors break-all">
                        f16arena@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-muted-color mr-3 md:mr-4 text-xs md:text-sm font-mono terminal-text">[03]</span>
                    <div>
                      <span className="text-muted-color text-xs block">Адрес:</span>
                      <span className="text-sm md:text-base">г. Усть-Каменогорск, ул. 30 Гвардейская Дивизия 24/1</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-darker-bg/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-neon-red/30 reveal tilt-3d" data-stagger="2">
                <h3 className="text-lg md:text-xl font-orbitron font-bold mb-4 md:mb-6 neon-red cyber-text">СОЦИАЛЬНЫЕ СЕТИ</h3>
                <ul className="space-y-4 md:space-y-6">
                  <li>
                    <a href="https://www.instagram.com/f16arena_/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-neon-red transition-colors group">
                      <span className="text-muted-color mr-3 md:mr-4 text-xs md:text-sm font-mono terminal-text">[01]</span>
                      <Instagram className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover:text-neon-red" />
                      <span className="text-sm md:text-base">Instagram: @f16arena_</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@F16arena" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-neon-red transition-colors group">
                      <span className="text-muted-color mr-3 md:mr-4 text-xs md:text-sm font-mono terminal-text">[02]</span>
                      <Youtube className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover:text-neon-red" />
                      <span className="text-sm md:text-base">YouTube: @F16arena</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/f16arena" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-neon-red transition-colors group">
                      <span className="text-muted-color mr-3 md:mr-4 text-xs md:text-sm font-mono terminal-text">[03]</span>
                      <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover:text-neon-red" />
                      <span className="text-sm md:text-base">Telegram: @f16arena</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center reveal" data-stagger="3">
              <div className="cyber-divider-blue mb-4 md:mb-6" />
              <p className="text-base md:text-lg neon-blue font-orbitron font-bold glitch" data-text="F16 ARENA: 66 ПК И ЗОНЫ F16 EXTRA ЖДУТ ВАС!">
                F16 ARENA: 66 ПК И ЗОНЫ F16 EXTRA ЖДУТ ВАС!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Карта */}
      <section id="map" className="py-10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="rounded overflow-hidden cyber-card-3d no-hover cyber-frame reveal" data-stagger="1">
            <iframe
              src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=138491615047"
              width="100%"
              height="400"
              frameBorder="0"
              title="F16 Arena Местоположение"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="py-10 border-t border-border-color">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <div className="mr-4 font-orbitron font-bold text-xl neon-red glitch" data-text="F16 ARENA">F16 ARENA</div>
              <div>
                <a href="mailto:f16arena@gmail.com" className="hover:text-neon-blue transition-colors mr-4">f16arena@gmail.com</a>
                <a href="tel:+77080161720" className="hover:text-neon-blue transition-colors">+7708 016 17 20</a>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/f16arena_/" target="_blank" rel="noopener noreferrer" className="cyber-icon"><Instagram className="h-5 w-5" /></a>
              <a href="https://www.youtube.com/@F16arena" target="_blank" rel="noopener noreferrer" className="cyber-icon"><Youtube className="h-5 w-5" /></a>
              <a href="https://t.me/f16arena" target="_blank" rel="noopener noreferrer" className="cyber-icon"><MessageCircle className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-muted-color">
            &copy; {new Date().getFullYear()} F16 ARENA. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </div>
        </div>
      </footer>

      {/* Модалка */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col">
            <button
              className="absolute top-4 right-4 z-50 bg-darker-bg/80 rounded-full p-2 border border-neon-red hover:bg-darker-bg transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full aspect-video">
              <Image src={selectedImage.src || "/placeholder.svg"} alt={selectedImage.alt} fill className="object-contain" />
              <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-orbitron font-bold neon-blue">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

function Row({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-color flex items-center">{icon} {label}</span>
      <span>{value}</span>
    </div>
  )
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-muted-color">{label}:</span>
      <span className="text-white">{value}</span>
    </div>
  )
}

function Device({ lineIcon, name }: { lineIcon: React.ReactNode; name: string }) {
  return (
    <div className="flex items-center space-x-2">
      {lineIcon}
      <span className="text-white">{name}</span>
    </div>
  )
}
