import { IFAQ } from "@/types";

export const faqs: IFAQ[] = [
    {
        question: `O MapazZZ é seguro?`,
        answer: 'O MapaZZZ é um aplicativo móvel desenvolvido para monitoramento e prevenção da malária em tempo real. Ele utiliza dados georreferenciados e inteligência colaborativa para alertar sobre focos de risco e auxiliar no combate à doença.',
    },
    {
        question: `Como funciona o mapa de calor?`,
        answer: "O mapa de calor mostra áreas com diferentes níveis de risco de malária, variando entre:Baixo risco (Vermelho claro) – Poucos relatos, apenas vigilância passiva.Médio risco (Vermelho médio) – Relatos frequentes, necessidade de controle preventivo.Alto risco (Vermelho escuro) – Casos confirmados, necessidade de ação emergencial.Muito alto risco (Vermelho muito escuro) – Surto ativo, controle intensivo necessário.",
    },
    {
        question: 'Como posso reportar um foco de risco?',
        answer: `Para relatar um foco de risco, basta acessar o formulário no app e fornecer:

Tipo de risco (ex.: água parada, lixo acumulado)

Foto com geolocalização

Descrição opcional

Se houver um relatório recente na mesma área, você pode confirmar o risco ou indicar que foi resolvido.`
    },
    {
        question: 'Como funciona o sistema de pontuação?',
        answer: `Você ganha pontos ao interagir no aplicativo:

10 pontos – Ao enviar um reporte.

30 pontos – Quando seu reporte é validado por outros usuários.

100 pontos – Quando um risco é eliminado e comprovado.

Esses pontos podem ser trocados por medalhas e benefícios, como cupons de parceiros.`,
    }
];