import { IFAQ } from "@/types";

export const faqs: Record<"pt" | "en" | "jp", IFAQ[]> = {
  pt: [
    {
      question: "O MapazZZ é seguro?",
      answer: "O MapaZZZ é um aplicativo móvel desenvolvido para monitoramento e prevenção da malária em tempo real. Ele utiliza dados georreferenciados e inteligência colaborativa para alertar sobre focos de risco e auxiliar no combate à doença."
    },
    {
      question: "Como funciona o mapa de calor?",
      answer: "O mapa de calor mostra áreas com diferentes níveis de risco de malária, variando entre:\nBaixo risco (Vermelho claro) – Poucos relatos, apenas vigilância passiva.\nMédio risco (Vermelho médio) – Relatos frequentes, necessidade de controle preventivo.\nAlto risco (Vermelho escuro) – Casos confirmados, necessidade de ação emergencial.\nMuito alto risco (Vermelho muito escuro) – Surto ativo, controle intensivo necessário."
    },
    {
      question: "Como posso reportar um foco de risco?",
      answer: "Para relatar um foco de risco, basta acessar o formulário no app e fornecer:\n- Tipo de risco (ex.: água parada, lixo acumulado)\n- Foto com geolocalização\n- Descrição opcional\nSe houver um relatório recente na mesma área, você pode confirmar o risco ou indicar que foi resolvido."
    },
    {
      question: "Como funciona o sistema de pontuação?",
      answer: "Você ganha pontos ao interagir no aplicativo:\n- 10 pontos – Ao enviar um reporte.\n- 30 pontos – Quando seu reporte é validado por outros usuários.\n- 100 pontos – Quando um risco é eliminado e comprovado.\nEsses pontos podem ser trocados por medalhas e benefícios, como cupons de parceiros."
    }
  ],

  en: [
    {
      question: "Is MapaZZZ safe?",
      answer: "MapaZZZ is a mobile app designed for real-time monitoring and prevention of malaria. It uses georeferenced data and collaborative intelligence to alert about risk hotspots and help combat the disease."
    },
    {
      question: "How does the heatmap work?",
      answer: "The heatmap shows areas with different malaria risk levels:\nLow risk (light red) – Few reports, passive monitoring only.\nMedium risk (medium red) – Frequent reports, need for preventive control.\nHigh risk (dark red) – Confirmed cases, need for emergency action.\nVery high risk (very dark red) – Active outbreak, intensive control needed."
    },
    {
      question: "How can I report a risk hotspot?",
      answer: "To report a risk hotspot, access the form in the app and provide:\n- Type of risk (e.g., standing water, accumulated garbage)\n- Photo with geolocation\n- Optional description\nIf there is a recent report in the same area, you can confirm the risk or indicate that it has been resolved."
    },
    {
      question: "How does the scoring system work?",
      answer: "You earn points by interacting with the app:\n- 10 points – When submitting a report.\n- 30 points – When your report is validated by other users.\n- 100 points – When a risk is eliminated and verified.\nThese points can be exchanged for medals and benefits, such as partner coupons."
    }
  ],

  jp: [
    {
      question: "MapaZZZは安全ですか？",
      answer: "MapaZZZは、マラリアのリアルタイム監視と予防のために開発されたモバイルアプリです。位置情報データと協力的なインテリジェンスを使用して、リスクのある場所を警告し、病気の対策を支援します。"
    },
    {
      question: "ヒートマップはどのように機能しますか？",
      answer: "ヒートマップはマラリアリスクの異なるレベルを示します：\n低リスク（明るい赤）– 報告が少なく、受動的な監視のみ。\n中リスク（中赤）– 頻繁な報告、予防的な管理が必要。\n高リスク（濃い赤）– 確認された症例、緊急対応が必要。\n非常に高リスク（非常に濃い赤）– 活発な発生、集中的な管理が必要。"
    },
    {
      question: "リスクスポットを報告するには？",
      answer: "リスクスポットを報告するには、アプリ内のフォームにアクセスして以下を提供します：\n- リスクの種類（例：水たまり、ゴミの堆積）\n- 位置情報付きの写真\n- 任意の説明\n同じ地域に最近の報告がある場合、リスクを確認するか解決済みであることを示すことができます。"
    },
    {
      question: "スコアシステムはどのように機能しますか？",
      answer: "アプリでの操作に応じてポイントを獲得します：\n- 10ポイント – レポート送信時\n- 30ポイント – 他のユーザーによってレポートが承認された場合\n- 100ポイント – リスクが除去され、確認された場合\nこれらのポイントはメダルやパートナーのクーポンなどの特典と交換できます。"
    }
  ]
};
