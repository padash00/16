import { CalendarDays, Trophy, Users } from "lucide-react"
import Link from "next/link"

const events = [
  {
    title: "Чемпионат по CS:GO",
    date: "15 июля 2023",
    participants: 64,
    prize: "500,000 тг",
    icon: Trophy,
  },
  {
    title: "Турнир по Dota 2",
    date: "22 июля 2023",
    participants: 32,
    prize: "300,000 тг",
    icon: Trophy,
  },
  {
    title: "Ночной марафон Fortnite",
    date: "29 июля 2023",
    participants: 100,
    prize: "Игровая периферия",
    icon: CalendarDays,
  },
]

export default function EventsTournaments() {
  return (
    <section id="events" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="font-oswald text-4xl font-bold mb-12 text-center text-neon-green">Турниры и События</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-dark-bg-alt p-6 rounded-lg border border-cyber-blue hover:shadow-[0_0_15px_rgba(0,102,255,0.3)] transition duration-300 transform hover:scale-105"
            >
              <event.icon className="w-12 h-12 mb-4 text-neon-green" />
              <h3 className="font-rajdhani text-xl font-semibold mb-2 text-white">{event.title}</h3>
              <p className="text-gray-300 mb-2">
                <CalendarDays className="inline-block mr-2 w-4 h-4" />
                {event.date}
              </p>
              <p className="text-gray-300 mb-2">
                <Users className="inline-block mr-2 w-4 h-4" />
                {event.participants} участников
              </p>
              <p className="text-gray-300 mb-4">
                <Trophy className="inline-block mr-2 w-4 h-4" />
                Призовой фонд: {event.prize}
              </p>
              <Link
                href="#"
                className="font-rajdhani bg-neon-green text-dark-bg px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-80 transition duration-300 inline-block"
              >
                Подробнее
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="#"
            className="font-rajdhani bg-deep-purple text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition duration-300 inline-block"
          >
            Посмотреть все события
          </Link>
        </div>
      </div>
    </section>
  )
}

