import { BsBarChartFill, BsFillClipboard2PulseFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "200M+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "219 milhões de casos foram registrados em 2019, de acordo com a Organização Mundial da Saúde (OMS)."
    },
    {
        title: "435mil",
        icon: <BsFillClipboard2PulseFill size={34} className="text-yellow-500" />,
        description: "435 mil pessoas morrem todos os anos por causa da malária. Essas mortes são, em sua maioria"
    },
    {
        title: "90% ",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "A maior parte das vítimas são crianças pequenas, evidenciando a urgência de ações de prevenção."
    }
];