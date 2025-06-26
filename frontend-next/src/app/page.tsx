'use client'
import Image from "next/image";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import TestApiSection from "../components/TestApiSection";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Navbar />
      <main>
        {/* Seção Hero */}
        <HeroSection />
        {/* Seção Sobre */}
        <AboutSection />
        {/* Seção Serviços */}
        <ServicesSection />
        {/* Seção Contato */}
        <ContactSection />
        {/* Seção Teste API */}
        <TestApiSection />
      </main>
    </div>
  );
}
