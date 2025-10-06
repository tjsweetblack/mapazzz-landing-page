"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteDetails } from "@/data/siteDetails"; 
import Link from "next/link";

const Footer: React.FC = () => {
  const { language } = useLanguage();

  const footerLinks = {
    pt: {
      privacy: "Política de Privacidade",
      docs: "Documentação da API",
      reports: "Relatórios",
      zones: "Zonas de Risco",
      deleteAccount: "Excluir Conta"
    },
    en: {
      privacy: "Privacy Policy",
      docs: "API Documentation", 
      reports: "Reports",
      zones: "Risk Zones",
      deleteAccount: "Delete Account"
    },
    jp: {
      privacy: "プライバシーポリシー",
      docs: "APIドキュメント",
      reports: "レポート",
      zones: "リスクゾーン",
      deleteAccount: "アカウント削除"
    }
  };

  const links = footerLinks[language] || footerLinks.pt;

  return (
    <footer className="bg-primary text-foreground py-10">
      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex flex-wrap justify-center items-center gap-6 text-white">
          <Link 
            href="/privacy-policy" 
            className="text-sm hover:text-gray-300 transition-colors duration-200"
          >
            {links.privacy}
          </Link>
          <Link 
            href="/docsapi" 
            className="text-sm hover:text-gray-300 transition-colors duration-200"
          >
            {links.docs}
          </Link>
          <Link 
            href="/reports" 
            className="text-sm hover:text-gray-300 transition-colors duration-200"
          >
            {links.reports}
          </Link>
          <Link 
            href="/zonas" 
            className="text-sm hover:text-gray-300 transition-colors duration-200"
          >
            {links.zones}
          </Link>
          <Link 
            href="/delete-account" 
            className="text-sm hover:text-gray-300 transition-colors duration-200"
          >
            {links.deleteAccount}
          </Link>
        </div>
      </div>
       
      {/* Copyright */}
      <div className="mt-5 text-center text-foreground-accent px-6 border-t border-white/20 pt-8">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} {siteDetails.siteName}.{" "}
          {language === "pt"
            ? "Todos os Direitos Reservados."
            : language === "en"
            ? "All Rights Reserved."
            : "全著作権所有。"}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
