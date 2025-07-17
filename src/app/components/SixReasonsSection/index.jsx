import ReasonCard from './ReasonCard';
import reasonsData from './data';

export default function SixReasonsSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">
          <span className="text-green-600">6 Reasons</span> to Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasonsData.map((item, index) => (
            <ReasonCard
              key={index}
              src={item.src}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}