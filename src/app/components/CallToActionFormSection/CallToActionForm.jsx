'use client';

import { motion } from 'framer-motion';
import FormInput from './FormInput';
import { PhoneIcon, TruckIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CallToActionForm() {
  return (
    <form className="md:w-1/2 w-full grid grid-cols-1 gap-4 bg-white p-6 rounded-lg shadow-lg text-black">
      <FormInput icon={PhoneIcon} placeholder="Your contact number" />
      <FormInput icon={TruckIcon} placeholder="Vehicle rego OR make, model & year" />
      <FormInput icon={MapPinIcon} placeholder="Pickup address (start typing...)" />

      <motion.button
        type="submit"
        className="group w-full bg-green-700 text-white font-semibold py-3 rounded-xl hover:bg-green-800 transition flex items-center justify-center gap-2"
        whileTap={{ scale: 0.97 }}
      >
        GET A QUOTE NOW
        <motion.span
          className="inline-block"
          initial={{ x: 0 }}
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className="h-8 w-8 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRightIcon className="h-4 w-4 text-green-700" strokeWidth={3} />
          </span>
        </motion.span>
      </motion.button>
    </form>
  );
}