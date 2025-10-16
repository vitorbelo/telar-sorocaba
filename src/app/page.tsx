import dynamic from 'next/dynamic';
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";

const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Carregando...</div>
});
const Services = dynamic(() => import("@/components/sections/Services"));
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));
const Reviews = dynamic(() => import("@/components/sections/Reviews"));
const InstagramFeed = dynamic(() => import("@/components/sections/InstagramFeed")); // ← NOVO
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Footer = dynamic(() => import("@/components/sections/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Reviews />
      <InstagramFeed /> {/* ← NOVO */}
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}