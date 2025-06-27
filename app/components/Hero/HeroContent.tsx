import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Link from "next/link";

const Heading = () => <h1 className="heading">Healthy Meals, Anytime, Anywhere</h1>;

const Description = () => (
  <p className="description">Discover SEA Catering&apos;s customizable healthy meal plans delivered across Indonesia. From a small business to a nationwide sensation, we&apos;re transforming how customers interact with SEA Catering.</p>
);

const ActionButtons = () => (
  <div className="wrapper-buttons">
    <Link href="/get-started" className="hero-button-primary">
      Start Your Journey <ArrowForwardRoundedIcon />
    </Link>
    <Link href="/menu" className="hero-button-secondary">View Menu Plans</Link>
  </div>
);

export default function HeroContent() {
  return (
    <section className="wrapper-hero">
      <div className="wrapper-hero-child">
        <Heading />
        <Description />
        <ActionButtons />
      </div>
    </section>
  );
}
