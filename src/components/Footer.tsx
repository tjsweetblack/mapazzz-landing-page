"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-primary text-foreground py-10">
       
      {/* Copyright */}
      <div className="mt-5 text-center text-foreground-accent px-6">
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
