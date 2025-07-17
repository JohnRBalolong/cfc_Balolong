'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function QuestionItem({ faq, isOpen, onToggle }) {
  return (
    <div className="py-5">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <span
          className={`text-lg font-semibold ${
            isOpen ? 'text-green-600' : 'text-black'
          }`}
        >
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className="h-5 w-5 text-teal-500" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
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
  );
}