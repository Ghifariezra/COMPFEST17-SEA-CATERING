import HeroContent from "./components/Hero/HeroContent";
import ServiceContent from "./components/Service/ServiceContent";

export default function Home() {
  return (
    <main className="home-hero">
      <HeroContent />
      <ServiceContent />
    </main>
  );
}
