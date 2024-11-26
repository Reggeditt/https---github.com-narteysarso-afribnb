import Image from "next/image";
import HeroSection from "./Hero";
import FeaturesSection from "./Features";
import WhyAfriCoin from "./Why";
import RoadmapSection from "./Roadmap";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      {/* <section className="relative z-10"> 
        <div className="why-afribnb absolute w-full min-h-screen" />
        <p className="backdrop-blur-sm w-full min-h-screen">
          
        </p>
      </section> */}
      <WhyAfriCoin />
      <RoadmapSection />
    </main>
  );
}
