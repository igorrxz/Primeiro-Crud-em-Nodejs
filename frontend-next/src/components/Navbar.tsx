import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope, FaTools } from "react-icons/fa";

const navItems = [
  { id: "hero", label: "Início", icon: <FaHome /> },
  { id: "about", label: "Sobre", icon: <FaInfoCircle /> },
  { id: "services", label: "Serviços", icon: <FaServicestack /> },
  { id: "contact", label: "Contato", icon: <FaEnvelope /> },
  { id: "test-api", label: "TestApi", icon: <FaTools /> },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-2">
        <span className="font-bold text-lg tracking-tight text-blue-600 dark:text-blue-400">Crud Node</span>
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="flex items-center gap-1 px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors text-gray-700 dark:text-gray-200 text-sm font-medium"
              >
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 