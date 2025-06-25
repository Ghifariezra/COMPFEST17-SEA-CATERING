import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const Heading = () => <h1 className="heading">Healthy Meals, Anytime, Anywhere</h1>;

const Description = () => (
  <p className="description">Discover SEA Catering&apos;s customizable healthy meal plans delivered across Indonesia. From a small business to a nationwide sensation, we&apos;re transforming how customers interact with SEA Catering.</p>
);

const ActionButtons = () => (
  <div className="wrapper-buttons">
    <button className="hero-button-primary">
      Start Your Journey <ArrowForwardRoundedIcon />
    </button>
    <button className="hero-button-secondary">View Menu Plans</button>
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
