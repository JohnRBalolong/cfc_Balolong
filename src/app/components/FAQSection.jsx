'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function FaqSection() {
  const faqsData = [
    {
      question: "Approximately how much money could I get for my car?",
      answer: "When determining a fair price for your car, we consider many variables. These variables include the vehicle’s age, condition, and mileage."
    },
    {
      question: "Are you interested in buying non-functioning cars?",
      answer: "Yes. It makes no difference at all whether your car is running or not, registered or unregistered. Your vehicle’s condition is irrelevant to us; we’ll buy it nonetheless."
    },
    {
      question: "DO I HAVE TO BRING MY VEHICLE TO YOU?",
      answer: "No, we offer free towing and will arrange pickup at your convenience."
    },
    {
      question: "Within what time frame can I expect my automobile to be towed?",
      answer: "We conclude our transaction within 24 hours and tow the car within that time frame. We make staying effective our priority, and you can count on Atlas Auto to free up your space as soon as we buy your car."
    },
    {
      question: "Do I have to pay a fee for vehicle removal?",
      answer: "No. Our car removal service is completely free of charge."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        FAQ: CASH FOR CAR SERVICES, ROTORUA
      </h2>

      <div className="flex justify-center mb-10">
        <div className="h-14 w-14 rounded-full bg-green-500 flex items-center justify-center">
          <ChevronDownIcon className="h-8 w-8 text-white" />
        </div>
      </div>

      <div className="divide-y divide-gray-300">
        {faqsData.map((faq, index) => (
          <div key={index} className="py-5">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left focus:outline-none"
            >
              <span className={`text-lg font-semibold ${openIndex === index ? 'text-green-600' : 'text-black'}`}>
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDownIcon className="h-5 w-5 text-teal-500" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className="mt-3 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
