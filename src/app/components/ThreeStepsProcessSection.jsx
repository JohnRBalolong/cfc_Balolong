
import Image from 'next/image'; // For image optimization
// Assuming these icons are from @heroicons/react/24/outline
import { PhoneIcon, TruckIcon, ClipboardDocumentIcon as ClipboardIcon } from '@heroicons/react/24/outline';


export default function ThreeStepsProcessSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12">
          GET OUR CASH FOR CARS ROTORUA SERVICE IN 3 SIMPLE STEPS:
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Step 1: Contact Us */}
          <div className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-center bg-green-100 w-14 h-14 rounded-full mb-4">
              {/* Using Heroicon directly */}
              <PhoneIcon className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Contact Us</h3>
            <p className="text-gray-700">
              Contact us now at <strong>0800 997000</strong> or use the contact form on this page. Once we obtain your details, we will dispatch a team to your area.
            </p>
          </div>

          {/* Step 2: Assessment */}
          <div className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-center bg-green-100 w-14 h-14 rounded-full mb-4">
              {/* Using Heroicon directly */}
              <ClipboardIcon className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Assessment</h3>
            <p className="text-gray-700">
              Our evaluation will consider the vehicle's year, make, model, miles driven, and condition. Based on this, we’ll make you a reasonable cash offer.
            </p>
          </div>

          {/* Step 3: Sale & Removal */}
          <div className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-center bg-green-100 w-14 h-14 rounded-full mb-4">
              {/* Using Heroicon directly */}
              <TruckIcon className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Sale & Free Car Removal</h3>
            <p className="text-gray-700">
              We’ll pay you instant cash for cars if you accept the offer. Our crew will take your automobile away on the same day for free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}