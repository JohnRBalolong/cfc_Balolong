
import HeadingSection from './HeadingSection';
import ImageSection from './ImageSection';
import ContactCard from './ContactCard';

export default function ContentLayout() {
  return (
    <section className="relative py-12 overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover opacity-10"
        style={{ backgroundImage: "url('/img/tension-force-car.gif')" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 bg-green-0/80">
        <div className="flex flex-col justify-center space-y-6">
          <HeadingSection />
          <ImageSection />
        </div>

        {/* This is client-side */}
        <ContactCard />
      </div>
    </section>
  );
}
