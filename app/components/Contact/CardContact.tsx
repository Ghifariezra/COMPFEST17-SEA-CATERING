import {
  CardContactProps
} from "../../types/Contact";

export default function CardContact({ title, description }: CardContactProps) {
  return (
    <div className="service-card">
      <h2 className="heading-card">{title}</h2>
      <p className="description-card">{description}</p>
    </div>
  );
}
