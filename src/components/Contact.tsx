"use client";

import { Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4 md:px-6 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start a Mission</h2>
            <p className="text-gray-400 mb-12">
                Ready to build the future? Send a signal to Army Bunny Studio.
            </p>

            <form className="space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green/50 transition-colors"
                            placeholder="Commander Shepard"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green/50 transition-colors"
                            placeholder="shepard@alliance.nav"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-400">Mission Brief</label>
                    <textarea
                        id="message"
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green/50 transition-colors resize-none"
                        placeholder="We need an AI agent to managing our logistics..."
                    />
                </div>

                <button
                    type="button" // Change to submit when connected to backend
                    className="w-full md:w-auto px-8 py-4 bg-neon-green text-deep-space font-bold rounded-xl hover:bg-neon-green/90 transition-all flex items-center justify-center gap-2 mx-auto mt-8 group"
                >
                    <span>Transmit Signal</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
            </form>
        </section>
    );
}
