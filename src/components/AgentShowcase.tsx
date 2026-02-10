"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Image from "next/image";

// ------------------------------------------------------------------
// 1. Define Agent Animation Maps (The Single Source of Truth)
// ------------------------------------------------------------------

const AGENT_ANIMATIONS = {
    wisecat: {
        calling: "/animations/wisecat_calling.json",
        confirming: "/animations/wisecat_confirmed.json",
        checking: "/animations/wisecat_checking.json",
        success: "/animations/wisecat_success.json",
    },
    bunny: {
        calculating: "/animations/bunny_calculating.json",
        charting: "/animations/bunny_charting.json",
        analyzing: "/animations/bunny_analyzing.json",
        success: "/animations/bunny_success.json",
    },
};

// ------------------------------------------------------------------
// 2. Define Prompts Visualization (Micro UI Text)
// ------------------------------------------------------------------

const PROMPT_VISUALS = {
    wisecat: {
        reservation: {
            task: "Reservation call",
            states: {
                calling: "Connecting to restaurant...",
                confirming: "Negotiating time & party size...",
                success: "Table confirmed for 7:00 PM.",
            },
        },
        schedule: {
            task: "Schedule confirmation",
            states: {
                calling: "Dialing client...",
                confirming: "Verifying availability...",
                success: "Meeting locked on calendar.",
            },
        },
    },
    bunny: {
        analysis: {
            task: "Market Analysis",
            states: {
                calculating: "Computing RSI & MACD...",
                analyzing: "Scanning market sentiment...",
                charting: "Generating trend visualization...",
                success: "Analysis complete. Bias: Bullish.",
            },
        },
        report: {
            task: "PDF Report Generation",
            states: {
                calculating: "Structuring data points...",
                analyzing: "Formatting charts & tables...",
                charting: "Rendering final PDF...",
                success: "Report dispatched to email.",
            },
        },
    },
};

type AgentType = "wisecat" | "bunny";
type DemoScenario = "reservation" | "analysis" | "schedule" | "report";

interface AgentShowcaseProps {
    agent: AgentType;
    scenario: DemoScenario;
    className?: string;
}

export default function AgentShowcase({ agent, scenario, className = "" }: AgentShowcaseProps) {
    // Demo State Machine
    const [currentState, setCurrentState] = useState<string>("idle");
    const [animationData, setAnimationData] = useState<any>(null);

    // List of scenarios to rotate through
    const scenarios = agent === "wisecat" ? ["reservation", "schedule"] : ["analysis", "report"];
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
    const scenarioKey = scenarios[currentScenarioIndex];

    // Define the sequence of states for the current agent
    const sequence = agent === "wisecat"
        ? ["calling", "confirming", "success"]
        : ["calculating", "analyzing", "charting", "success"];

    useEffect(() => {
        let step = 0;
        setCurrentState(sequence[0]);

        const interval = setInterval(() => {
            step++;
            if (step < sequence.length) {
                // Next state in the current sequence
                setCurrentState(sequence[step]);
            } else if (step === sequence.length + 2) {
                // Pause complete, move to next scenario
                step = 0;
                setCurrentScenarioIndex((prev) => (prev + 1) % scenarios.length);
                setCurrentState(sequence[0]);
            }
        }, 3000); // 3 seconds per state

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [agent, scenarios.length]); // depend on agent to reset if agent changes


    // Load Lottie JSON based on state
    useEffect(() => {
        const animPath = AGENT_ANIMATIONS[agent][currentState as keyof typeof AGENT_ANIMATIONS[typeof agent]];
        if (animPath) {
            fetch(animPath)
                .then(res => {
                    if (!res.ok) {
                        setAnimationData(null);
                        return;
                    }
                    return res.json();
                })
                .then(data => {
                    if (data) setAnimationData(data);
                })
                .catch(() => {
                    setAnimationData(null);
                });
        }
    }, [agent, currentState]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentPrompt = (PROMPT_VISUALS[agent] as any)[scenarioKey];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const statusText = (currentPrompt?.states as any)?.[currentState] || "Processing...";

    return (
        <div className={`rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm ${className}`}>
            {/* Header: Agent & Workflow Info */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${agent === 'wisecat' ? 'bg-orange-500' : 'bg-neon-green'} animate-pulse`} />
                    <span className="font-mono text-sm uppercase tracking-wider text-gray-400">
                        {agent === 'wisecat' ? 'WiseCat' : 'Bunny'} · On Duty
                    </span>
                </div>
            </div>

            {/* Lottie Animation Display */}
            <div className="relative aspect-video rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center overflow-hidden mb-6">
                {animationData ? (
                    <Lottie
                        animationData={animationData}
                        loop={currentState !== "success"}
                        className="w-full h-full"
                    />
                ) : (
                    <>
                        {/* Logo Fallback with Specific CSS Animations */}
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                            <div className={`relative w-full h-full ${agent === 'wisecat' ? 'animate-pulse-slow' : ''}`}>
                                <Image
                                    src={agent === 'wisecat' ? '/wise_cat.jpg' : '/ArmyBunny_Logo.png'}
                                    alt={`${agent} logo`}
                                    fill
                                    className="object-cover"
                                />

                                {/* Bunny Scanner Effect */}
                                {agent === 'bunny' && (
                                    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none rounded-2xl">
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-neon-green/50 blur-[2px] shadow-[0_0_15px_#22c55e] animate-scan" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent"></div>

                        {/* Status Pulse (Background) */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className={`w-32 h-32 rounded-full border border-white/5 bg-white/5 opacity-20 ${agent === 'wisecat' ? 'animate-ping' : 'animate-pulse'}`} />
                        </div>
                    </>
                )}

                {/* Overlay Label (Visual Language) */}
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-white z-20">
                    {currentState.toUpperCase()}
                </div>
            </div>

            {/* Micro UI Text & Status */}
            <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                    <div className="text-sm font-bold text-white">
                        Task: {currentPrompt.task}
                    </div>
                    {agent === 'bunny' && currentState === 'success' && (
                        <span className="text-neon-green text-xs font-bold">Done</span>
                    )}
                </div>
                <div className="font-mono text-xs text-electric-blue">
                    {">"} {statusText}
                    <span className="animate-pulse">_</span>
                </div>
            </div>
        </div>
    );
}
