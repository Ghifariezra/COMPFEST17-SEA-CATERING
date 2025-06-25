export interface CardServiceProps {
  title: string;
  description: string;
  // image: string;
}

export default function CardService({ title, description }: CardServiceProps) {
  return (
    <div className="service-card">
      <h2 className="heading-card">{title}</h2>
      <p className="description-card">{description}</p>
    </div>
  );
}
