'use client';

import CallToActionInfo from './CallToActionInfo';
import CallToActionForm from './CallToActionForm';

export default function CallToActionFormSection() {
  return (
    <section className="bg-green-600 text-white py-16 px-4 bg-no-repeat bg-right-bottom bg-contain">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <CallToActionInfo />
        <CallToActionForm />
      </div>
    </section>
  );
}