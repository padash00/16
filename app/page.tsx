"use client"
 import { useState } from "react"
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
   ArrowRight,
   Zap,
   Shield,
   Wifi,
   Server,
   Code,
   Database,
   Flame,
   Award,
   Sparkles,
   CpuIcon,
   Joystick,
 } from "lucide-react"
 
 export default function Home() {
   // Данные для тарифов
   const pricingTiers = [
     {
       name: "Стандарт",
       hourly: "600тг/час",
       package1: "1200тг/2+1",
       package2: "1800тг/3+2",
       night: "2200тг/ночь",
       day: "1500тг/день",
       color: "red",
       icon: <Monitor className="h-5 w-5" />,
       features: ["165Hz Монитор", "GTX1660 Super", "16GB RAM"],
     },
     {
       name: "Стандарт PRO",
       hourly: "800тг/час",
       package1: "1600тг/2+1",
       package2: "2400тг/3+2",
       night: "2800тг/ночь",
       day: "2000тг/день",
       color: "blue",
       icon: <Zap className="h-5 w-5" />,
       features: ["240Hz Монитор", "RTX 3060 8GB", "16GB RAM"],
     },
     {
       name: "Стандарт Premium",
       hourly: "1000тг/час",
       package1: "2000тг/2+1",
       package2: "3000тг/3+2",
       night: "4000тг/ночь",
       day: "3500тг/день",
       color: "purple",
       icon: <Shield className="h-5 w-5" />,
       features: ["280Hz Монитор", "RTX 4060 8GB", "16GB RAM"],
     },
     {
       name: "VIP",
       hourly: "1300тг/час",
       package1: "2600тг/2+1",
       package2: "3900тг/3+2",
       night: "4500тг/ночь",
       day: "Нет дневного пакета",
       color: "yellow",
       icon: <Wifi className="h-5 w-5" />,
       features: ["380Hz Монитор", "RTX 4060TI 8GB", "16GB RAM"],
     },
     {
       name: "PRO",
       hourly: "1600тг/час",
       package1: "3200тг/2+1",
       package2: "4800тг/3+2",
       night: "5500тг/ночь",
       day: "Нет дневного пакета",
       color: "green",
       icon: <Server className="h-5 w-5" />,
       features: ["540Hz Монитор", "RTX 4070 Super 12GB", "32GB RAM"],
     },
   ]
 
   // Данные для зон PlayStation
   const playstationZones = [
     {
       size: "65 дюймов",
       hourly: "1200тг/час",
       package1: "2400тг/2+1",
       package2: "3600тг/3+2",
       features: ["4K HDR", "DualSense", "PS5 Pro", "FIFA 25", "Все популярные игры"],
     },
     {
       size: "75 дюймов",
       hourly: "1500тг/час",
       package1: "3000тг/2+1",
       package2: "4500тг/3+2",
       features: ["4K HDR+", "DualSense Pro", "PS5 Pro+", "Все игры", "Премиум звук"],
     },
   ]
 
   // Данные для характеристик ПК
   const specsTiers = [
     {
       tier: "Standart",
       cpu: "i3-12100F",
       gpu: "GTX 1660 Super",
       ram: "16GB",
       monitor: "165Hz",
       color: "red",
       icon: <Cpu className="h-5 w-5" />,
     },
     {
       tier: "Standart PRO",
       cpu: "i5-12400F",
       gpu: "RTX 3060 8GB",
       ram: "16GB",
       monitor: "240Hz",
       color: "blue",
       icon: <Database className="h-5 w-5" />,
     },
     {
       tier: "Standart Premium",
       cpu: "i5-13400F",
       gpu: "RTX 4060 8GB",
       ram: "32GB",
       monitor: "280Hz",
       color: "purple",
       icon: <Code className="h-5 w-5" />,
     },
     {
       tier: "VIP",
       cpu: "i5-12400F",
       gpu: "RTX 4060TI 8GB",
       ram: "16GB",
       monitor: "380Hz",
       color: "yellow",
       icon: <Flame className="h-5 w-5" />,
     },
     {
       tier: "PRO",
       cpu: "i7-13700F",
       gpu: "RTX 4070 Super 12GB",
       ram: "32GB",
       monitor: "540Hz",
       color: "green",
       icon: <Award className="h-5 w-5" />,
     },
   ]
 
   // Данные для устройств
   const devicesTiers = [
     {
       tier: "Standart",
       devices: [
         {
           type: "Мышь",
           name: "Attack Shark X3 (Wireless)",
           icon: <Mouse className="h-5 w-5" />,
         },
         {
           type: "Клавиатура",
           name: "Rapoo V500 PRO",
           icon: <Keyboard className="h-5 w-5" />,
         },
         {
           type: "Наушники",
           name: "HyperX Cloud 2",
           icon: <Headphones className="h-5 w-5" />,
         },
       ],
       color: "red",
     },
     {
       tier: "Standart PRO",
       devices: [
         {
           type: "Мышь",
           name: "HyperX Haste 2 (Wireless)",
           icon: <Mouse className="h-5 w-5" />,
         },
         {
           type: "Клавиатура",
           name: "HyperX Alloy Origin",
           icon: <Keyboard className="h-5 w-5" />,
         },
         {
           type: "Наушники",
           name: "HyperX Cloud 2",
           icon: <Headphones className="h-5 w-5" />,
         },
       ],
       color: "blue",
     },
     {
       tier: "Standart Premium",
       devices: [
         {
           type: "Мышь",
           name: "HyperX Haste 2 (Wireless)",
           icon: <Mouse className="h-5 w-5" />,
         },
         {
           type: "Клавиатура",
           name: "HyperX Alloy Origin",
           icon: <Keyboard className="h-5 w-5" />,
         },
         {
           type: "Наушники",
           name: "HyperX Cloud 2 Black RED",
           icon: <Headphones className="h-5 w-5" />,
         },
       ],
       color: "purple",
     },
     {
       tier: "VIP",
       devices: [
         {
           type: "Мышь",
           name: "Logitech G PRO (Wireless)",
           icon: <Mouse className="h-5 w-5" />,
         },
         {
           type: "Клавиатура",
           name: "Dark Project",
           icon: <Keyboard className="h-5 w-5" />,
         },
         {
           type: "Наушники",
           name: "HyperX Cloud Alpha 2",
           icon: <Headphones className="h-5 w-5" />,
         },
       ],
       color: "yellow",
     },
     {
       tier: "PRO",
       devices: [
         {
           type: "Мышь",
           name: "Logitech Superlight 2 (Wireless)",
           icon: <Mouse className="h-5 w-5" />,
         },
         {
           type: "Клавиатура",
           name: "Varmillo (Wireless)",
           icon: <Keyboard className="h-5 w-5" />,
         },
         {
           type: "Наушники",
           name: "Logitech G PRO X2 (Wireless)",
           icon: <Headphones className="h-5 w-5" />,
         },
       ],
       color: "green",
     },
   ]
 
   // Данные для галереи
   const galleryItems = [
     { name: "Стандарт", color: "red" },
     { name: "Стандарт PRO", color: "blue" },
     { name: "Стандарт Premium", color: "purple" },
     { name: "VIP", color: "yellow" },
     { name: "PRO", color: "green" },
   ]
 
   // Данные для преимуществ
   const benefits = [
     {
       title: "Высокая производительность",
       description: "Мощные игровые ПК с новейшими видеокартами и процессорами",
       icon: <CpuIcon className="h-6 w-6 text-neon-blue" />,
       color: "blue",
     },
     {
       title: "Комфортная атмосфера",
       description: "Эргономичные кресла и современный дизайн помещения",
       icon: <Sparkles className="h-6 w-6 text-neon-purple" />,
       color: "purple",
     },
     {
       title: "Высокоскоростной интернет",
       description: "Стабильное подключение со скоростью до 1 Гбит/с",
       icon: <Wifi className="h-6 w-6 text-neon-green" />,
       color: "green",
     },
     {
       title: "Профессиональные периферийные устройства",
       description: "Игровые мыши, клавиатуры и наушники высокого класса",
       icon: <Joystick className="h-6 w-6 text-neon-red" />,
       color: "red",
     },
   ]
 
   // Генерация случайных частиц для фона
   const particles = Array.from({ length: 50 }, (_, i) => ({
     id: i,
     size: Math.random() * 3 + 1,
     x: Math.random() * 100,
     y: Math.random() * 100,
     delay: Math.random() * 5,
     duration: Math.random() * 10 + 10,
     color: ["neon-blue", "neon-red", "neon-purple", "neon-yellow", "neon-green"][Math.floor(Math.random() * 5)],
   }))
 
   const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null)
 
   return (
     <main className="min-h-screen digital-noise matrix-effect">
       {/* Декоративные элементы */}
       <div className="fixed top-0 left-0 w-full h-0.5 bg-neon-blue opacity-60"></div>
       <div className="fixed bottom-0 left-0 w-full h-0.5 bg-neon-red opacity-60"></div>
       <div className="fixed top-0 left-0 h-full w-0.5 bg-neon-purple opacity-60"></div>
       <div className="fixed top-0 right-0 h-full w-0.5 bg-neon-green opacity-60"></div>
 
       {/* Анимированные частицы */}
       <div className="cyber-particles">
         {particles.map((particle) => (
           <div
             key={particle.id}
             className={`cyber-particle bg-${particle.color}`}
             style={{
               width: `${particle.size}px`,
               height: `${particle.size}px`,
               left: `${particle.x}%`,
               top: `${particle.y}%`,
               animationDelay: `${particle.delay}s`,
               animationDuration: `${particle.duration}s`,
             }}
           ></div>
         ))}
       </div>
 
       {/* Анимированные линии данных */}
       <div className="fixed top-[20%] left-[10%] h-[60%] w-0.5 bg-neon-blue opacity-20 data-stream"></div>
       <div className="fixed top-[15%] left-[20%] h-[70%] w-0.5 bg-neon-red opacity-20 data-stream"></div>
       <div className="fixed top-[25%] left-[30%] h-[50%] w-0.5 bg-neon-purple opacity-20 data-stream"></div>
       <div className="fixed top-[10%] left-[40%] h-[80%] w-0.5 bg-neon-yellow opacity-20 data-stream"></div>
       <div className="fixed top-[30%] left-[50%] h-[40%] w-0.5 bg-neon-green opacity-20 data-stream"></div>
       <div className="fixed top-[20%] left-[60%] h-[60%] w-0.5 bg-neon-blue opacity-20 data-stream"></div>
       <div className="fixed top-[15%] left-[70%] h-[70%] w-0.5 bg-neon-red opacity-20 data-stream"></div>
       <div className="fixed top-[25%] left-[80%] h-[50%] w-0.5 bg-neon-purple opacity-20 data-stream"></div>
       <div className="fixed top-[10%] left-[90%] h-[80%] w-0.5 bg-neon-yellow opacity-20 data-stream"></div>
 
       {/* Шапка */}
       <header className="container mx-auto px-4 py-6 relative z-10">
   <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
     {/* Логотип и подзаголовок */}
     <div className="cyber-corner cyber-shadow text-center md:text-left">
       <h1
         className="text-3xl md:text-5xl font-orbitron font-bold tracking-wider cyber-glitch-text"
         data-text="F16 ARENA"
       >
         F16 ARENA
       </h1>
       <p className="text-sm md:text-base text-muted-color tracking-wide cyber-text">
         КИБЕРСПОРТИВНЫЙ КЛУБ
       </p>
       <div className="cyber-status mt-2"></div>
     </div>
 
     {/* Навигация */}
     <nav className="bg-darker-bg/80 backdrop-blur-sm p-3 border border-border-color cyber-frame rounded-md">
       <ul className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
         <li>
           <Link href="#" className="cyber-nav-item active">
             ГЛАВНАЯ
           </Link>
         </li>
         <li>
           <Link href="#pricing" className="cyber-nav-item">
             ТАРИФЫ
           </Link>
         </li>
         <li>
           <Link href="#specs" className="cyber-nav-item">
             ОБОРУДОВАНИЕ
           </Link>
         </li>
         <li>
           <Link href="#gallery" className="cyber-nav-item">
             ГАЛЕРЕЯ
           </Link>
         </li>
         <li>
           <Link href="#contact" className="cyber-nav-item">
             КОНТАКТЫ
           </Link>
         </li>
       </ul>
     </nav>
   </div>
 </header>
 
 
       {/* Главный экран */}
       <section className="relative py-20 md:py-32 overflow-hidden border-t border-b border-border-color scanline hologram grid-overlay w-screen max-w-none">
         <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
           <Image
             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF3468%20%282%29.png-kkVKtNtjpSsnmvkmiUL230RwgQpTSX.jpeg"
             alt="Игровой компьютер F16 Arena с RGB подсветкой"
             fill
             className="object-cover object-center w-full h-full"
             sizes="100vw"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
         </div>
         <div className="container mx-auto px-4 relative z-10">
           <div className="max-w-3xl mx-auto">
 
             <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 leading-tight">
               <span className="neon-blue">ИГРОВОЙ</span> КЛУБ <span className="neon-red">НОВОГО</span> УРОВНЯ
             </h2>
 
             <div className="flex flex-wrap gap-4">
             <a
               href="https://api.whatsapp.com/send/?phone=77080161720&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D0%B8%D0%B7+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+2%D0%93%D0%98%D0%A1.%0A%0A&type=phone_number&app_absent=0"
               target="_blank"
               rel="noopener noreferrer"
             >
               <button className="cyber-button-3d flex items-center pulse-effect">
                 ЗАБРОНИРОВАТЬ
                 <ChevronRight className="ml-2 h-5 w-5" />
               </button>
             </a>
             </div>
 
             <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
               <div className="text-center cyber-card-3d p-4 cyber-frame">
                 <div className="text-3xl font-bold neon-blue font-orbitron mb-2">540Hz</div>
                 <div className="text-xs uppercase tracking-wider text-muted-color">Максимальная частота</div>
               </div>
               <div className="text-center cyber-card-3d p-4 cyber-frame">
                 <div className="text-3xl font-bold neon-red font-orbitron mb-2">24/7</div>
                 <div className="text-xs uppercase tracking-wider text-muted-color">Режим работы</div>
               </div>
               <div className="text-center cyber-card-3d p-4 cyber-frame">
                 <div className="text-3xl font-bold neon-purple font-orbitron mb-2">75"</div>
                 <div className="text-xs uppercase tracking-wider text-muted-color">Максимальная диагональ</div>
               </div>
               <div className="text-center cyber-card-3d p-4 cyber-frame">
                 <div className="text-3xl font-bold neon-green font-orbitron mb-2">1000+</div>
                 <div className="text-xs uppercase tracking-wider text-muted-color">Игр доступно</div>
               </div>
             </div>
           </div>
         </div>
 
         {/* Анимированные частицы */}
         <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-neon-blue animate-pulse"></div>
           <div className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-neon-red animate-pulse"></div>
           <div className="absolute top-1/2 left-2/3 w-2 h-2 rounded-full bg-neon-purple animate-pulse"></div>
           <div className="absolute top-1/3 left-3/4 w-2 h-2 rounded-full bg-neon-yellow animate-pulse"></div>
           <div className="absolute top-2/3 left-1/4 w-2 h-2 rounded-full bg-neon-green animate-pulse"></div>
         </div>
       </section>
 
       {/* Секция преимуществ */}
       <section className="py-16 bg-darker-bg/90 backdrop-blur-sm">
         <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {benefits.map((benefit, index) => (
               <div
                 key={index}
                 className={`bg-darker-bg/80 backdrop-blur-sm border border-neon-${benefit.color} rounded-lg overflow-hidden fade-in`}
                 style={{ animationDelay: `${index * 0.2}s` }}
               >
                 <div className="p-6 h-full flex flex-col items-center text-center">
                   <div className={`mb-4 p-3 rounded-full bg-darker-bg border border-neon-${benefit.color}`}>
                     {benefit.icon}
                   </div>
                   <h3 className={`text-xl font-orbitron font-bold mb-3 neon-${benefit.color}`}>{benefit.title}</h3>
                   <p className="text-muted-color">{benefit.description}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Секция тарифов */}
       <section id="pricing" className="py-20 cyber-mesh">
         <div className="container mx-auto px-4">
           <div className="mb-12">
             <h2 className="cyber-heading text-3xl md:text-4xl font-orbitron font-bold mb-4 cyber-title">
               ВЫБЕРИ СВОЮ ЗОНУ
             </h2>
             <p className="text-muted-color max-w-2xl ml-4">
               Подбери оптимальный тариф для твоей игровой сессии. От стандартных до PRO-конфигураций
             </p>
           </div>
 
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
             {pricingTiers.map((tier, index) => (
               <div
                 key={index}
                 className={`bg-darker-bg/80 backdrop-blur-sm border border-neon-${tier.color} rounded-lg overflow-hidden fade-in digital-distortion`}
                 style={{ animationDelay: `${index * 0.1}s` }}
               >
                 <div className="p-6 h-full flex flex-col">
                   <div className="flex justify-between items-start mb-4">
                     <div className="flex items-center">
                       <div className={`mr-2 text-neon-${tier.color}`}>{tier.icon}</div>
                       <h3 className={`text-xl font-orbitron font-bold neon-${tier.color}`}>{tier.name}</h3>
                     </div>
                     <span className="text-xs bg-darker-bg px-2 py-1 border border-border-color cyber-frame">
                       {index + 1}
                     </span>
                   </div>
 
                   <div className="space-y-4 mb-6 flex-grow">
                     <div className={`text-2xl font-bold neon-${tier.color} font-orbitron`}>{tier.hourly}</div>
                     <div className={`cyber-divider-${tier.color}`}></div>
                     <div className="space-y-2">
                       <div className="flex items-center justify-between">
                         <span className="text-muted-color flex items-center">
                           <Package className="h-4 w-4 mr-1 opacity-70" /> Пакет 2+1:
                         </span>
                         <span>{tier.package1}</span>
                       </div>
                       <div className="flex items-center justify-between">
                         <span className="text-muted-color flex items-center">
                           <Package className="h-4 w-4 mr-1 opacity-70" /> Пакет 3+2:
                         </span>
                         <span>{tier.package2}</span>
                       </div>
                       <div className="flex items-center justify-between">
                         <span className="text-muted-color flex items-center">
                           <Moon className="h-4 w-4 mr-1 opacity-70" /> Ночь:
                         </span>
                         <span>{tier.night}</span>
                       </div>
                       <div className="flex items-center justify-between">
                         <span className="text-muted-color flex items-center">
                           <Sun className="h-4 w-4 mr-1 opacity-70" /> День:
                         </span>
                         <span>{tier.day}</span>
                       </div>
                     </div>
 
                     <div className="mt-4 pt-4 border-t border-border-color">
                       <h4 className="text-sm font-orbitron mb-2 text-muted-color">Особенности:</h4>
                       <ul className="space-y-1">
                         {tier.features.map((feature, idx) => (
                           <li key={idx} className="flex items-center text-sm">
                             <span className={`h-1.5 w-1.5 bg-neon-${tier.color} rounded-full mr-2`}></span>
                             {feature}
                           </li>
                         ))}
                       </ul>
                     </div>
                   </div>
 
                   <a href="https://api.whatsapp.com/send/?phone=77080161720&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D0%B8%D0%B7+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+2%D0%93%D0%98%D0%A1.%0A%0A&type=phone_number&app_absent=0"><button className={`cyber-button cyber-button-${tier.color} w-full`}>ВЫБРАТЬ</button></a>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Секция PlayStation */}
       <section className="py-20 bg-darker-bg cyber-grid">
         <div className="container mx-auto px-4">
           <div className="mb-12">
             <h2 className="cyber-heading cyber-heading-purple text-3xl md:text-4xl font-orbitron font-bold mb-4 cyber-title">
               PLAYSTATION ЗОНА
             </h2>
             <p className="text-muted-color max-w-2xl ml-4">Играй на PlayStation 5 на больших экранах с друзьями</p>
           </div>
 
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
             {playstationZones.map((zone, index) => (
               <div
                 key={index}
                 className="cyber-card-3d cyber-card-purple fade-in hologram cyber-frame"
                 style={{ animationDelay: `${index * 0.1}s` }}
               >
                 <div className="p-6">
                   <div className="flex items-center mb-4">
                     <Gamepad2 className="h-5 w-5 mr-2 text-neon-purple" />
                     <h3 className="text-xl font-orbitron font-bold neon-purple">{zone.size}</h3>
                   </div>
 
                   <div className="space-y-4 mb-6">
                     <div className="text-2xl font-bold neon-purple font-orbitron">{zone.hourly}</div>
                     <div className="cyber-divider-purple"></div>
                     <div className="space-y-2">
                       <div className="flex items-center justify-between">
                         <span className="text-muted-color flex items-center">
                           <Package className="h-4 w-4 mr-1 opacity-70" /> Пакет 2+1:
                         </span>
                         <span>{zone.package1}</span>
                       </div>
                       <div className="flex items-center justify-between">
                         <span className="text-muted-color flex items-center">
                           <Package className="h-4 w-4 mr-1 opacity-70" /> Пакет 3+2:
                         </span>
                         <span>{zone.package2}</span>
                       </div>
                     </div>
 
                     <div className="mt-4 pt-4 border-t border-border-color">
                       <h4 className="text-sm font-orbitron mb-2 text-muted-color">Особенности:</h4>
                       <ul className="grid grid-cols-2 gap-2">
                         {zone.features.map((feature, idx) => (
                           <li key={idx} className="flex items-center text-sm">
                             <span className="h-1.5 w-1.5 bg-neon-purple rounded-full mr-2"></span>
                             {feature}
                           </li>
                         ))}
                       </ul>
                     </div>
                   </div>
 
                   <a href="https://api.whatsapp.com/send/?phone=77080161720&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D0%B8%D0%B7+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+2%D0%93%D0%98%D0%A1.%0A%0A&type=phone_number&app_absent=0"><button className="cyber-button-3d-purple w-full">ЗАБРОНИРОВАТЬ PLAYSTATION</button></a>
                 </div>
               </div>
             ))}
           </div>
           <p className="text-center neon-purple font-orbitron font-bold cyber-text">
             2x 65-ДЮЙМОВЫХ И 2x 75-ДЮЙМОВЫХ ТЕЛЕВИЗОРА
           </p>
         </div>
       </section>
 {/* Оборудование и устройства */}
 <section id="equipment" className="py-20 cyber-mesh">
   <div className="container mx-auto px-4">
     <div className="mb-12">
       <h2 className="cyber-heading text-3xl md:text-4xl font-orbitron font-bold mb-4 cyber-title">
         ОБОРУДОВАНИЕ И УСТРОЙСТВА
       </h2>
       <p className="text-muted-color max-w-2xl ml-4">
         Ознакомься с конфигурациями техники и периферии каждой зоны
       </p>
     </div>
 
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
       {specsTiers.map((spec, index) => {
         const device = devicesTiers.find(d => d.tier === spec.tier);
 
         let color = "cyan"; // Цвет по дефолту
         if (spec.tier.includes("Standart") && !spec.tier.includes("Premium")) color = "red";
         if (spec.tier.includes("Standart PRO")) color = "cyan";
         if (spec.tier.includes("Standart Premium")) color = "purple";
         if (spec.tier.includes("VIP")) color = "yellow";
         if (spec.tier.includes("PRO")) color = "green";
 
         return (
           <div
             key={index}
             className={`bg-darker-bg/80 backdrop-blur-sm border border-neon-${color} rounded-lg overflow-hidden fade-in digital-distortion`}
             style={{ animationDelay: `${index * 0.1}s` }}
           >
             <div className="p-6 h-full flex flex-col">
               {/* Заголовок */}
               <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center">
                   <h3 className={`text-xl font-orbitron font-bold neon-${color}`}>{spec.tier}</h3>
                 </div>
                 <span className="text-xs bg-darker-bg px-2 py-1 border border-border-color cyber-frame">
                   {index + 1}
                 </span>
               </div>
 
               {/* Особенности */}
               <div className="space-y-4 mb-6 flex-grow">
                 <div className={`cyber-divider-${color}`}></div>
 
                 <div className="space-y-2">
                   {/* Процессор */}
                   <div className="flex items-center space-x-2">
                     <span className="text-muted-color">CPU:</span>
                     <span className="text-white">{spec.cpu}</span>
                   </div>
 
                   {/* Видеокарта */}
                   <div className="flex items-center space-x-2">
                     <span className="text-muted-color">GPU:</span>
                     <span className="text-white">{spec.gpu}</span>
                   </div>
 
                   {/* Память */}
                   <div className="flex items-center space-x-2">
                     <span className="text-muted-color">RAM:</span>
                     <span className="text-white">{spec.ram}</span>
                   </div>
 
                   {/* Монитор */}
                   <div className="flex items-center space-x-2">
                     <span className="text-muted-color">Монитор:</span>
                     <span className="text-white">{spec.monitor}</span>
                   </div>
 
                   {/* Периферия с иконками */}
                   {device && (
                     <>
                       {/* Мышь */}
                       <div className="flex items-center space-x-2">
                         <Mouse className="h-4 w-4 text-muted-color opacity-80" />
                         <span className="text-white">{device.devices[0].name}</span>
                       </div>
 
                       {/* Клавиатура */}
                       <div className="flex items-center space-x-2">
                         <Keyboard className="h-4 w-4 text-muted-color opacity-80" />
                         <span className="text-white">{device.devices[1].name}</span>
                       </div>
 
                       {/* Наушники */}
                       <div className="flex items-center space-x-2">
                         <Headphones className="h-4 w-4 text-muted-color opacity-80" />
                         <span className="text-white">{device.devices[2].name}</span>
                       </div>
                     </>
                   )}
                 </div>
               </div>
 
               {/* Кнопка выбрать */}
               <a href="https://api.whatsapp.com/send/?phone=77080161720&text=Здравствуйте! Пишу по поводу выбора зоны&type=phone_number&app_absent=0">
                 <button
                   className={`cyber-button cyber-button-${color} w-full`}
                   style={{ "--neon-color": `var(--neon-${color})` } as React.CSSProperties}
                 >
                   ВЫБРАТЬ
                 </button>
               </a>
 
             </div>
           </div>
         );
       })}
     </div>
   </div>
 </section>
       <div className="relative flex justify-center my-20">
   <div className="w-48 h-1 bg-neon-glow"></div>
 </div>
 
 
       {/* Секция галереи */}
            {/* Секция галереи */}
       <section id="gallery" className="py-20 cyber-mesh">
         <div className="container mx-auto px-4">
           <div className="mb-12">
             <h2 className="cyber-heading text-3xl md:text-4xl font-orbitron font-bold mb-4 cyber-title">
               КИБЕР ГАЛЕРЕЯ
             </h2>
             <p className="text-muted-color max-w-2xl ml-4">Взгляни на наши игровые зоны и оборудование</p>
           </div>
 
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
             {[
               {
                 src: "https://i.postimg.cc/xTt25LXt/DSCF3464.png",
                 alt: "Игровая зона F16 Arena",
                 title: "",
                 color: "red",
               },
               {
                 src: "https://i.postimg.cc/BQq32mnj/DSCF3471.png",
                 alt: "Игровые компьютеры F16 Arena",
                 title: "",
                 color: "blue",
               },
               {
                 src: "https://i.postimg.cc/d0TcJX4x/DSCF3476.png",
                 alt: "Игровое пространство F16 Arena",
                 title: "",
                 color: "purple",
               },
               {
                 src: "https://i.postimg.cc/1XBLWZ3f/DSCF3521.png",
                 alt: "VIP зона F16 Arena",
                 title: "",
                 color: "yellow",
               },
               {
                 src: "https://i.postimg.cc/sgqbHms9/DSCF3525.png",
                 alt: "PRO зона F16 Arena",
                 title: "",
                 color: "green",
               },
               {
                 src: "https://i.postimg.cc/gkMC8d77/DSCF3528.png",
                 alt: "Игровые станции F16 Arena",
                 title: "",
                 color: "red",
               },
               {
                 src: "https://i.postimg.cc/66cgxtBQ/DSCF3530.png",
                 alt: "Компьютерное оборудование F16 Arena",
                 title: "",
                 color: "blue",
               },
               {
                 src: "https://i.postimg.cc/JzS43jFS/DSCF3532.png",
                 alt: "RGB подсветка F16 Arena",
                 title: "",
                 color: "purple",
               },
               {
                 src: "https://i.postimg.cc/FsB9mjh1/DSCF3533.png",
                 alt: "Игровая атмосфера F16 Arena",
                 title: "",
                 color: "yellow",
               },
             ].map((item, index) => (
               <div
                 key={index}
                 className="relative group overflow-hidden aspect-video fade-in cursor-pointer"
                 style={{ animationDelay: `${index * 0.1}s` }}
                 onClick={() => setSelectedImage(item)}
               >
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
 
                 <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-blue transition-all duration-300 z-20 overflow-hidden">
                   <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-blue opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
                   <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-red opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
                   <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-green opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
                   <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-purple opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
                 </div>
 
                 <Image
                   src={item.src || "/placeholder.svg"}
                   alt={item.alt}
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                   loading="lazy"
                 />
 
                 <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20">
                   <h3 className={`text-lg font-orbitron font-bold neon-${item.color} text-shadow-lg`}>{item.title}</h3>
                 </div>
 
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                   <span className="px-4 py-2 bg-darker-bg/80 backdrop-blur-sm border border-neon-blue rounded text-sm font-orbitron text-white">
                     Нажмите для просмотра
                   </span>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>
       {/* Прокачка уровня */}
 <section id="progress" className="py-20 bg-black/30 backdrop-blur-sm cyber-grid">
   <div className="container mx-auto px-4">
     <h2
       className="text-3xl md:text-4xl font-bold text-center mb-12 font-orbitron glitch"
       data-text="Level Up Discounts"
     >
       Level Up Discounts
     </h2>
 
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 
       {/* Silver */}
       <div
         className="bg-black/50 backdrop-blur-sm rounded-lg p-6 neon-border-blue transition-transform hover:-translate-y-1 duration-300 fade-in"
         style={{ animationDelay: "0.1s" }}
       >
         <div className="flex justify-center mb-4">
           <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-neon-blue">
             <path d="M12 2L2 7V12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12V7L12 2Z" stroke="currentColor" strokeWidth="2" />
             <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
             <path d="M12 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
           </svg>
         </div>
         <h3 className="text-xl font-bold mb-4 font-orbitron neon-blue">Silver</h3>
         <p className="text-gray-300 mb-2">Потрать более 60 000 ₸</p>
         <p className="text-2xl font-bold neon-blue">-10%</p>
       </div>
 
       {/* Gold */}
       <div
         className="bg-black/50 backdrop-blur-sm rounded-lg p-6 neon-border-yellow transition-transform hover:-translate-y-1 duration-300 fade-in"
         style={{ animationDelay: "0.3s" }}
       >
         <div className="flex justify-center mb-4">
           <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-neon-yellow">
             <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="2" />
             <path d="M8 16L12 22L16 16" stroke="currentColor" strokeWidth="2" />
           </svg>
         </div>
         <h3 className="text-xl font-bold mb-4 font-orbitron neon-yellow">Gold</h3>
         <p className="text-gray-300 mb-2">Потрать более 80 000 ₸</p>
         <p className="text-2xl font-bold neon-yellow">-20%</p>
       </div>
 
       {/* Platinum */}
       <div
         className="bg-black/50 backdrop-blur-sm rounded-lg p-6 neon-border-purple transition-transform hover:-translate-y-1 duration-300 fade-in"
         style={{ animationDelay: "0.5s" }}
       >
         <div className="flex justify-center mb-4">
           <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-neon-purple">
             <path d="M3 12L12 2L21 12L12 22L3 12Z" stroke="currentColor" strokeWidth="2" />
             <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
           </svg>
         </div>
         <h3 className="text-xl font-bold mb-4 font-orbitron neon-purple">Platinum</h3>
         <p className="text-gray-300 mb-2">Потрать более 250 000 ₸</p>
         <p className="text-2xl font-bold neon-purple">-30%</p>
       </div>
 
       {/* Almaz */}
       <div
         className="bg-black/50 backdrop-blur-sm rounded-lg p-6 neon-border-red transition-transform hover:-translate-y-1 duration-300 fade-in"
         style={{ animationDelay: "0.7s" }}
       >
         <div className="flex justify-center mb-4">
           <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-neon-red">
             <path d="M12 2L2 9L12 22L22 9L12 2Z" stroke="currentColor" strokeWidth="2" />
             <path d="M2 9H22" stroke="currentColor" strokeWidth="2" />
             <path d="M9 9L12 22L15 9" stroke="currentColor" strokeWidth="2" />
           </svg>
         </div>
         <h3 className="text-xl font-bold mb-4 font-orbitron neon-red">Almaz</h3>
         <p className="text-gray-300 mb-2">Потрать более 500 000 ₸</p>
         <p className="text-2xl font-bold neon-red">-40%</p>
       </div>
 
     </div>
   </div>
 </section>
 
 
       {/* Секция контактов */}
       <section id="contact" className="py-12 md:py-20 bg-darker-bg cyber-grid">
         <div className="container mx-auto px-4">
           <div className="mb-8 md:mb-12">
             <h2 className="cyber-heading cyber-heading-blue text-2xl md:text-4xl font-orbitron font-bold mb-3 md:mb-4 cyber-title">
               СВЯЗАТЬСЯ С НАМИ
             </h2>
             <p className="text-muted-color max-w-2xl ml-4 text-sm md:text-base">
               Мы всегда на связи и готовы ответить на все вопросы
             </p>
           </div>
 
           <div className="max-w-4xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
               <div className="bg-darker-bg/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-neon-blue/30">
                 <h3 className="text-lg md:text-xl font-orbitron font-bold mb-4 md:mb-6 neon-blue cyber-text">
                   КОНТАКТНАЯ ИНФОРМАЦИЯ
                 </h3>
                 <ul className="space-y-4 md:space-y-6">
                   <li className="flex items-center">
                     <span className="text-muted-color mr-3 md:mr-4 text-xs md:text-sm font-mono terminal-text">
                       [01]
                     </span>
                     <div>
                       <span className="text-muted-color text-xs block">Бронирование:</span>
                       <a
                         href="tel:+77080161720"
                         className="text-sm md:text-base hover:text-neon-blue transition-colors"
                       >
                         +7708 016 17 20
                       </a>
                     </div>
                   </li>
                   <li className="flex items-center">
                     <span className="text-muted-color mr-3 md:mr-4 text-xs md:text-sm font-mono terminal-text">
                       [02]
                     </span>
                     <div>
                       <span className="text-muted-color text-xs block">Email:</span>
                       <a
                         href="mailto:f16arena@gmail.com"
                         className="text-sm md:text-base hover:text-neon-blue transition-colors break-all"
                       >
                         f16arena@gmail.com
                       </a>
                     </div>
                   </li>
                   <li className="flex items-start">
                     <span className="text-muted-color mr-3 md:mr-4 text-xs md:text-sm font-mono terminal-text">
                       [03]
                     </span>
                     <div>
                       <span className="text-muted-color text-xs block">Адрес:</span>
                       <span className="text-sm md:text-base">г. Усть-Каменогорск, ул. 30 Гвардейская Дивизия 24/1</span>
                     </div>
                   </li>
                 </ul>
               </div>
               <div className="bg-darker-bg/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-neon-red/30">
                 <h3 className="text-lg md:text-xl font-orbitron font-bold mb-4 md:mb-6 neon-red cyber-text">
                   СОЦИАЛЬНЫЕ СЕТИ
                 </h3>
                 <ul className="space-y-4 md:space-y-6">
                   <li>
                     <a
                       href="https://www.instagram.com/f16arena_/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center hover:text-neon-red transition-colors group"
                     >
                       <span className="text-muted-color mr-3 md:mr-4 text-xs md:text-sm font-mono terminal-text">
                         [01]
                       </span>
                       <Instagram className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover:text-neon-red" />
                       <span className="text-sm md:text-base">Instagram: @f16arena_</span>
                     </a>
                   </li>
                   <li>
                     <a
                       href="https://www.youtube.com/@F16arena"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center hover:text-neon-red transition-colors group"
                     >
                       <span className="text-muted-color mr-3 md:mr-4 text-xs md:text-sm font-mono terminal-text">
                         [02]
                       </span>
                       <Youtube className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover:text-neon-red" />
                       <span className="text-sm md:text-base">YouTube: @F16arena</span>
                     </a>
                   </li>
                   <li>
                     <a
                       href="https://t.me/f16arena"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center hover:text-neon-red transition-colors group"
                     >
                       <span className="text-muted-color mr-3 md:mr-4 text-xs md:text-sm font-mono terminal-text">
                         [03]
                       </span>
                       <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover:text-neon-red" />
                       <span className="text-sm md:text-base">Telegram: @f16arena</span>
                     </a>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="text-center">
               <div className="cyber-divider-blue mb-4 md:mb-6"></div>
               <p className="text-base md:text-lg neon-blue font-orbitron font-bold cyber-glitch-text">
                 F16 ARENA: 65 ПК И PLAYSTATION ЗОНЫ ЖДУТ ВАС!
               </p>
             </div>
           </div>
         </div>
       </section>
 
       {/* Карта */}
       <section className="py-10">
         <div className="container mx-auto px-4">
           <div className="rounded overflow-hidden cyber-card-3d no-hover cyber-frame">
             <iframe
               src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=138491615047"
               width="100%"
               height="400"
               frameBorder="0"
               title="F16 Arena Местоположение"
               className="w-full"
               loading="lazy"
             ></iframe>
           </div>
         </div>
       </section>
      <>
  {/* Yandex.Metrika counter */}
  <script type="text/javascript" dangerouslySetInnerHTML={{
    __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym(101463564, "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true,
      ecommerce:"dataLayer"
    });`
  }} />
  <noscript><div><img src="https://mc.yandex.ru/watch/101463564" style={{position:"absolute", left:"-9999px"}} alt="" /></div></noscript>
  {/* /Yandex.Metrika counter */}
</>

       {/* Подвал */}
       <footer className="py-10 border-t border-border-color">
         <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row justify-between items-center">
             <div className="mb-4 md:mb-0 flex items-center">
               <div className="mr-4 font-orbitron font-bold text-xl neon-red cyber-glitch-text">F16 ARENA</div>
               <div>
                 <a href="mailto:info@f16arena.kz" className="hover:text-neon-blue transition-colors mr-4">
                   f16arena@gmail.com
                 </a>
                 <a href="tel:+77080161720" className="hover:text-neon-blue transition-colors">
                   +7708 016 17 20
                 </a>
               </div>
             </div>
             <div className="flex space-x-4">
               <a
                 href="https://www.instagram.com/f16arena_/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="cyber-icon"
               >
                 <Instagram className="h-5 w-5" />
               </a>
               <a
                 href="https://www.youtube.com/@F16arena"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="cyber-icon"
               >
                 <Youtube className="h-5 w-5" />
               </a>
               <a href="https://t.me/f16arena" target="_blank" rel="noopener noreferrer" className="cyber-icon">
                 <MessageCircle className="h-5 w-5" />
               </a>
             </div>
           </div>
           <div className="text-center mt-8 text-sm text-muted-color">
             &copy; {new Date().getFullYear()} F16 ARENA. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
           </div>
         </div>
       </footer>
 
       {/* Модальное окно для просмотра изображений */}
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
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="h-6 w-6"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               </svg>
             </button>
             <div className="relative w-full aspect-video">
               <Image
                 src={selectedImage.src || "/placeholder.svg"}
                 alt={selectedImage.alt}
                 fill
                 className="object-contain"
               />
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
