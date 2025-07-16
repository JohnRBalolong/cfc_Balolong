
'use client'; 

import { motion } from 'framer-motion';
import ContactForm from '../(sections)/cash-for-cars/ContactForm';

// Import your Heroicons (assuming you have them installed: npm install @heroicons/react)
import { PhoneIcon, TruckIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';


export default function CashForCarsContent() { 
 
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background GIF */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-10"
        style={{ backgroundImage: "url('/img/tension-force-car.gif')" }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 bg-green-0/80">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
            <span className="bg-green-600 text-white px-2 py-1 rounded">
              CASH FOR CARS
            </span>{' '}
            ROTORUA
          </h1>

          <p className="text-gray-600 text-lg">
            Looking to get rid of your car in Rotorua? Get quick cash for your car with ease with our Rotorua cash for cars service. We offer free car removal and competitive prices for any make or model, whether it’s running or not. Contact us today to schedule a pickup and get top dollar for your junk car.
          </p>

          <div className="flex items-center gap-6 mt-6">
            <img
              src="/img/Group-2958.webp"
              alt="Tow truck"
              className="w-full h-auto rounded-lg shadow-none border-none bg-transparent"
            />
          </div>
        </div>

        {/* Right Section - Form (Client Component) */}
        {/* motion.div is now correctly rendered because CashForCarsContent is a client component */}
        <motion.div
          className="bg-white p-8 shadow-2xl rounded-2xl border border-gray-100"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
            SELL YOUR CAR FOR CASH NOW!
          </h2>
          <ContactForm /> {/* Render the ContactForm client component */}
        </motion.div>
      </div>
    </section>
  );
}