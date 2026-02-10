import Hero from "@/components/Hero";
import AgentSection from "@/components/AgentSection"; // Import the new component
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Security from "@/components/Security";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-space">
      <Hero />
      <AgentSection />
      <Expertise />
      <Projects />
      <Security />
      <Contact />

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 mt-20">
        <p>&copy; {new Date().getFullYear()} Army Bunny Studio LLC. All rights reserved.</p>
      </footer>
    </main>
  );
}
