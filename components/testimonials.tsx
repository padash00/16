import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Алексей Петров",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "F16 Arena - лучший киберспортивный клуб в городе! Отличное оборудование и атмосфера. Всегда прихожу сюда с друзьями для игровых сессий.",
  },
  {
    name: "Мария Сидорова",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 4,
    text: "Прекрасное место для тренировок и участия в турнирах. Персонал всегда готов помочь. Единственный минус - иногда бывает слишком людно.",
  },
  {
    name: "Дмитрий Иванов",
    avatar: "https://i.pravatar.cc/150?img=8",
    rating: 5,
    text: "Потрясающая атмосфера и топовое оборудование. F16 Arena стала для меня вторым домом. Спасибо за крутые турниры и отличный сервис!",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-dark-bg-alt">
      <div className="container mx-auto px-4">
        <h2 className="font-oswald text-4xl font-bold mb-12 text-center text-neon-green">Отзывы наших клиентов</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark-bg p-6 rounded-lg border border-deep-purple hover:shadow-[0_0_15px_rgba(109,0,255,0.3)] transition duration-300"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-rajdhani text-xl font-semibold text-white">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-neon-green" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

