
'use client'; // This directive is crucial for client-side interactivity

import { useState } from 'react';
import { motion } from 'framer-motion';
// Import your Heroicons
import { PhoneIcon, TruckIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';


export default function ContactForm() {
  const [form, setForm] = useState({ contact: '', vehicle: '', address: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!form.contact) newErrors.contact = 'Contact number is required.';
    if (!form.vehicle) newErrors.vehicle = 'Vehicle details are required.';
    if (!form.address) newErrors.address = 'Pickup address is required.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    console.log('Form Submitted:', form);
    setSubmitted(true);
    setForm({ contact: '', vehicle: '', address: '' });
    setErrors({});
  };

  return (
    <>
      {submitted && (
        <motion.div
          className="text-green-600 text-center font-medium mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          Your request has been submitted!
        </motion.div>
      )}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="relative">
          <PhoneIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <input
            name="contact"
            value={form.contact}
            onChange={handleChange}
            type="text"
            placeholder="Your contact number"
            className={`pl-10 w-full px-4 py-3 bg-gray-100 border ${errors.contact ? 'border-red-400' : 'border-transparent'
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
        </div>
        <div className="relative">
          <TruckIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <input
            name="vehicle"
            value={form.vehicle}
            onChange={handleChange}
            type="text"
            placeholder="Vehicle rego OR make, model & year"
            className={`pl-10 w-full px-4 py-3 bg-gray-100 border ${errors.vehicle ? 'border-red-400' : 'border-transparent'
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.vehicle && <p className="text-red-500 text-sm mt-1">{errors.vehicle}</p>}
        </div>
        <div className="relative">
          <MapPinIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            type="text"
            placeholder="Pickup address (start typing...)"
            className={`pl-10 w-full px-4 py-3 bg-gray-100 border ${errors.address ? 'border-red-400' : 'border-transparent'
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>
        <motion.button
          type="submit"
          className="group w-full bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition flex items-center justify-center gap-2"
          whileTap={{ scale: 0.97 }}
        >
          Request a Quote
          <motion.span
            className="inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span className="h-8 w-8 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRightIcon className="h-4 w-4 text-green-600" strokeWidth={3} />
            </span>
          </motion.span>
        </motion.button>
      </form>
    </>
  );
}