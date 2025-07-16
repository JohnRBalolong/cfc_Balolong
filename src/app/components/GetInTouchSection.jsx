import { PhoneIcon } from '@heroicons/react/24/outline';

export default function GetInTouchSection() {
  return (
    <section className="bg-green-50 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="/img/two-man-negotiate.webp"
            alt="Get in Touch"
            className="max-w-sm w-full md:max-w-md lg:max-w-lg object-contain"
          />
        </div>

        {/* Right Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Finally, using cash for cars Rotorua is a safe and secure way to sell your car. You don’t
            need to worry about meeting with strangers or dealing with potential scammers. Cash for
            cars Rotorua is a reputable company that has been in the business for many years, and
            they will provide you with a fair and honest service.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            In conclusion, if you’re looking to sell your car in Rotorua, using cash for cars Rotorua
            is a great option. It’s quick, easy, and hassle-free, and you can be sure that you’ll get a
            fair price for your vehicle. So why wait? Contact cash for cars Rotorua today and get
            instant cash for your car!
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow hover:bg-green-700 transition flex items-center space-x-3">
            <PhoneIcon className="h-6 w-6" />
            <span>Contact Us Now</span>
          </button>
        </div>
      </div>
    </section>
  );
}