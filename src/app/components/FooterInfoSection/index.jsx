import SocialIcons from './SocialIcons';
import ContactDetails from './ContactDetails';
import LegalInfo from './LegalInfo';

export default function FooterInfoSection() {
  return (
    <section className="bg-black text-white px-4 pt-12">
      <SocialIcons />
      <hr className="border-gray-700 mb-6" />
      <div className="text-center md:text-left leading-relaxed space-y-6">
        <ContactDetails />
        <LegalInfo />
      </div>
    </section>
  );
}