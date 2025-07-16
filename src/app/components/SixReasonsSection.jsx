import Image from 'next/image';

export default function SixReasonsSection() {
  const reasons = [
    {
      src: "/img/instant-cash.webp",
      title: "Instant Cash",
      desc: "on the spot",
    },
    {
      src: "/img/free-removal.webp",
      title: "Free Removal",
      desc: "No Hidden Charges",
    },
    {
      src: "/img/professional.webp",
      title: "Professional",
      desc: "& Friendly Service",
    },
    {
      src: "/img/best-offer.webp",
      title: "Best Offer",
      desc: "Top Price Guaranteed",
    },
    {
      src: "/img/service.webp",
      title: "Service",
      desc: "Excellent Service",
    },
    {
      src: "/img/same-day.webp",
      title: "Same-Day",
      desc: "Removal Within Hours",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">
          <span className="text-green-600">6 Reasons</span> to Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition duration-300"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={80}
                height={80}
                className="object-contain mb-4"
                // Crucial for no visible loading:
                priority={true}       // Tells Next.js to preload this image
                placeholder="empty"   // Ensures no blurred placeholder is shown
              />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-green-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}