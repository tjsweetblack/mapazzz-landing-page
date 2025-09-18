"use client";
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const ComingSoonStores: React.FC = () => {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const content = {
    pt: {
      title: "Em Breve Disponível",
      subtitle: "Baixe nosso app nas principais lojas",
      description: "Estamos trabalhando intensamente para trazer a melhor experiência mobile para você. Em breve nas lojas oficiais!",
      comingSoon: "Em Breve",
      notify: "Receber Notificação",
      placeholder: "Digite seu email",
      submit: "Subscribir",
      close: "Fechar",
      success: "Subscrição realizada com sucesso!"
    },
    en: {
      title: "Coming Soon",
      subtitle: "Download our app from the main stores",
      description: "We're working hard to bring you the best mobile experience. Coming soon to official stores!",
      comingSoon: "Coming Soon",
      notify: "Get Notified",
      placeholder: "Enter your email",
      submit: "Subscribe",
      close: "Close",
      success: "Subscription successful!"
    },
    jp: {
      title: "近日公開",
      subtitle: "主要ストアからアプリをダウンロード",
      description: "最高のモバイル体験をお届けするため、懸命に開発しています。公式ストアで近日公開予定！",
      comingSoon: "近日公開",
      notify: "通知を受け取る",
      placeholder: "メールを入力してください",
      submit: "登録",
      close: "閉じる",
      success: "登録が完了しました！"
    }
  };

  const currentContent = content[language as keyof typeof content] || content.en;

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");

    const formData = new FormData();
    formData.append("entry.367012681", email); // Campo do Google Forms
    formData.append("fvv", "1");
    formData.append("fbzx", "-6208933134785171715"); // pode manter o seu fbzx original

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSegCBCdr2AyT0Fn5cVtbjL3uvWzN4GXvf1bN0gqAuGOygjdKA/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors" // evita o redirecionamento e erro CORS
        }
      );
      setSuccessMessage(currentContent.success);
      setEmail("");
    } catch (error) {
      console.error("Erro ao enviar subscrição:", error);
    }
  };

  return (
    <section className="py-15 bg-red-700 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
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

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-red-500 text-white font-semibold uppercase px-6 py-3 rounded-full hover:bg-red-600 transition"
          >
            {currentContent.notify}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">{currentContent.notify}</h3>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={currentContent.placeholder}
                required
                className="w-full border rounded-md px-4 py-2 mb-4"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
                >
                  {currentContent.close}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 font-bold uppercase rounded bg-red-500 text-white hover:bg-red-600 transition"
                >
                  {currentContent.submit}
                </button>
              </div>
            </form>
            {successMessage && (
              <p className="text-green-600 font-medium mt-4">{successMessage}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ComingSoonStores;
