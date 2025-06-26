'use client'
import { motion } from "framer-motion";
import Image from "next/image";


console.log("MOTION:", motion)

export default function HeroSection() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-[80vh] pt-24 pb-12 text-center bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-6"
      >
        <Image
          src="/next.svg"
          alt="Logo Next.js"
          width={120}
          height={40}
          className="mb-2 dark:invert"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-300 drop-shadow-sm">
          Bem-vindo ao Crud Node
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-xl">
          Uma landing page moderna, responsiva e animada, feita com Next.js, TypeScript e TailwindCSS.
        </p>
        <a
          href="#contact"
          className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-base"
        >
          Fale Conosco
        </a>
      </motion.div>
    </section>
  );
}
