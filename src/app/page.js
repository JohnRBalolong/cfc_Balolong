
import Header from './components/Header'; 
// import AnimatedSection from './components/AnimatedSection';
// import { ArrowRightIcon } from '@heroicons/react/24/solid';
// import { PhoneIcon, TruckIcon, MapPinIcon, GiftIcon } from '@heroicons/react/24/outline';

// Correct import path for the reusable component
import CashForCarsContent from './components/CashForCarsContent';
import SixReasonsSection from './components/SixReasonsSection'; 
import ContentSections from './components/ContentSections';
import OurProcessSection from './components/OurProcessSection';
import TestimonialSection from './components/TestimonialSection';
import CallToActionFormSection from './components/CallToActionFormSection';
import ThreeStepsProcessSection from './components/ThreeStepsProcessSection';
import FaqSection from './components/FAQSection';
import GetInTouchSection from './components/GetInTouchSection';
import FooterInfoSection from './components/FooterInfoSection';


async function getWordPressPosts() {
  try {
    const res = await fetch('https://stg-cashforcarrotoruaconz-staging.kinsta.cloud/wp-json/wp/v2/posts', {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      console.error('Network response was not ok:', res.statusText);
      throw new Error('Failed to fetch WordPress posts');
    }

    const posts = await res.json();
    return posts.map((post) => ({
      id: post.id,
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]+>/g, ''),
    }));
  } catch (error) {
    console.error("Failed to fetch WordPress posts in getWordPressPosts:", error);
    return [
      {
        id: 1,
        title: 'Cash for Cars Rotorua (Fallback)',
        description: 'We buy unwanted cars, utes, and trucks in Rotorua and pay top dollar! (Fallback)',
      },
      {
        id: 2,
        title: 'Free Car Removal (Fallback)',
        description: 'Get your vehicle picked up for free and paid instantly. (Fallback)',
      },
    ];
  }
}

export default async function Home() {
  const posts = await getWordPressPosts();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header is a Client Component due to its interactive elements and state */}
      <Header />

      {/* SSR "Cash For Cars" section */}
      <CashForCarsContent />

      {/* (Server Component) */}
      <SixReasonsSection />

      {/* (Client Component) */}
      <ContentSections />

      {/* (Server Component) */}
      <OurProcessSection />

      {/* (Client Component) */}
      <TestimonialSection />

      {/* (Client Component) */}
      <CallToActionFormSection />

      {/* (Server Component) */}
      <ThreeStepsProcessSection />

      {/* (Client Component) */}
      <FaqSection />
      
      {/* (Server Component) */}
      <GetInTouchSection />

      <FooterInfoSection /> 

   
    </main>
  );
}