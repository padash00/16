"use client"

import { useState } from "react"
import Link from "next/link"

const pricingData = [
  {
    zone: "Standart",
    hourly: 600,
    twoHours: 1200,
    threeHours: 1800,
    night: 2200,
    day: 1500,
  },
  {
    zone: "Standart PRO",
    hourly: 800,
    twoHours: 1600,
    threeHours: 2400,
    night: 2800,
    day: 2000,
  },
  {
    zone: "Standart Premium",
    hourly: 1000,
    twoHours: 2000,
    threeHours: 3000,
    night: 3500,
    day: 2500,
  },
  {
    zone: "Next Level",
    hourly: 1300,
    twoHours: 2600,
    threeHours: 3900,
    night: 4000,
    day: "-",
  },
  {
    zone: "PRO Zone",
    hourly: 1600,
    twoHours: 3200,
    threeHours: 4800,
    night: 5500,
    day: "-",
  },
]

export default function Pricing() {
  const [hoveredZone, setHoveredZone] = useState(null)

  return (
    <section id="pricing" className="py-20 bg-dark-bg-alt">
      <div className="container mx-auto px-4">
        <h2 className="font-oswald text-4xl font-bold mb-12 text-center text-neon-green">Тарифы</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-deep-purple">
                <th className="p-3 text-left font-rajdhani">Зона</th>
                <th className="p-3 text-center font-rajdhani">1 час</th>
                <th className="p-3 text-center font-rajdhani">2+1</th>
                <th className="p-3 text-center font-rajdhani">3+2</th>
                <th className="p-3 text-center font-rajdhani">Ночь (22:00 - 10:00)</th>
                <th className="p-3 text-center font-rajdhani">День (10:00 - 16:00)</th>
                <th className="p-3 text-center font-rajdhani">Действие</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((zone, index) => (
                <tr
                  key={index}
                  className={`bg-gradient-to-r ${
                    index % 2 === 0 ? "from-dark-bg to-dark-bg-alt" : "from-dark-bg-alt to-dark-bg"
                  } hover:from-cyber-blue hover:to-deep-purple hover:text-white transition-colors duration-300`}
                  onMouseEnter={() => setHoveredZone(index)}
                  onMouseLeave={() => setHoveredZone(null)}
                >
                  <td className="p-3 font-rajdhani">{zone.zone}</td>
                  <td className="p-3 text-center font-mono">{zone.hourly} тг</td>
                  <td className="p-3 text-center font-mono">{zone.twoHours} тг</td>
                  <td className="p-3 text-center font-mono">{zone.threeHours} тг</td>
                  <td className="p-3 text-center font-mono">{zone.night} тг</td>
                  <td className="p-3 text-center font-mono">{zone.day}</td>
                  <td className="p-3 text-center">
                    <Link
                      href="#booking"
                      className={`font-rajdhani bg-neon-green text-dark-bg px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-80 transition duration-300 ${
                        hoveredZone === index ? "animate-pulse" : ""
                      }`}
                    >
                      Забронировать
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

