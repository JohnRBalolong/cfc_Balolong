'use client';

import { useState } from 'react';
import FormInput from './FormInput';
import { ArrowRightIcon, ClipboardIcon, EnvelopeIcon, PhoneIcon, TruckIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function OfferForm({ onSuccess }) {
  const initial = { name: '', email: '', contact: '', vehicle: '', address: '' };
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };
  const validate = () => {
    const errs = {};
    for (let k in form) if (!form[k].trim()) errs[k] = `${k[0].toUpperCase() + k.slice(1)} is required`;
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) return setErrors(v);

    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(res.statusText);
      setSubmitted(true);
      setForm(initial);
      setTimeout(() => { setSubmitted(false); onSuccess(); }, 4000);
    } catch {
      setErrors({ general: 'Submission failed. Try again.' });
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormInput icon={ClipboardIcon} name="name" placeholder="Full Name" value={form.name} onChange={handleChange} error={errors.name} />
        <FormInput icon={EnvelopeIcon} name="email" placeholder="Your email address" value={form.email} onChange={handleChange} error={errors.email} />
        <FormInput icon={PhoneIcon} name="contact" placeholder="Your contact number" value={form.contact} onChange={handleChange} error={errors.contact} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput icon={TruckIcon} name="vehicle" placeholder="Vehicle rego OR make, model & year" value={form.vehicle} onChange={handleChange} error={errors.vehicle} />
        <FormInput icon={MapPinIcon} name="address" placeholder="Pickup address (start typing...)" value={form.address} onChange={handleChange} error={errors.address} />
      </div>

      {submitted && <p className="text-green-600 text-center">Thank you! We’ll be in touch.</p>}
      {errors.general && <p className="text-red-500 text-center">{errors.general}</p>}

      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-3 rounded-md font-semibold flex items-center transition-all duration-300"
        >
          GET AN INSTANT OFFER <ArrowRightIcon className="w-5 h-5 ml-2" />
        </button>
      </div>
    </form>
  );
}