import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaCloud } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={32} className="text-blue-500 dark:text-blue-300" />,
    title: "Desenvolvimento Web",
    desc: "Criação de aplicações web modernas, rápidas e seguras.",
  },
  {
    icon: <FaMobileAlt size={32} className="text-blue-500 dark:text-blue-300" />,
    title: "Responsividade",
    desc: "Interfaces adaptáveis para todos os dispositivos.",
  },
  {
    icon: <FaCloud size={32} className="text-blue-500 dark:text-blue-300" />,
    title: "Integração com APIs",
    desc: "Conexão eficiente com backends e serviços em nuvem.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10"
        >
          Serviços
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center gap-4 hover:scale-105 hover:shadow-xl transition-transform"
            >
              {service.icon}
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 