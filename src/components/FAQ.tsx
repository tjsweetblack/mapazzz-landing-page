"use client";

import { Disclosure, DisclosureButton, DisclosurePanel, Dialog } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

import SectionTitle from "./SectionTitle";
import { faqs } from "./../data/faq";
import { SendHorizontal, ShieldQuestionMark } from "lucide-react";

const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const faq = faqs[language as keyof typeof faqs] || faqs.en;

 
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");

const handleSubmit = async () => {
  if (!email || !question) {
    alert("Preencha todos os campos!");
    return;
  }

  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSdX_C1E_SkPyoPcFO44EWdMFuf12hijHW5AhE0iNhF0bTPc5g/formResponse";

  const formData = new FormData();
  formData.append("entry.1490734690", email);    // Email
  formData.append("entry.453478170", question);  // Pergunta

  try {
    await fetch(formUrl, {
      method: "POST",
      body: formData,
      mode: "no-cors", // necessário para Google Forms
    });

    alert("Pergunta enviada com sucesso!");
    setEmail("");
    setQuestion("");
    setIsOpen(false);
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    alert("Erro ao enviar a pergunta. Tente novamente.");
  }
};

  return (
    <section id="faq" className="py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <div>
          <SectionTitle>
            <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left">
              {language === "pt"
                ? "Perguntas frequentes"
                : language === "en"
                ? "Frequently Asked Questions"
                : "よくある質問"}
            </h2>
          </SectionTitle>
          <p className="lg:mt-10 text-foreground-accent text-center lg:text-left">
            {language === "pt"
              ? "Pergunte-nos qualquer coisa!"
              : language === "en"
              ? "Ask us anything!"
              : "何でもお尋ねください！"}
          </p>

          <div className="mt-6 flex justify-center lg:justify-start">
            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-3 bg-red-600 flex gap-3 font-semibold text-white rounded-lg hover:bg-red-700 transition"
            >
              {language === "pt"
                ? "Fazer pergunta"
                : language === "en"
                ? "Ask a question"
                : "質問する"} <ShieldQuestionMark />
            </button>
          </div>
        </div>

        <div className="w-full lg:max-w-2xl mx-auto border-b">
          {faq.map((item, index) => (
            <div key={index} className="mb-7">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t">
                      <span className="text-2xl font-semibold">{item.question}</span>
                      {open ? <BiMinus className="w-5 h-5 text-secondary" /> : <BiPlus className="w-5 h-5 text-secondary" />}
                    </DisclosureButton>
                    <DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent">
                      {item.answer}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-lg w-full rounded-lg bg-white p-6 shadow-lg">
            <Dialog.Title className="text-lg font-bold mb-4">
              {language === "pt"
                ? "Envie sua pergunta"
                : language === "en"
                ? "Submit your question"
                : "質問を送信"}
            </Dialog.Title>

            {/* Campo de email */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={language === "pt" ? "Digite seu email..." : language === "en" ? "Enter your email..." : "メールを入力してください..."}
              className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {/* Campo de pergunta */}
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows={4}
              placeholder={language === "pt"
                ? "Digite sua pergunta aqui..."
                : language === "en"
                ? "Type your question here..."
                : "ここに質問を入力してください..."}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
              >
                {language === "pt" ? "Cancelar" : language === "en" ? "Cancel" : "キャンセル"}
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 flex gap-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                {language === "pt" ? "Enviar" : language === "en" ? "Send" : "送信"} <SendHorizontal />
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
};

export default FAQ;
