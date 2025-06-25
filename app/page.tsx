import {
  Heading,
  Description,
  ActionButtons,
} from "./components/Hero/HeroContent";

export default function Home() {
  return (
    <main className="home-hero">
      <div className="wrapper-hero">
        <Heading />
        <Description />
        <ActionButtons />
      </div>
    </main>
  );
}
