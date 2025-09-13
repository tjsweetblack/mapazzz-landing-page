import { useLanguage } from "@/context/LanguageContext";
 
import { stats } from "@/data/stats"

const Stats: React.FC = () => { 
      const { language } = useLanguage();
      const statsd = stats[language as keyof typeof stats];
    return (
        <section id="stats" className="py-10 lg:py-20">
            <div className="grid sm:grid-cols-3 gap-8">
                {statsd.map(stat => (
                    <div key={stat.title} className="text-center sm:text-left max-w-md sm:max-w-full mx-auto">
                        <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start">
                            {stat.icon}
                            {stat.title}
                        </h3>
                        <p className="text-foreground-accent">{stat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats