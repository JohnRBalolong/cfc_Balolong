import { PhoneIcon, GiftIcon } from '@heroicons/react/24/outline';

export default function NavButtons({ onOpenModal }) {
  return (
    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
      <button className="bg-green-700 text-white px-4 py-2 rounded-xl hover:bg-green-800 transition font-medium flex items-center space-x-2 w-full sm:w-auto text-lg sm:text-sm">
        <PhoneIcon className="h-5 w-5" />
        <span>0800 99 7000</span>
      </button>
      <button
        onClick={onOpenModal}
        className="bg-green-700 text-white px-4 py-2 rounded-xl hover:bg-green-800 transition font-medium flex items-center space-x-2 w-full sm:w-auto text-lg sm:text-sm"
      >
        <span>Get an offer</span>
        <GiftIcon className="h-5 w-5" />
      </button>
    </div>
  );
}