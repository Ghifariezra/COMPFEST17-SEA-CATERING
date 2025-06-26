import React from "react";

export interface CardTestimonialProps {
  name: string;
  from: string;
  feedback: string;
  status: string;
  rate: number;
  // image?: string;
}

export default function CardTestimonial({ name, from, feedback, status, rate }: CardTestimonialProps) {
  return (
    <div className="wrapper-testimonial">
      <div className="wrapper-placeholder">
        {/* Placeholder for avatar */}
        <div className="initial-placeholder">{name[0]}</div>
        <div>
          <div className="name-testimonial">{name}</div>
          <div className="status-testimonial">
            {status} &bull; {from}
          </div>
        </div>
      </div>
      <div className="rate-testimonial">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className={`w-5 h-5 ${i < rate ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
          </svg>
        ))}
      </div>
      <p className="feedback-testimonial">&ldquo;{feedback}&rdquo;</p>
    </div>
  );
}
