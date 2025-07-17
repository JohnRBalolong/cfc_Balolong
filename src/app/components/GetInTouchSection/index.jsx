'use client'; // If you're using client-side interactivity like hooks or animations

import ImageColumn from './ImageColumn';
import TextColumn from './TextColumn';

export default function GetInTouchSection() {
  return (
    <section className="bg-green-50 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ImageColumn />
        <TextColumn />
      </div>
    </section>
  );
}
