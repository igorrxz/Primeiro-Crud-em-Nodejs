import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center gap-6">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-2"
        >
          <FaEnvelope size={32} className="text-blue-600 dark:text-blue-400 mb-2" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">Contato</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl">
            Tem interesse ou dúvidas? Preencha o formulário abaixo e entraremos em contato!
          </p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex flex-col gap-4 mt-4"
        >
          <input
            type="text"
            placeholder="Seu nome"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Sua mensagem"
            rows={4}
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="mt-2 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-base"
          >
            Enviar
          </button>
        </motion.form>
      </div>
    </section>
  );
} 