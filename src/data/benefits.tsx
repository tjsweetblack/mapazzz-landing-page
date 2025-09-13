import { FiBarChart2, FiBriefcase, FiDollarSign, FiPieChart, FiTarget, FiTrendingUp } from "react-icons/fi";
import { IBenefit } from "@/types";

export const benefits: Record<"pt" | "en" | "jp", IBenefit[]> = {
  pt: [
    {
      title: "Juntos Contra a Malária",
      description: "A malária ainda é uma ameaça real, mas você pode fazer a diferença! Com o MapaZZZ, transformar sua comunidade em um espaço mais seguro está ao alcance das suas mãos.",
      bullets: [
        {
          title: "Reporte de Zonas de Risco",
          description: "Os usuários podem denunciar locais com risco de malária, como água parada e lixo acumulado.",
          icon: <FiBarChart2 size={26} />
        },
        {
          title: "Notificações Inteligentes",
          description: "Envia alertas em tempo real para avisar sobre novos focos de risco próximos ou áreas com surto ativo.",
          icon: <FiTarget size={26} />
        },
        {
          title: "Sistema de Pontuação e Gamificação",
          description: "Os pontos podem ser trocados por medalhas e benefícios.",
          icon: <FiTrendingUp size={26} />
        }
      ],
      imageSrc: "/images/mockup-1.png"
    }
  ],

  en: [
    {
      title: "Together Against Malaria",
      description: "Malaria is still a real threat, but you can make a difference! With MapaZZZ, making your community safer is within your reach.",
      bullets: [
        {
          title: "Report Risk Zones",
          description: "Users can report places with malaria risk, such as standing water and garbage accumulation.",
          icon: <FiBarChart2 size={26} />
        },
        {
          title: "Smart Notifications",
          description: "Sends real-time alerts about new risk spots near the user or active outbreak areas.",
          icon: <FiTarget size={26} />
        },
        {
          title: "Scoring & Gamification System",
          description: "Points can be exchanged for medals and benefits.",
          icon: <FiTrendingUp size={26} />
        }
      ],
      imageSrc: "/images/mockup-1.png"
    }
  ],

  jp: [
    {
      title: "マラリアと共に戦う",
      description: "マラリアは依然として現実の脅威ですが、あなたの行動で変化を起こせます！MapaZZZで地域をより安全にしましょう。",
      bullets: [
        {
          title: "リスク地域の報告",
          description: "ユーザーは、たまった水やゴミなど、マラリアのリスクがある場所を報告できます。",
          icon: <FiBarChart2 size={26} />
        },
        {
          title: "スマート通知",
          description: "リアルタイムで新しいリスクスポットや発生中の流行地域を警告します。",
          icon: <FiTarget size={26} />
        },
        {
          title: "スコアリングとゲーミフィケーション",
          description: "ポイントはメダルや特典に交換できます。",
          icon: <FiTrendingUp size={26} />
        }
      ],
      imageSrc: "/images/mockup-1.png"
    }
  ]
};
