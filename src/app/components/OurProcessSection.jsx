import Image from 'next/image'; // Recommended for optimizing images in Next.js

export default function OurProcessSection() {
  const processSteps = [
    {
      src: "/img/contact.webp",
      alt: "Contact Us",
      title: "Contact",
      description: "Contact us now at 0800 997000 or use the contact form on this page. Once we obtain your details, we will dispatch a team to your area.",
    },
    {
      src: "/img/best-offer.webp",
      alt: "Get an Offer",
      title: "Get an Offer",
      description: "Our evaluation will consider the vehicle's year, make, model, miles are driven, and overall condition. Our team will make you a reasonable offer based on the appraisal results.",
    },
    {
      src: "/img/free-removal.webp",
      alt: "Free Removal",
      title: "Free Removal",
      description: "We'll pay you instant cash for cars if you accept the offer. Our crew will take your automobile away on the same day for free.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 text-center">
      <p className="text-green-600 md:text-2xl font-medium text-sm mb-2">
        We pay within minutes. Provide your details and get cash in 3 steps.
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        Our Process
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {processSteps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-green-100 rounded-full p-8 mb-6">
              <Image
                src={step.src}
                alt={step.alt}
                width={40} // Adjust width and height based on your actual icon sizes
                height={40} // These are example values; ensure they match your design
                className="text-green-600 object-contain"
                // No priority or special placeholder needed unless these are critical and above the fold
                // Typically, these would be lazy-loaded
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}