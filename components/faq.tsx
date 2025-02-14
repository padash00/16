"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Какое оборудование используется в F16 Arena?",
    answer:
      "В F16 Arena мы используем только высококлассное оборудование, включая мощные игровые ПК с процессорами Intel Core i7/i9, видеокартами NVIDIA RTX серии, мониторы с высокой частотой обновления (144Hz-360Hz), механические клавиатуры и профессиональные игровые мыши.",
  },
  {
    question: "Есть ли у вас система членства или скидок для постоянных клиентов?",
    answer:
      "Да, у нас есть система лояльности для постоянных клиентов. Мы предлагаем различные пакеты членства, которые включают скидки на бронирование, бесплатные часы игры и приоритетный доступ к новому оборудованию и турнирам.",
  },
  {
    question: "Как я могу организовать турнир в F16 Arena?",
    answer:
      "Для организации турнира свяжитесь с нашей командой через форму на сайте или позвоните нам. Мы поможем вам спланировать и провести турнир, предоставим необходимое оборудование и поможем с организацией трансляции.",
  },
  {
    question: "Предоставляете ли вы обучение или коучинг для улучшения игровых навыков?",
    answer:
      "Да, мы предлагаем индивидуальные и групповые тренировки с опытными игроками и тренерами. Обратитесь к нашему персоналу для получения дополнительной информации о доступных программах обучения.",
  },
]

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full text-left p-4 bg-dark-bg-alt rounded-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-neon-green">{question}</span>
        <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 bg-dark-bg rounded-b-lg"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="font-oswald text-4xl font-bold mb-12 text-center text-neon-green">Часто задаваемые вопросы</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

