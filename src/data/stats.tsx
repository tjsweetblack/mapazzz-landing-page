import { BsBarChartFill, BsFillClipboard2PulseFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: Record<"pt" | "en" | "jp", IStats[]> = {
  pt: [
    {
      title: "200M+",
      icon: <BsBarChartFill size={34} className="text-blue-500" />,
      description:
        "219 milhões de casos foram registrados em 2019, de acordo com a Organização Mundial da Saúde (OMS).",
    },
    {
      title: "435mil",
      icon: <BsFillClipboard2PulseFill size={34} className="text-yellow-500" />,
      description:
        "435 mil pessoas morrem todos os anos por causa da malária. Essas mortes são, em sua maioria.",
    },
    {
      title: "90%",
      icon: <PiGlobeFill size={34} className="text-green-600" />,
      description:
        "A maior parte das vítimas são crianças pequenas, evidenciando a urgência de ações de prevenção.",
    },
  ],

  en: [
    {
      title: "200M+",
      icon: <BsBarChartFill size={34} className="text-blue-500" />,
      description:
        "219 million cases were reported in 2019, according to the World Health Organization (WHO).",
    },
    {
      title: "435k",
      icon: <BsFillClipboard2PulseFill size={34} className="text-yellow-500" />,
      description:
        "435,000 people die every year from malaria, the majority being children under 5.",
    },
    {
      title: "90%",
      icon: <PiGlobeFill size={34} className="text-green-600" />,
      description:
        "Most victims are young children, highlighting the urgent need for preventive action.",
    },
  ],

  jp: [
    {
      title: "2億件+",
      icon: <BsBarChartFill size={34} className="text-blue-500" />,
      description:
        "2019年には2億1900万件の症例が世界保健機関（WHO）によって報告されました。",
    },
    {
      title: "43.5万",
      icon: <BsFillClipboard2PulseFill size={34} className="text-yellow-500" />,
      description:
        "毎年43万5千人がマラリアで亡くなっており、その多くは5歳未満の子供です。",
    },
    {
      title: "90%",
      icon: <PiGlobeFill size={34} className="text-green-600" />,
      description:
        "犠牲者の大半は幼い子供であり、予防対策の緊急性を示しています。",
    },
  ],
};
