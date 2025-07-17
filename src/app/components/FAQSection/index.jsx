'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; // for the header icon
import faqsData from './data';
import QuestionItem from './QuestionItem';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) =>
    setOpenIndex(openIndex === idx ? null : idx);

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
        {faqsData.map((faq, idx) => (
          <QuestionItem
            key={idx}
            faq={faq}
            isOpen={openIndex === idx}
            onToggle={() => toggleFAQ(idx)}
          />
        ))}
      </div>
    </section>
  );
}