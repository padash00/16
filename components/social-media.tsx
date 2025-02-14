import { FaTelegram, FaInstagram, FaVk, FaDiscord } from "react-icons/fa"

export default function SocialMedia() {
  return (
    <section className="py-12 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="font-oswald text-3xl font-bold mb-8 text-center text-neon-green">Следите за нами</h2>
        <div className="flex justify-center space-x-8">
          <a
            href="https://t.me/f16arena"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-cyber-blue hover:text-neon-green transition-colors duration-300 transform hover:scale-110"
          >
            <FaTelegram />
          </a>
          <a
            href="https://instagram.com/f16arena"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-cyber-blue hover:text-neon-green transition-colors duration-300 transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://vk.com/f16arena"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-cyber-blue hover:text-neon-green transition-colors duration-300 transform hover:scale-110"
          >
            <FaVk />
          </a>
          <a
            href="https://discord.gg/f16arena"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-cyber-blue hover:text-neon-green transition-colors duration-300 transform hover:scale-110"
          >
            <FaDiscord />
          </a>
        </div>
        <p className="font-rajdhani text-center mt-6 text-lg text-gray-300 animate-pulse">
          Присоединяйтесь к комьюнити!
        </p>
      </div>
    </section>
  )
}

