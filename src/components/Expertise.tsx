import { Brain, CreditCard, ShieldCheck, Zap } from "lucide-react";
import clsx from "clsx";

const services = [
    {
        title: "AI Voice Technology",
        description: "Natural, human-like voice interactions powered by state-of-the-art speech synthesis and recognition.",
        icon: Zap,
        className: "md:col-span-2 bg-gradient-to-br from-electric-blue/20 to-deep-space",
    },
    {
        title: "LLM Validation & Safety",
        description: "Rigorous testing and validation frameworks for Large Language Models to ensure accuracy.",
        icon: ShieldCheck,
        className: "md:col-span-1 bg-deep-space border-white/5",
    },
    {
        title: "Mission-Driven AI",
        description: "Autonomous agents that schedule calls, execute tasks, and drive business outcomes.",
        icon: Brain,
        className: "md:col-span-1 bg-deep-space border-white/5",
    },
    {
        title: "Financial Intelligence",
        description: "Deep market insights using Technical Indicators, News Sentiment, and LLM Bundle Analysis.",
        icon: CreditCard,
        className: "md:col-span-2 bg-gradient-to-tl from-neon-green/10 to-deep-space",
    },
];

export default function Expertise() {
    return (
        <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
            <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Expertise</h2>
                <p className="text-gray-400 max-w-2xl">
                    We combine cutting-edge AI with rock-solid financial engineering.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, i) => (
                    <div
                        key={i}
                        className={clsx(
                            "p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 group",
                            service.className
                        )}
                    >
                        <div className="mb-6 inline-block p-3 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
                            <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
