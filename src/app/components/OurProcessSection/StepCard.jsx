import Image from 'next/image';

export default function StepCard({ src, alt, title, description }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-green-100 rounded-full p-8 mb-6">
        <Image
          src={src}
          alt={alt}
          width={40}
          height={40}
          className="text-green-600 object-contain"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}