'use client';

import React from 'react';
import Image from 'next/image';
import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';
import { heroDetails } from '@/data/hero';
import { useLanguage } from '@/context/LanguageContext';
 
const Hero: React.FC = () => {
  const { language } = useLanguage();
  const details = heroDetails[language as keyof typeof heroDetails];

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      {/* Background grid with radial gradient mask */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gray-50 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_50%,transparent_100%)]" />
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-100/50 backdrop-blur-sm" />

      {/* Content container */}
      <div className="text-center max-w-3xl mx-auto">
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight"
        >
          {details.heading}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
          {details.subheading}
        </p>
        
        <Image
          src={details.centerImageSrc}
          width={384}
          height={340}
          quality={90}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 384px"
          priority
          alt="Application mockup showcasing the app interface"
          className="relative mt-12 md:mt-16 mx-auto z-10 max-w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
