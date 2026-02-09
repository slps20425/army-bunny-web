import { Shield, Lock, Activity } from "lucide-react";

export default function Security() {
    return (
        <section className="relative py-32 px-4 md:px-6 bg-deep-space overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-electric-blue/5 blur-[100px]" />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 text-neon-green text-xs font-bold tracking-widest uppercase mb-6">
                        <Shield className="w-4 h-4" />
                        Enterprise Security
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Security. <br />
                        Our First Principle.
                    </h2>

                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                        In the world of autonomous agents and financial transactions, trust is the currency.
                        We implement "Defense-in-Depth" protocols — proactive defense mechanisms that secure every layer of your infrastructure.
                    </p>

                    <ul className="space-y-6">
                        {[
                            { text: "Continuous Pentesting & Vulnerability Scanning", icon: Activity },
                            { text: "Zero-Trust Architecture for P2P Marketplaces", icon: Lock },
                            { text: "Real-time Threat Neutralization", icon: Shield },
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4">
                                <div className="p-2 rounded-lg bg-white/5">
                                    <item.icon className="w-5 h-5 text-electric-blue" />
                                </div>
                                <span className="font-medium text-gray-200">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1 w-full max-w-md">
                    <div className="relative aspect-square rounded-3xl bg-gradient-to-tr from-white/10 to-transparent border border-white/10 p-1">
                        <div className="absolute inset-0 bg-deep-space rounded-[22px] m-[1px] flex items-center justify-center">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-electric-blue/20 via-transparent to-transparent opacity-50 animate-pulse-slow" />
                            <Shield className="w-32 h-32 text-white/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-48 h-48 border border-neon-green/30 rounded-full animate-[spin_10s_linear_infinite]" />
                                <div className="absolute w-64 h-64 border border-electric-blue/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
