"use client";
import { useEffect, useState } from "react";
import CardTestimonial, { CardTestimonialProps } from "./CardTesti";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function TestimoniContent() {
  const [testimonials, setTestimonials] = useState<CardTestimonialProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/api/testimonials");
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        if (data.success) {
          setTestimonials(
            data.data.map((t: any) => ({
              id: t.id, // gunakan id untuk key
              name: t.name,
              from: t.from,
              feedback: t.feedback,
              status: t.status,
              rate: t.rate,
            }))
          );
        } else {
          setError("Failed to fetch testimonials");
        }
      } catch (err: any) {
        setError(err?.message || "Failed to fetch testimonials");
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section className="wrapper-hero bg-white">
      <div className="wrapper-service">
        <h1 className="heading-service">What Our Customers Say</h1>
        <p className="description-service">Join thousands of satisfied customers who have transformed their lives with SEA Catering&apos;s healthy meal plans. Real stories from real people across Indonesia.</p>
      </div>
      <div className="wrapper-cards-service flex w-full">
        {loading && <div className="text-center py-8">Loading testimonials...</div>}
        {error && <div className="text-center text-red-500 py-8">{error}</div>}
        {!loading && !error && testimonials.length === 0 && <div className="text-center py-8">No testimonials found.</div>}
        {!loading && !error && testimonials.length > 0 && (
          <div className="testimonials-carousel">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ padding: "2rem 0" }}
          >
            {testimonials.map((content) => (
              <SwiperSlide key={content.id}>
                <div className="max-w-md mx-auto h-full flex items-center">
                  <CardTestimonial {...content} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        )}
      </div>
    </section>
  );
}
