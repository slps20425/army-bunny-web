import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "WiseCat AI",
        category: "Mission-Driven Voice Agent",
        description: "Advanced AI Voice Technology for automated scheduling and calls. Features real-time LLM validation and mission-critical task execution.",
        image: "/wise_cat.jpg", // Using the provided logo
        link: "https://wise-catty.cc/",
        color: "from-orange-500/20 to-yellow-500/5",
        features: ["AI Voice Tech", "LLM Validation", "Mission-Driven Calls"]
    },
    {
        title: "Stock Monitor",
        category: "Financial Analytics & Sentiment",
        description: "Real-time stock analysis engine combining technical indicators with news sentiment and LLM-powered bundle analysis.",
        image: "/Gemini_Generated_Image_8twcj68twcj68twc.png", // Using the placeholder/generated image for stock monitor
        link: "https://stock-monitor.web.app/",
        color: "from-blue-500/20 to-cyan-500/5",
        features: ["Tech Indicators", "News Sentiment", "LLM Bundle Analysis"]
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 md:px-6 bg-black/30">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Live Projects</h2>
                        <p className="text-gray-400">
                            Deployed solutions making an impact right now.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <Link
                            href={project.link}
                            key={i}
                            target="_blank"
                            className="group relative block rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-70 transition-opacity`} />

                            <div className="relative h-64 md:h-80 overflow-hidden">
                                {/* Image Placeholder - object-cover ensures it fills nicely */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent" />
                            </div>

                            <div className="relative p-8 -mt-20">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium tracking-wider uppercase text-neon-green/80">
                                        {project.category}
                                    </span>
                                    <ExternalLink className="w-5 h-5 text-white opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                                </div>
                                <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                                <p className="text-gray-300 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.features.map((feature, j) => (
                                        <span key={j} className="text-xs font-semibold px-2 py-1 rounded bg-white/10 text-gray-300 border border-white/5">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section >
    );
}
