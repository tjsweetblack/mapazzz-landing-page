import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "O MapaZZZ é um aplicativo móvel desenvolvido para monitoramento e prevenção da malária em tempo real.",
    quickLinks: [ 
        {
            text: "Documentação",
            url: "#"
        },
        {
            text: "API",
            url: "#"
        }
    ],
    email: 'info@mapazz.ao',
    telephone: '+244 999 999 999',
    socials: {
        facebook: 'https://facebook.com', 
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
    }
}