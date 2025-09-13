import { useLanguage } from "@/context/LanguageContext";
import BenefitSection from "./BenefitSection";
import { benefits } from "@/data/benefits";

const Benefits: React.FC = () => {
  const { language } = useLanguage();
  const items = benefits[language as keyof typeof benefits] || benefits.en;

  return (
    <div id="features">
      <h2 className="sr-only">Features</h2>
      {items.map((item, index) => (
        <BenefitSection
          key={index}
          benefit={item}
          imageAtRight={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default Benefits;
