"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useLanguage } from "@/context/LanguageContext"; // ✅ IMPORT CORRETO

import SectionTitle from "./SectionTitle";
import { faqs } from "./../data/faq";

const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const faq = faqs[language as keyof typeof faqs] || faqs.en;

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
          <a
            href="mailto:info@mapazzz.ao"
            className="mt-3 block text-xl lg:text-4xl text-secondary font-semibold hover:underline text-center lg:text-left"
          >
            info@mapazzz.ao
          </a>
        </div>

        <div className="w-full lg:max-w-2xl mx-auto border-b">
          {faq.map((item, index) => (
            <div key={index} className="mb-7">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t">
                      <span className="text-2xl font-semibold">{item.question}</span>
                      {open ? (
                        <BiMinus className="w-5 h-5 text-secondary" />
                      ) : (
                        <BiPlus className="w-5 h-5 text-secondary" />
                      )}
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
    </section>
  );
};

export default FAQ;
