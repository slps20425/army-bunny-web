"use client";

import AgentShowcase from "./AgentShowcase";

export default function AgentSection() {
    return (
        <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[120px] -z-10" />

            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    AI Agents on <span className="text-neon-green">Duty</span>.
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 font-light">
                    "They don't talk. They do the job."
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm font-mono text-electric-blue/80 uppercase tracking-widest">
                    <span>Calls Made</span>
                    <span className="text-white/20">•</span>
                    <span>Data Analyzed</span>
                    <span className="text-white/20">•</span>
                    <span>Schedule Confirmed</span>
                    <span className="text-white/20">•</span>
                    <span>No Interruption</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* WiseCat Demo Card */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <AgentShowcase
                        agent="wisecat"
                        scenario="reservation"
                        className="h-full relative bg-deep-space/80 border-white/10"
                    />
                </div>

                {/* Bunny Demo Card (Analysis) */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-green/20 to-emerald-500/20 rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <AgentShowcase
                        agent="bunny"
                        scenario="analysis" // Maps to "analysis" in AgentShowcase PROMPT_VISUALS
                        className="h-full relative bg-deep-space/80 border-white/10"
                    />
                </div>
            </div>

            <div className="mt-16 text-center">
                <p className="text-gray-500 text-sm">
                    * Visualizations represent actual agent state logic.
                </p>
            </div>
        </section>
    );
}
