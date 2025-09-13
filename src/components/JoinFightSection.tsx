"use client"
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const JoinFightSection: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Junte-se a nós na luta contra a malária!",
      subtitle: "Juntos, podemos fazer a diferença",
      description: "A malária ainda afeta milhões de pessoas ao redor do mundo. Com sua ajuda, podemos criar tecnologias inovadoras para prevenção, diagnóstico precoce e tratamento eficaz.",
      stats: {
        affected: "247 milhões",
        affectedLabel: "pessoas afetadas anualmente",
        deaths: "619 mil",
        deathsLabel: "mortes em 2021",
        children: "77%",
        childrenLabel: "das mortes são crianças"
      },
      cta: "Fazer Parte da Solução",
      mission: "Nossa missão é utilizar tecnologia para salvar vidas"
    },
    en: {
      title: "Join us in the fight against malaria!",
      subtitle: "Together, we can make a difference",
      description: "Malaria still affects millions of people around the world. With your help, we can create innovative technologies for prevention, early diagnosis and effective treatment.",
      stats: {
        affected: "247 million",
        affectedLabel: "people affected annually",
        deaths: "619 thousand",
        deathsLabel: "deaths in 2021",
        children: "77%",
        childrenLabel: "of deaths are children"
      },
      cta: "Be Part of the Solution",
      mission: "Our mission is to use technology to save lives"
    },
    jp: {
      title: "マラリアとの戦いに参加しましょう！",
      subtitle: "一緒に変化を起こしましょう",
      description: "マラリアは今でも世界中の何百万人もの人々に影響を与えています。あなたの助けがあれば、予防、早期診断、効果的な治療のための革新的な技術を作ることができます。",
      stats: {
        affected: "2億4700万人",
        affectedLabel: "年間感染者数",
        deaths: "61万9千人",
        deathsLabel: "2021年の死者数",
        children: "77%",
        childrenLabel: "の死者が子供"
      },
      cta: "解決策の一部になる",
      mission: "私たちの使命は技術を使って命を救うことです"
    }
  };
 
  const currentContent = content[language as keyof typeof content] || content.en;

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="lg:pr-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium mb-6">
              <span className="text-lg"> </span>
              <span>{currentContent.mission}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {currentContent.title}
            </h2>
            
            <p className="text-xl text-red-600 font-medium mb-6">
              {currentContent.subtitle}
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {currentContent.description}
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-white/70 rounded-xl border border-red-100 shadow-sm">
                <div className="text-2xl font-bold text-red-600 mb-1">{currentContent.stats.affected}</div>
                <div className="text-xs text-gray-600 leading-tight">{currentContent.stats.affectedLabel}</div>
              </div>
              <div className="text-center p-4 bg-white/70 rounded-xl border border-orange-100 shadow-sm">
                <div className="text-2xl font-bold text-red-600 mb-1">{currentContent.stats.deaths}</div>
                <div className="text-xs text-gray-600 leading-tight">{currentContent.stats.deathsLabel}</div>
              </div>
              <div className="text-center p-4 bg-white/70 rounded-xl border border-yellow-100 shadow-sm">
                <div className="text-2xl font-bold text-red-600 mb-1">{currentContent.stats.children}</div>
                <div className="text-xs text-gray-600 leading-tight">{currentContent.stats.childrenLabel}</div>
              </div>
            </div>

          </div>

          {/* Image Side */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-red-100">
                {/* Placeholder for Malaria-related Image */}
                <div className="aspect-square bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Medical/Health Icons */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-8 text-6xl opacity-20">
                      <span>🦟</span>
                      <span>🩺</span>
                      <span>💊</span>
                      <span>🔬</span>
                      <span>❤️</span>
                      <span>🌍</span>
                      <span>👨‍⚕️</span>
                      <span>📱</span>
                      <span>✨</span>
                    </div>
                  </div>
                  
                  {/* Central Icon */}
                  <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-5xl text-white">🛡️</span>
                  </div>
                </div>
                
                {/* Bottom Stats Bar */}
                <div className="mt-6 flex justify-between items-center p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">
                      {language === 'pt' ? 'Prevenção Ativa' : language === 'en' ? 'Active Prevention' : 'アクティブな予防'}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">24/7</div>
                    <div className="text-xs text-gray-600">
                      {language === 'pt' ? 'Monitoramento' : language === 'en' ? 'Monitoring' : 'モニタリング'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg animate-bounce">
              🩺
            </div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg animate-pulse">
              💪
            </div>
            <div className="absolute top-1/2 -right-8 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce delay-500">
              ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinFightSection;