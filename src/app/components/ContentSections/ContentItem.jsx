'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function ContentItem({ title, text, img, alt, isEven }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();
  const slideDirection = isEven ? -100 : 100;

  useEffect(() => {
    if (inView && typeof window !== 'undefined' && window.innerWidth >= 768) {
      controls.start({ opacity: 1, x: 0 });
    } else if (typeof window !== 'undefined' && window.innerWidth < 768) {
      controls.set({ opacity: 1, x: 0 });
    }
  }, [inView, controls]);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-12">
      {/* Mobile Image */}
      <div className="md:hidden flex justify-center mb-4">
        <Image
          src={img}
          alt={alt}
          width={300}
          height={200}
          className="w-full max-w-xs h-auto bg-transparent"
          loading="lazy"
        />
      </div>

      {isEven ? (
        <>
          <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, x: slideDirection }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex justify-center order-1"
          >
            <Image
              src={img}
              alt={alt}
              width={500}
              height={350}
              className="max-w-md w-full h-auto bg-transparent"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, x: slideDirection }}
            transition={{ duration: 0.6 }}
            className="order-2"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              {title}
            </h2>
            <p className="text-gray-600 text-base md:text-lg whitespace-pre-line">
              {text}
            </p>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, x: slideDirection }}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              {title}
            </h2>
            <p className="text-gray-600 text-base md:text-lg whitespace-pre-line">
              {text}
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, x: slideDirection }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex justify-center order-2"
          >
            <Image
              src={img}
              alt={alt}
              width={500}
              height={350}
              className="max-w-md w-full h-auto bg-transparent"
              loading="lazy"
            />
          </motion.div>
        </>
      )}
    </div>
  );
}