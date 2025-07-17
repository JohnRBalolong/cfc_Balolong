'use client';

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

export default function ContactCard() {
  return (
    <motion.div
      className="bg-white p-8 shadow-2xl rounded-2xl border border-gray-100"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
        SELL YOUR CAR FOR CASH NOW!
      </h2>
      <ContactForm />
    </motion.div>
  );
}
