"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "./Container";
import { siteDetails } from "@/data/siteDetails";
import { useLanguage } from "@/context/LanguageContext";
import LanguageModal from "./LanguageModal";
import { menuItems } from "@/data/menuItems";

const IconLogo: string = "/images/icon.png";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const [isClient, setIsClient] = useState(false); // Estado para verificar se está no cliente

  // Marca que estamos no cliente após a montagem
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Depuração
  console.log("Idioma no Header:", language);

  // Itens do menu com base no idioma
  const items = menuItems[language as keyof typeof menuItems] || menuItems.en;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
        <Container className="px-4 md:px-6">
          <nav className="flex items-center justify-between py-4 md:py-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src={IconLogo} alt="Logo" width={60} height={60} />
              <span className="text-xl font-bold text-red-700 uppercase md:text-2xl">
                {siteDetails.siteName}
              </span>
            </Link>

            {/* Desktop Menu - Renderiza apenas no cliente */}
            {isClient ? (
              <ul className="hidden items-center space-x-8 md:flex uppercase">
                {items.map((item) => (
                  <li key={item.text}>
                    <Link
                      href={item.url}
                      className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/docsapi"
                    className="inline-block rounded-md bg-red-600 px-6 py-2 text-white font-medium hover:bg-red-700"
                  >
                    {language === "pt"
                      ? "Documentação API"
                      : language === "en"
                      ? "API Docs"
                      : "API ドキュメント"}
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setOpen(true)}
                    className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                  >
                    🌍 {language.toUpperCase()}
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="hidden items-center space-x-8 md:flex uppercase">
                {/* Placeholder para evitar diferença no DOM */}
                <li></li>
                <li></li>
                <li></li>
              </ul>
            )}
          </nav>
        </Container>
      </header>
      {open && <LanguageModal setOpen={setOpen} open={open} />}
    </>
  );
};

export default Header;