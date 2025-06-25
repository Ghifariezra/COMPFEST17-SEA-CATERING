import HeroContent from "./components/Hero/HeroContent";
import ServiceContent from "./components/Service/ServiceContent";
import ContactContent from "./components/Contact/ContactDetail";

export default function Home() {
  return (
    <main className="home-hero">
      <HeroContent />
      <ServiceContent />
      <ContactContent />
    </main>
  );
}
