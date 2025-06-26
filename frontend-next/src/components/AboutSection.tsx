import { motion } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-2"
        >
          <FaInfoCircle size={32} className="text-blue-600 dark:text-blue-400 mb-2" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">Sobre o Projeto</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl">
            Este projeto demonstra uma landing page totalmente componentizada, com navegação suave, responsividade, animações e visual moderno. Utiliza Next.js, TypeScript, TailwindCSS, Framer Motion e React Icons, sem bibliotecas de componentes prontos.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 