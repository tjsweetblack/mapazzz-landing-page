import { FiBarChart2, FiBriefcase, FiDollarSign, FiPieChart, FiTarget, FiTrendingUp } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
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
                description: "Envia alertas em tempo real para avisar sobre:Novos focos de risco próximos ao usuário,Áreas com surto ativo.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Sistema de Pontuação e Gamificação",
                description: "Os pontos podem ser trocados por medalhas e benefícios",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.png"
    },
    {
        title: "Tecnologia a favor da saúde pública",
        description: "O MapaZZZ combina geolocalização, inteligência coletiva e dados em tempo real para prevenir surtos de malária.",
        bullets: [
            {
                title: "Acesso gratuito",
                description: "O MapaZZZ é totalmente gratuito para todos os usuários. Qualquer pessoa pode baixar o app.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Notificações inteligentes",
                description: "Receba alertas em tempo real baseados na sua localização. Seja avisado quando houver risco próximo.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: " Dados confiáveis para governos e ONGs",
                description: "As informações coletadas pela comunidade são organizadas e disponibilizadas através de uma API restrita para instituições de saúde.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.png"
    },
]