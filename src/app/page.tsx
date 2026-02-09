import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Security from "@/components/Security";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-space">
      <Hero />
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
