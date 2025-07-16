'use client'; // This MUST be a Client Component due to framer-motion and react-intersection-observer

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'; // Use Next.js Image component for optimization

export default function ContentSections() {
  const allContent = [
    {
      title: "Cash For Cars Rotorua",
      text: `Are you looking to get rid of your old car? Maybe it’s been sitting in your garage or driveway for years and you’re ready to move on. Or perhaps it’s been in an accident and it’s no longer safe to drive. Whatever the reason, getting cash offer for your car in Rotorua is easier than you think. There are many options for selling your car, but not all of them are equal. Some require a lot of time and effort on your part, while others may not offer a fair price for your scrap vehicle. Cash for cars Rotorua is a great option for those who want to get rid of their unwanted car quickly and for a fair price.`,
      img: "/img/damage-car.webp",
      alt: "Damaged car",
    },
    {
      title: "Get Cash for Cars Rotorua",
      text: `Cash for cars Rotorua is a service that buys cars in any condition, regardless of their make, model, or year. They offer a hassle-free way to sell your car, without the need for advertising, negotiating, or dealing with potential buyers.`,
      img: "/img/two-man-negotiate.webp",
      alt: "Negotiation",
    },
    {
      title: "Top Cash For Cars Rotorua",
      text: `The process of selling your car to Top cash for cars Rotorua is simple and straightforward. First, you’ll need to contact them either through their website or by phone to get a quote for your vehicle. You’ll need to provide some basic information about your car, such as its make, model, year, and condition. Once you’ve received a quote, you can choose whether or not to accept it. If you decide to go ahead, you’ll need to arrange a time and place for the car to be picked up. Cash for cars Rotorua will come to you, so you don’t need to worry about transporting the vehicle yourself. When the car is picked up, you’ll need to provide the necessary paperwork, such as the registration and title. Cash for cars Rotorua will take care of the rest, including paying you in cash or via bank transfer.`,
      img: "/img/man-towed-car.webp",
      alt: "Man towing car",
    },
    {
      title: "Cash For Cars Rotorua",
      text: `One of the main advantages of using cash for cars Rotorua is that you can sell your car quickly. You don’t need to wait for potential buyers to contact you or haggle over the price. Cash for cars Rotorua will give you a quote on the spot and can usually pick up the car within a few days. Another advantage is that you can sell your car in any condition. Cash for cars Rotorua buys cars that are running, not running, or even those that have been in accidents. This is especially useful if you have a car that you can’t sell through traditional means, such as a dealership or private sale.`,
      img: "/img/two-man-negotiate.webp",
      alt: "Negotiation",
    },
    {
    title: "Car Wreckers Rotorua",
    text: `Cash for cars Rotorua also offers a fair price for your vehicle. They use a number of factors to determine the value of your car, such as its age, mileage, and condition. You can be sure that you’ll get a competitive price for your vehicle, without the need to negotiate or haggle.`,
    img: "/img/damage-car.webp",
    alt: "Damaged car",
    },
  ];

  return (
    <section className="bg-white py-10 px-4">
      {allContent.map((item, index) => {
        const { ref, inView } = useInView({ triggerOnce: true });
        const controls = useAnimation();

        const isEven = index % 2 === 0;
        const slideDirection = isEven ? -100 : 100;

        useEffect(() => {
          // Only animate if viewport is md (768px) or larger
          if (inView && typeof window !== 'undefined' && window.innerWidth >= 768) {
            controls.start({ opacity: 1, x: 0 });
          } else if (typeof window !== 'undefined' && window.innerWidth < 768) {
            // If on mobile, ensure no animation but content is visible
            controls.set({ opacity: 1, x: 0 });
          }
        }, [inView, controls]);

        return (
          <div
            key={index}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-12"
          >
            {/* Mobile Image - Above Text (always visible on mobile, no animation) */}
            <div className="md:hidden flex justify-center mb-4">
              <Image
                src={item.img}
                alt={item.alt}
                width={300} // Adjust width/height as needed for mobile display
                height={200}
                className="w-full max-w-xs h-auto bg-transparent"
                // Consider lazy loading for mobile images if they are off-screen
                loading="lazy"
              />
            </div>

            {/* Content for Desktop */}
            {isEven ? (
              <>
                {/* Desktop Image with animation */}
                <motion.div
                  ref={ref}
                  animate={controls}
                  initial={{ opacity: 0, x: slideDirection }}
                  transition={{ duration: 0.6 }}
                  className="hidden md:flex justify-center order-1"
                >
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={500} // Adjust width/height for desktop
                    height={350}
                    className="max-w-md w-full h-auto bg-transparent"
                    loading="lazy" // Use lazy loading for these animated images
                  />
                </motion.div>

                {/* Text */}
                <motion.div
                  ref={ref} // Both text and image use the same ref for animation trigger
                  animate={controls}
                  initial={{ opacity: 0, x: slideDirection }}
                  transition={{ duration: 0.6 }}
                  className="order-2" // This div contains text for both mobile and desktop
                                     // For mobile, it will not be animated.
                                     // For desktop, it will animate.
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg whitespace-pre-line">
                    {item.text}
                  </p>
                </motion.div>
              </>
            ) : (
              <>
                {/* Text */}
                <motion.div
                  ref={ref}
                  animate={controls}
                  initial={{ opacity: 0, x: slideDirection }}
                  transition={{ duration: 0.6 }}
                  className="order-1" // This div contains text for both mobile and desktop
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg whitespace-pre-line">
                    {item.text}
                  </p>
                </motion.div>

                {/* Desktop Image with animation */}
                <motion.div
                  ref={ref}
                  animate={controls}
                  initial={{ opacity: 0, x: slideDirection }}
                  transition={{ duration: 0.6 }}
                  className="hidden md:flex justify-center order-2"
                >
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={500} // Adjust width/height for desktop
                    height={350}
                    className="max-w-md w-full h-auto bg-transparent"
                    loading="lazy" // Use lazy loading for these animated images
                  />
                </motion.div>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
}