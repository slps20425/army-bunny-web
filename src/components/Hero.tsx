"use client";

import { motion } from "framer-motion";
import Scene3D from "@/components/Scene3D";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-deep-space">
            <Scene3D />

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    {/* Logo Placeholder - in a real scenario we'd use the provided image paths */}
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-electric-blue to-neon-green p-[2px] mb-6 mx-auto shadow-lg shadow-cyan-500/20">
                        <div className="w-full h-full rounded-full bg-deep-space flex items-center justify-center overflow-hidden">
                            <Image
                                src="/ArmyBunny_Logo.png"
                                alt="Army Bunny Logo"
                                width={128}
                                height={128}
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-7xl font-bold tracking-tighter mb-4"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue via-bright-cyan to-neon-green">
                        ARMY BUNNY STUDIO
                    </span>
                    <span className="block text-2xl md:text-3xl mt-2 text-white/80 font-normal">
                        LLC
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-[600px] text-gray-400 text-lg md:text-xl mb-8 leading-relaxed"
                >
                    Navigating the digital frontier with <span className="text-neon-green">Visionary</span> thinking.
                    We build high-performance AI agents and financial systems that defy expectations.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-3 rounded-full bg-cyan-500/5 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-electric-blue/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative flex items-center gap-2 font-medium">
                            Explore Our Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>

                    <a
                        href="#contact"
                        className="group relative px-8 py-3 rounded-full bg-neon-green/10 backdrop-blur-sm border border-neon-green/20 hover:bg-neon-green/20 transition-all duration-300 neon-glow-green"
                    >
                        <span className="relative flex items-center gap-2 font-medium text-neon-green shadow-neon-green">
                            Start a Project
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
