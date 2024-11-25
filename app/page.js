import Image from "next/image";
import HeroSection from "./Hero";
import FeaturesSection from "./Features";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
