import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center bg-black text-white">
      <Header />
      <Hero />
      <AboutSection />
    </main>
  );
}
