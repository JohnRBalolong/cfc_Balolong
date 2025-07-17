'use client'; // wrapper uses scroll-snap CSS and passes index to cards

import testimonials from './data';
import TestimonialCard from './TestimonialCard';

export default function TestimonialSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg">
          Real feedback from happy Rotorua car sellers
        </p>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scroll-smooth snap-x snap-mandatory px-2">
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={i}
            index={i}
            name={t.name}
            text={t.text}
            img={t.img}
          />
        ))}
      </div>
    </section>
  );
}