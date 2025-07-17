import StepCard from "./StepCard";
import { steps } from "./data";

export default function ThreeStepsProcessSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12">
          GET OUR CASH FOR CARS ROTORUA SERVICE IN 3 SIMPLE STEPS:
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              Icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}