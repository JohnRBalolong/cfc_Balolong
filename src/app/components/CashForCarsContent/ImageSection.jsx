import Image from 'next/image';

export default function ImageSection() {
  return (
    <div className="flex items-center gap-6 mt-6">
      <Image
        src="/img/Group-2958.webp"
        alt="Tow truck"
        width={1200}
        height={800}
        priority // Correct usage: next/image component
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
}