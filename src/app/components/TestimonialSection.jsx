
'use client'; // This Client Component due to framer-motion

import { motion } from 'framer-motion';
import Image from 'next/image'; // Use Next.js Image component for optimization

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah T.",
      text: "Super fast and hassle-free! They picked up my car the same day and paid in cash. Highly recommend.",
      img: "/img/testimonial1.webp",
    },
    {
      name: "John D.",
      text: "I didn’t expect to get much for my broken car, but they offered a great price and took care of everything.",
      img: "/img/testimonial2.webp",
    },
    {
      name: "Lena M.",
      text: "Friendly staff and great communication. The pickup was on time, and the payment was instant.",
      img: "/img/testimonial3.webp",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Customers Say</h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg">Real feedback from happy Rotorua car sellers</p>
      </div>

      {/* Note: overflow-x-auto, scroll-smooth, snap-x, snap-mandatory are client-side CSS properties,
          but the framer-motion props specifically make this section a Client Component. */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scroll-smooth snap-x snap-mandatory px-2">
        {testimonials.map((t, i) => (
          <motion.div
            key={i} // Using index as key is generally discouraged for dynamic lists, but acceptable for static lists.
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Animates only once when it enters the viewport
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center snap-start"
          >
            <Image
              src={t.img}
              alt={`Photo of ${t.name}`}
              width={80}  // Adjust width and height based on your image sizes
              height={80} // These are example values; ensure they match your design
              className="w-20 h-20 object-cover rounded-full mb-4 border-2 border-green-600"
              loading="lazy" // These images will typically be below the fold, so lazy loading is good
            />
            <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
            <h3 className="text-lg font-semibold text-green-700">{t.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}