"use client";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLanguage } from "@/context/LanguageContext";
import { privacyPolicyTranslations, PrivacyPolicySection, PrivacyPolicyContent } from "@/data/privacyPolicy";
import React, { useState, useEffect } from "react";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  const t = privacyPolicyTranslations[language as keyof typeof privacyPolicyTranslations] || privacyPolicyTranslations.pt;

  useEffect(() => {
    setIsClient(true);
  }, [language]);

  if (!isClient) {
    return (
      <>
        <Header />
        <Container className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"></h1>
                <p className="mt-2 text-lg text-gray-600"></p>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl lg:mx-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                <span className="text-primary">{t.title.split(" ")[0]}</span>{" "}
                {t.title.split(" ").slice(1).join(" ")}
              </h1>
              <p className="text-lg text-gray-600 mb-8">{t.effectiveDate}</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <p className="text-lg text-gray-700 leading-8">
                    {t.introduction}
                  </p>
                </div>

                {t.sections.map((section: PrivacyPolicySection, index: number) => (
                  <div key={index} className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {section.title}
                    </h2>
                    <div className="space-y-4">
                      {section.content.map((paragraph: PrivacyPolicyContent, pIndex: number) => (
                        <div key={pIndex}>
                          {paragraph.subtitle && (
                            <h3 className="text-xl font-medium text-gray-800 mb-2">
                              {paragraph.subtitle}
                            </h3>
                          )}
                          {typeof paragraph.text === 'string' ? (
                            <p className="text-gray-700 leading-7">
                              {paragraph.text}
                            </p>
                          ) : (
                            <ul className="space-y-2 text-gray-700 list-disc pl-6">
                              {paragraph.text.map((item: string, itemIndex: number) => (
                                <li key={itemIndex} className="leading-7">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="border-t border-gray-200 pt-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {t.contact.title}
                    </h2>
                    <p className="text-gray-700 leading-7">
                      {t.contact.description}
                    </p>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Email:</strong> {t.contact.email}</p>
                      <p><strong>{t.contact.addressLabel}:</strong> {t.contact.address}</p>
                      <p><strong>{t.contact.supportLabel}:</strong> {t.contact.support}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {t.consent.title}
                    </h2>
                    <p className="text-gray-700 leading-7">
                      {t.consent.text}
                    </p>
                    <p className="text-sm text-gray-500">
                      {t.lastUpdated}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}