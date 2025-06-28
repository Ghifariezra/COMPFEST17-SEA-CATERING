import React from "react";

export interface CardTestimonialProps {
  id: string;
  name: string;
  from: string;
  feedback: string;
  status: string;
  rate: number;
}

export default function CardTestimonial({ name, from, feedback, status, rate }: CardTestimonialProps) {
  // Ambil dua huruf awal nama untuk avatar
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="wrapper-testimonial shadow-md rounded-xl bg-white p-6 flex flex-col gap-4">
      <div className="wrapper-placeholder flex items-center gap-4">
        <div className="initial-placeholder bg-gray-200 text-gray-700 font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl">
          {initials}
        </div>
        <div>
          <div className="name-testimonial font-semibold text-lg">{name}</div>
          <div className="status-testimonial text-gray-500 text-sm">
            {status} &bull; {from}
          </div>
        </div>
      </div>
      <div className="rate-testimonial flex items-center gap-1" aria-label={`Rating: ${rate} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rate ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
          </svg>
        ))}
      </div>
      <p className="feedback-testimonial text-gray-700 italic mt-2">&ldquo;{feedback}&rdquo;</p>
    </div>
  );
}