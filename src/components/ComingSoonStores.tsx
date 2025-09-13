"use client"
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const ComingSoonStores: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Em Breve Disponível",
      subtitle: "Baixe nosso app nas principais lojas",
      description: "Estamos trabalhando intensamente para trazer a melhor experiência mobile para você. Em breve nas lojas oficiais!",
      comingSoon: "Em Breve",
      notify: "Receber Notificação"
    },
    en: {
      title: "Coming Soon",
      subtitle: "Download our app from the main stores",
      description: "We're working hard to bring you the best mobile experience. Coming soon to official stores!",
      comingSoon: "Coming Soon",
      notify: "Get Notified"
    },
    jp: {
      title: "近日公開",
      subtitle: "主要ストアからアプリをダウンロード",
      description: "最高のモバイル体験をお届けするため、懸命に開発しています。公式ストアで近日公開予定！",
      comingSoon: "近日公開",
      notify: "通知を受け取る"
    }
  };

  const currentContent = content[language as keyof typeof content] || content.en;

  return (
    <section className="py-15 bg-red-700  relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 mt-8 rounded-full border border-purple-500/30 mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
            <span className="text-purple-200 font-medium">{currentContent.comingSoon}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {currentContent.title}
          </h2>
          
          <p className="text-xl text-white mb-4 max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
          
          <p className="text-white max-w-xl mx-auto mb-12">
            {currentContent.description}
          </p>
        </div>

      </div>
    </section>
  );
};

export default ComingSoonStores;