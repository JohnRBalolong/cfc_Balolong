'use client'; // needed because it uses framer-motion

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TestimonialCard({ name, text, img, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center snap-start"
    >
      <Image
        src={img}
        alt={`Photo of ${name}`}
        width={80}
        height={80}
        className="w-20 h-20 object-cover rounded-full mb-4 border-2 border-green-600"
        loading="lazy"
      />
      <p className="text-gray-700 mb-4 italic">"{text}"</p>
      <h3 className="text-lg font-semibold text-green-700">{name}</h3>
    </motion.div>
  );
}