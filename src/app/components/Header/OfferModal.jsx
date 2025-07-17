'use client';

import OfferForm from './OfferForm';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function OfferModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg relative w-11/12 sm:max-w-lg md:max-w-4xl mx-auto my-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 border border-gray-300 rounded-full p-2 shadow-md hover:shadow-lg hover:bg-gray-200 transition-transform duration-200 hover:scale-110"
          aria-label="Close Modal"
        >
          <XMarkIcon className="h-5 w-5 text-gray-600" />
        </button>

        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          SELL YOUR VEHICLE TODAY
        </h2>
        <p className="text-gray-600 text-center mb-6 md:mb-8">
          We offer top cash for cars, trucks, SUVs, vans and free same-day removal.
        </p>

        <OfferForm onSuccess={onClose} />
      </div>
    </div>
  );
}