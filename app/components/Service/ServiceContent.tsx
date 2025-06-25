import CardService, { CardServiceProps } from "./CardService";

const contentService: CardServiceProps[] = [
  {
    title: "Meal Customization",
    description: "Personalize your meal plans based on dietary preferences, allergies, and nutritional goals. Choose from various cuisines and portion sizes.",
  },
  {
    title: "Delivery to Major Cities",
    description: "We deliver fresh, healthy meals across Indonesia's major cities with reliable and timely service you can count on.",
  },
  {
    title: "Detailed Nutritional Information",
    description: "Get comprehensive nutritional breakdowns for every meal, helping you make informed choices about your health and wellness.",
  },
  {
    title: "Professional Platform",
    description: "Experience our user-friendly web and mobile application designed to make meal planning and ordering seamless and enjoyable.",
  },
  {
    title: "Quality Assurance",
    description: "We maintain the highest standards of food quality and safety, ensuring every meal meets our strict quality guidelines.",
  },
  {
    title: "Trusted Service",
    description: "Join thousands of satisfied customers who trust SEA Catering for their daily nutrition needs across Indonesia.",
  },
];

export default function ServiceContent() {
    return (
        <section className="wrapper-hero bg-gray-100">
            <div className="wrapper-service">
                <h1 className="heading-service">Our Services</h1>
                <p className="description-service">
                    We offer a variety of services to cater to your needs, including meal planning, catering, and personalized nutrition advice.
                </p>
            </div>
            <div className="wrapper-cards-service">
                {contentService.map((content) => (
                    <CardService key={content.title} {...content} />
                ))}
            </div>
        </section>
    );
}
