import { PhoneIcon } from '@heroicons/react/24/outline';
import { getInTouchContent } from './data';

export default function TextColumn() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-6 text-gray-900">{getInTouchContent.heading}</h2>
      {getInTouchContent.paragraphs.map((para, index) => (
        <p key={index} className="text-lg text-gray-700 mb-6 leading-relaxed">
          {para}
        </p>
      ))}
      <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow hover:bg-green-700 transition flex items-center space-x-3">
        <PhoneIcon className="h-6 w-6" />
        <span>{getInTouchContent.buttonText}</span>
      </button>
    </div>
  );
}