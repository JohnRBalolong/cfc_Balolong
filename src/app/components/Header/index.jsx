'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';
import NavButtons from './NavButtons';
import OfferModal from './OfferModal';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  // sticky blur on scroll
  useEffect(() => {
    const header = document.getElementById('main-header');
    const onScroll = () =>
      window.scrollY > 10
        ? header.classList.add('backdrop-blur-sm', 'bg-white/70', 'shadow-md')
        : header.classList.remove('backdrop-blur-sm', 'bg-white/70', 'shadow-md');
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        id="main-header"
        className="sticky top-0 bg-white/0 transition-all duration-300 px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center z-50"
      >
        <Logo />
        <NavButtons onOpenModal={() => setShowModal(true)} />
      </header>

      {showModal && <OfferModal onClose={() => setShowModal(false)} />}
    </>
  );
}