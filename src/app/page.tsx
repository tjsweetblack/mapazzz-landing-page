"use client";

import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container"; 
import CTA from "@/components/CTA";
import LanguageModal from "@/components/LanguageModal";
import ComingSoonStores from "@/components/ComingSoonStores";
import { LanguageProvider } from "@/context/LanguageContext";
import JoinFightSection from "@/components/JoinFightSection";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

const HomePage: React.FC = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language");
      if (!savedLanguage) {
        setOpen(true); 
      }
    }
  }, []);

  return (
    <LanguageProvider>
      <Header />
      {open && <LanguageModal setOpen={setOpen} open={open} />}
      <Hero />
      <br />
      <br />
      <Container>
        <Benefits />
      </Container>
      <JoinFightSection />
      {/* Seção das Lojas de App */}
      <ComingSoonStores />
      <Container>
        <FAQ />
      </Container>
      <Container>
        <CTA />
      </Container>
        <Footer />
    </LanguageProvider>
  );
};

export default HomePage;