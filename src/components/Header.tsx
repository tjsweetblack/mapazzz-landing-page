"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "./Container";
import { useLanguage } from "@/context/LanguageContext";
import LanguageModal from "./LanguageModal";
import { menuItems } from "@/data/menuItems";
import { Menu, X } from "lucide-react"; 

const IconLogo: string = "/images/logo_icon.png";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); 
  const { language } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const items = menuItems[language as keyof typeof menuItems] || menuItems.en;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <Container className="px-4 md:px-6">
          <nav className="flex items-center justify-between py-4 md:py-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src={IconLogo} alt="Logo" width={200} height={200} />
              
            </Link>

            {/* Botão do menu mobile */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Menu */}
            {isClient ? (
              <ul className="hidden md:flex items-center space-x-8 uppercase">
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
              <ul className="hidden md:flex items-center space-x-8 uppercase">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            )}
          </nav>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="md:hidden mt-2 bg-white rounded-lg shadow-md p-4 space-y-4 uppercase">
              {items.map((item) => (
                <Link
                  key={item.text}
                  href={item.url}
                  className="block text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.text}
                </Link>
              ))}
              <Link
                href="/docsapi"
                className="block rounded-md bg-red-600 px-4 py-2 text-white font-medium hover:bg-red-700 text-center"
                onClick={() => setMobileOpen(false)}
              >
                {language === "pt"
                  ? "Documentação API"
                  : language === "en"
                  ? "API Docs"
                  : "API ドキュメント"}
              </Link>
              <button
                onClick={() => {
                  setOpen(true);
                  setMobileOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
              >
                🌍 {language.toUpperCase()}
              </button>
            </div>
          )}
        </Container>
      </header>
      {open && <LanguageModal setOpen={setOpen} open={open} />}
    </>
  );
};

export default Header;
