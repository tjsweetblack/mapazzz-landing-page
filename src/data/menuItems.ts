import { IMenuItem } from "@/types";

export const menuItems: Record<"pt" | "en" | "jp", IMenuItem[]> = {
  pt: [
    { text: "Página Inicial", url: "/" },
    { text: "Instituições", url: "http://instu.ma-pa-zzz.tech/" }
  ],
  en: [
    { text: "Home", url: "/" },
    { text: "Institutions", url: "http://instu.ma-pa-zzz.tech/" }
  ],
  jp: [
    { text: "ホーム", url: "/" },
    { text: "機関", url: "http://instu.ma-pa-zzz.tech/" }
  ],
};
