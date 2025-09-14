"use client";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLanguage } from "@/context/LanguageContext";
import { apiDocsTranslations } from "@/data/doc";
import { useState, useEffect } from "react";


export default function ApiDocumentationPage() {
  const { language } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  const t = apiDocsTranslations[language] || apiDocsTranslations.pt;

  useEffect(() => {
    setIsClient(true);
    console.log("Idioma na ApiDocumentationPage:", language);
  }, [language]);

  if (!isClient) {
    return (
      <>
        <Header />
        <Container className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h3 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"></h3>
                <p className="mt-2 text-lg/8 text-gray-600"></p>
              </div>
              <p className="text-lg mb-8"></p>
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
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h3 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                <span className="text-primary">{t.title.split(" ")[0]}</span>{" "}
                {t.title.split(" ").slice(1).join(" ")}
              </h3>
              <p className="mt-2 text-lg/8 text-gray-600">{t.subtitle}</p>
            </div>

            <p className="text-lg mb-8">{t.description}</p>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{t.section1Title}</h2>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                GET https://mapazzz-api.vercel.app/api/reportagens/
              </pre>
              <p className="mb-4">{t.section1Description}</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`Exemplo de resposta:
[
    {
        "id": 1,
        "title": "${t.sampleReportTitle}",
        "description": "${t.sampleReportDescription}",
        "riskLevel": 2,
        "location": "${t.sampleReportLocation}",
        "imageUrl": "https://example.com/image.jpg"
    },
    ...
]`}
              </pre>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{t.section2Title}</h2>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                GET https://mapazzz-api.vercel.app/api/reportagens/zonas
              </pre>
              <p className="mb-4">{t.section2Description}</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`Exemplo de resposta:
[
    {
        "id": 1,
        "zoneName": "${t.sampleZoneName}",
        "riskLevel": 1,
        "description": "${t.sampleZoneDescription}",
        "latitude": "-3.71722",
        "longitude": "-38.5433"
    },
    ...
]`}
              </pre>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{t.section3Title}</h2>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                GET https://mapazzz-api.vercel.app/api/reportagens/buscar/:title
              </pre>
              <p className="mb-4">{t.section3Description}</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`Exemplo de requisição:
GET https://mapazzz-api.vercel.app/api/reportagens/buscar/{:title}

Exemplo de resposta:
{
    "id": 1,
    "title": "${t.sampleReportTitle}",
    "description": "${t.sampleReportDescription}",
    "riskLevel": 2,
    "location": "${t.sampleReportLocation}",
    "imageUrl": "https://example.com/image.jpg"
}`}
              </pre>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{t.notesTitle}</h2>
              <ul className="list-disc pl-6">
                <li className="mb-2">{t.note1}</li>
                <li className="mb-2">{t.note2}</li>
                <li>{t.note3}</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}