import processSteps from './data';
import StepCard from './StepCard';

export default function OurProcessSection() {
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
          <StepCard
            key={index}
            src={step.src}
            alt={step.alt}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}