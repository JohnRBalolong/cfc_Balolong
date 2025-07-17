import Image from 'next/image';

export default function ReasonCard({ src, title, desc }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition duration-300">
      <Image
        src={src}
        alt={title}
        width={80}
        height={80}
        className="object-contain mb-4"
        priority={true}
        placeholder="empty"
      />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-green-600 text-sm">{desc}</p>
    </div>
  );
}