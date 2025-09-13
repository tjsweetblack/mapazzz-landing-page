"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Flag from "react-world-flags";

interface LanguageModalProps {
  setOpen: (open: boolean) => void;
  open: boolean; // Nova prop para controlar visibilidade
}

const LanguageModal: React.FC<LanguageModalProps> = ({ setOpen, open }) => {
  const { setLanguage } = useLanguage();

  const handleSelect = (lang: "pt" | "en" | "jp") => {
    setLanguage(lang);
    setOpen(false); // Fecha a modal ao selecionar
  };

  // Se open for false, não renderize nada
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Escolha o idioma
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Choose language / 言語を選択
        </p>
        
        <div className="space-y-3">
          <button
            className="w-full flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            onClick={() => handleSelect("pt")}
          >
            <span className="text-2xl"><Flag code="AO" style={{ width: "50px", height: "auto" }} alt="Angola" /></span>
            <span className="font-semibold text-lg">Português</span>
          </button>
          
          <button
            className="w-full flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            onClick={() => handleSelect("en")}
          >
            <span className="text-2xl"><Flag code="GB" style={{ width: "50px", height: "auto" }} alt="United Kingdom" /></span>
            <span className="font-semibold text-lg">English</span>
          </button>
          
          <button
            className="w-full flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-red-600 to-white hover:from-red-700 hover:to-gray-100 text-white hover:text-white border-2 border-red-200 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            onClick={() => handleSelect("jp")}
          >
            <span className="text-2xl"><Flag code="JP" style={{ width: "50px", height: "auto" }} alt="Japan" /></span>
            <span className="font-semibold text-lg">日本語</span>
          </button>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Você pode alterar o idioma a qualquer momento
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;