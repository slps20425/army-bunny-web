"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Mission Proposal from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:hanklee0506@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="py-24 px-4 md:px-6 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start a Mission</h2>
            <p className="text-gray-400 mb-12">
                Ready to build the future? Send a signal to Army Bunny Studio.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green/50 transition-colors"
                            placeholder="Commander Shepard"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green/50 transition-colors resize-none"
                        placeholder="We need an AI agent to managing our logistics..."
                    />
                </div>

                <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-neon-green text-deep-space font-bold rounded-xl hover:bg-neon-green/90 transition-all flex items-center justify-center gap-2 mx-auto mt-8 group"
                >
                    <span>Transmit Signal</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
            </form>
        </section>
    );
}
