'use client'; // Client Component due to framer-motion in the form button

import { motion } from 'framer-motion';
import Image from 'next/image'; // For image optimization
import { PhoneIcon, TruckIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CallToActionFormSection() {
  return (
    <section className="bg-green-600 text-white py-16 px-4 bg-no-repeat bg-right-bottom bg-contain">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content with Image, Heading, Text */}
          <div className="bg-green-600 text-white px-4 py-12">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center md:text-left">
              {/* Image on Top */}
              <div className="mb-6">
                <img
                  src="/img/man-thumbsup.webp"
                  alt="Man giving thumbs up beside a car"
                  className="w-50 h-50 object-contain mx-auto"
                />
              </div>

              {/* Heading + Text */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Get Top Cash for Unwanted Cars
                </h1>
                <p className="text-lg">
                  We offer top cash for cars, trucks, SUVs, vans and provide free same-day removal.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form className="md:w-1/2 w-full grid grid-cols-1 gap-4 bg-white p-6 rounded-lg shadow-lg text-black">
            {/* Contact Number */}
            <div className="relative">
              <PhoneIcon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Your contact number"
                className="border rounded px-10 py-2 w-full"
              />
            </div>

            {/* Vehicle Details */}
            <div className="relative">
              <TruckIcon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Vehicle rego OR make, model & year"
                className="border rounded px-10 py-2 w-full"
              />
            </div>

            {/* Pickup Address */}
            <div className="relative">
              <MapPinIcon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Pickup address (start typing...)"
                className="border rounded px-10 py-2 w-full"
              />
            </div>

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
        </div>
      </section>
  );
}