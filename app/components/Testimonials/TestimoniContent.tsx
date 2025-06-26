import CardTestimonial, { CardTestimonialProps } from "./CardTesti";

const contentTestimoni: CardTestimonialProps[] = [
  {
    name: "Sarah Dewi",
    from: "Jakarta",
    feedback: "Great service and quality food! The keto plan helped me reach my fitness goals. Delivery is always on time and the packaging keeps everything fresh. Highly recommend for anyone serious about their health.",
    status: "Verified",
    rate: 5,
  },
  {
    name: "Linda Sari",
    from: "Yogya",
    feedback: "SEA Catering made healthy eating enjoyable again! The balanced nutrition plan is perfect for my lifestyle. The customer service is outstanding - they really care about their customers success.",
    status: "Verified",
    rate: 5,
  },
  {
    name: "Nesya Sari",
    from: "Medan",
    feedback: "Great service and quality food! The keto plan helped me reach my fitness goals. Delivery is always on time and the packaging keeps everything fresh. Highly recommend for anyone serious about their health.",
    status: "Verified",
    rate: 4,
  },
  {
    name: "Sarah Dewi",
    from: "Jakarta",
    feedback: "Great service and quality food! The keto plan helped me reach my fitness goals. Delivery is always on time and the packaging keeps everything fresh. Highly recommend for anyone serious about their health.",
    status: "Verified",
    rate: 5,
  },
  {
    name: "Audrey Sari",
    from: "Yogya",
    feedback: "SEA Catering made healthy eating enjoyable again! The balanced nutrition plan is perfect for my lifestyle. The customer service is outstanding - they really care about their customers success.",
    status: "Verified",
    rate: 5,
  },
  {
    name: "David",
    from: "Medan",
    feedback: "Great service and quality food! The keto plan helped me reach my fitness goals. Delivery is always on time and the packaging keeps everything fresh. Highly recommend for anyone serious about their health.",
    status: "Verified",
    rate: 4,
  },
];

export default function TestimoniContent() {
    return (
      <section className="wrapper-hero bg-white">
        <div className="wrapper-service">
          <h1 className="heading-service">What Our Customers Say</h1>
          <p className="description-service">Join thousands of satisfied customers who have transformed their lives with SEA Catering&apos;s healthy meal plans. Real stories from real people across Indonesia.</p>
        </div>
        <div className="wrapper-cards-service">
          {contentTestimoni.map((content, index) => (
            <CardTestimonial key={`${content.name}-${index}`} {...content} />
          ))}
        </div>
      </section>
    );
}
