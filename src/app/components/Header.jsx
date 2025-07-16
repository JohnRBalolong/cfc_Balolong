'use client'; // This directive makes it a Client Component

import { useState, useEffect } from 'react';
import { PhoneIcon, GiftIcon, XMarkIcon, ClipboardIcon, EnvelopeIcon, TruckIcon, MapPinIcon } from '@heroicons/react/24/outline'; // Outline icons
import { ArrowRightIcon } from '@heroicons/react/24/solid'; // Solid icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // If you still need FA icons in client components
import { faFacebookF, faXTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // Brand icons
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Solid FA icons

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', contact: '', vehicle: '', address: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const header = document.getElementById('main-header');
    function handleScroll() {
      if (window.scrollY > 10) {
        header.classList.add('backdrop-blur-sm', 'bg-white/70', 'shadow-md');
      } else {
        header.classList.remove('backdrop-blur-sm', 'bg-white/70', 'shadow-md');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    if (!form.contact.trim()) newErrors.contact = 'Contact number is required';
    if (!form.vehicle.trim()) newErrors.vehicle = 'Vehicle details are required';
    if (!form.address.trim()) newErrors.address = 'Pickup address is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate API call (replace with your actual API endpoint)
    try {
      // Example: Send data to a Next.js API route or external service
      const response = await fetch('/api/submit-form', { // Assuming you create this API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Form submission successful:', result);

      setSubmitted(true);
      setForm({ name: '', email: '', contact: '', vehicle: '', address: '' }); // Clear form

      setTimeout(() => setSubmitted(false), 4000);
      setShowModal(false); // Close modal on successful submission
    } catch (error) {
      console.error('Form submission failed:', error);
      // Handle error, maybe show an error message to the user
      setErrors({ general: 'Failed to submit form. Please try again.' });
    }
  };

  return (
    <header id="main-header" className="sticky top-0 bg-white/0 transition-all duration-300 px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center z-50">
      <div className="flex items-center mb-4 sm:mb-0">
        <img
          src="/img/Cash-For-Car-2-1.webp"
          alt="Tow truck"
          className="w-[150px] sm:w-60 h-auto rounded-none shadow-none border-none bg-transparent"
        />
      </div>

      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <button className="bg-green-700 text-white px-4 py-2 rounded-xl hover:bg-green-800 transition font-medium flex items-center justify-center space-x-2 w-full sm:w-auto text-lg sm:text-sm">
          <PhoneIcon className="h-5 w-5" />
          <span>0800 99 7000</span>
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-700 text-white px-4 py-2 rounded-xl hover:bg-green-800 transition font-medium flex items-center justify-center space-x-2 w-full sm:w-auto text-lg sm:text-sm"
        >
          <span>Get an offer</span>
          <GiftIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto transition-all duration-300">
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg relative w-11/12 sm:max-w-lg md:max-w-4xl mx-auto my-10 transition-transform duration-300">

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 bg-gray-100 border border-gray-300 rounded-full p-2 shadow-md hover:shadow-lg hover:bg-gray-200 transition-transform duration-200 hover:scale-110"
              aria-label="Close Modal"
            >
              <XMarkIcon className="h-5 w-5 text-gray-600" />
            </button>

            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">SELL YOUR VEHICLE TODAY</h2>
            <p className="text-gray-600 text-center mb-6 md:mb-8">
              We offer top cash for cars, trucks, SUVs, vans and offer free same-day removal as well.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="font-medium">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <ClipboardIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-3" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="border rounded-md w-full p-3 pl-10"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div>
                  <label className="font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-3" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      className="border rounded-md w-full p-3 pl-10"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div>
                  <label className="font-medium">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <PhoneIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-3" />
                    <input
                      type="text"
                      name="contact"
                      placeholder="Your contact number"
                      className="border rounded-md w-full p-3 pl-10"
                      value={form.contact}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium">
                    Vehicle Details <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <TruckIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-3" />
                    <input
                      type="text"
                      name="vehicle"
                      placeholder="Vehicle rego OR make, model & year"
                      className="border rounded-md w-full p-3 pl-10"
                      value={form.vehicle}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.vehicle && <p className="text-red-500 text-sm">{errors.vehicle}</p>}
                </div>

                <div>
                  <label className="font-medium">
                    Pickup Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPinIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-3" />
                    <input
                      type="text"
                      name="address"
                      placeholder="Pickup address (start typing...)"
                      className="border rounded-md w-full p-3 pl-10"
                      value={form.address}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>
              </div>

              {submitted && (
                <p className="text-green-600 text-center font-semibold mt-4">
                  Thank you for your submission! We will get back to you shortly.
                </p>
              )}
              {errors.general && (
                <p className="text-red-500 text-center font-semibold mt-4">
                  {errors.general}
                </p>
              )}


              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-3 rounded-md font-semibold flex items-center transition-all duration-300"
                >
                  GET AN INSTANT OFFER <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}