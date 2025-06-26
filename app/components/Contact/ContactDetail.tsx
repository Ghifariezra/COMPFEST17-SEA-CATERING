import CardContact, { CardContactProps } from "./CardContact";

const contentContact: CardContactProps[] = [
  {
    title: "Phone",
    description: "081234567890",
  },
  {
    title: "Email",
    description: "hello@seacatering.com",
  },
  {
    title: "Management",
    description: "Brian",
  },
  {
    title: "Service Hours",
    description: "24/7",
  },
];

export default function ContactContent() {
    return (
      <section className="wrapper-hero bg-gray-100">
        <div className="wrapper-service">
          <h1 className="heading-service">Contact Details</h1>
          <p className="description-service">Get in touch with our team. We&#39;re here to help you with your meal planning needs and answer any questions you may have.</p>
        </div>
        <div className="wrapper-cards-service">
          {contentContact.map((content) => (
            <CardContact key={content.title} {...content} />
          ))}
        </div>
      </section>
    );
}
