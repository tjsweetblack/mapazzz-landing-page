"use client";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

export const apiDocsTranslations: Record<"pt" | "en" | "jp", Record<string, string>> = {
  pt: {
    title: "Documentação da API",
    subtitle: "Confira os relatos enviados pela comunidade sobre a malária.",
    description:
      "A API do Mapazzz fornece dados sobre reportagens de riscos e zonas de risco. Abaixo estão as rotas disponíveis e exemplos de uso.",
    section1Title: "1. Listar todas as reportagens",
    section1Description: "Retorna uma lista de todas as reportagens cadastradas.",
    section2Title: "2. Listar todas as zonas de risco",
    section2Description: "Retorna uma lista de zonas de risco com informações detalhadas.",
    section3Title: "3. Buscar reportagem por título",
    section3Description: "Retorna uma reportagem específica com base no título fornecido.",
    notesTitle: "Notas",
    note1: "Certifique-se de que os parâmetros enviados nas requisições estão corretos para evitar erros.",
    note2: "A API pode retornar códigos de erro HTTP, como `404` para recursos não encontrados ou `500` para erros internos.",
    note3: "Para mais informações ou suporte, entre em contato com a equipe do Mapazzz.",
    sampleReportTitle: "Reportagem sobre zona de risco",
    sampleReportDescription: "Descrição da reportagem",
    sampleReportLocation: "Localização da reportagem",
    sampleZoneName: "Zona Norte",
    sampleZoneDescription: "Zona de baixo risco",
  },
  en: {
    title: "API Documentation",
    subtitle: "Check out the reports submitted by the community about malaria.",
    description:
      "The Mapazzz API provides data on risk reports and risk zones. Below are the available routes and usage examples.",
    section1Title: "1. List all reports",
    section1Description: "Returns a list of all registered reports.",
    section2Title: "2. List all risk zones",
    section2Description: "Returns a list of risk zones with detailed information.",
    section3Title: "3. Search report by title",
    section3Description: "Returns a specific report based on the provided title.",
    notesTitle: "Notes",
    note1: "Ensure that the parameters sent in the requests are correct to avoid errors.",
    note2: "The API may return HTTP error codes, such as `404` for resources not found or `500` for internal errors.",
    note3: "For more information or support, contact the Mapazzz team.",
    sampleReportTitle: "Report on risk zone",
    sampleReportDescription: "Report description",
    sampleReportLocation: "Report location",
    sampleZoneName: "North Zone",
    sampleZoneDescription: "Low-risk zone",
  },
  jp: {
    title: "APIドキュメント",
    subtitle: "コミュニティから提出されたマラリアに関する報告を確認してください。",
    description:
      "Mapazzz APIは、リスク報告とリスクゾーンに関するデータを提供します。以下に利用可能なルートと使用例を示します。",
    section1Title: "1. すべての報告をリストする",
    section1Description: "登録されているすべての報告のリストを返します。",
    section2Title: "2. すべてのリスクゾーンをリストする",
    section2Description: "詳細情報付きのリスクゾーンのリストを返します。",
    section3Title: "3. タイトルで報告を検索する",
    section3Description: "指定されたタイトルに基づいて特定の報告を返します。",
    notesTitle: "注意事項",
    note1: "リクエストで送信されるパラメータが正しいことを確認して、エラーを回避してください。",
    note2: "APIは、リソースが見つからない場合は`404`、内部エラーの場合は`500`などのHTTPエラーコードを返すことがあります。",
    note3: "詳細情報またはサポートについては、Mapazzzチームにお問い合わせください。",
    sampleReportTitle: "リスクゾーンに関する報告",
    sampleReportDescription: "報告の説明",
    sampleReportLocation: "報告の場所",
    sampleZoneName: "北ゾーン",
    sampleZoneDescription: "低リスクゾーン",
  },
};

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