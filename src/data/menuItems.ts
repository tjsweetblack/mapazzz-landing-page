import { IMenuItem } from "@/types";

export const menuItems: Record<"pt" | "en" | "jp", IMenuItem[]> = {
  pt: [
    { text: "Página Inicial", url: "/" },
    { text: "Instituições", url: "https://burger-order-screen.vercel.app/" }
  ],
  en: [
    { text: "Home", url: "/" },
    { text: "Institutions", url: "https://burger-order-screen.vercel.app/" }
  ],
  jp: [
    { text: "ホーム", url: "/" },
    { text: "機関", url: "https://burger-order-screen.vercel.app/" }
  ],
};
