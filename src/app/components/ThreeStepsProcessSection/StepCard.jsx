export default function StepCard({ Icon, title, description }) {
  return (
    <div className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
      <div className="flex items-center justify-center bg-green-100 w-14 h-14 rounded-full mb-4">
        <Icon className="w-6 h-6 text-green-700" />
      </div>
      <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}