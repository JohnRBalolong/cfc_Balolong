import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

export default function FooterInfoSection() {
  return (
    <section className="bg-black text-white px-4 pt-12">
  {/* Social Icons */}
  <div className="max-w-6xl mx-auto flex justify-center gap-4 mb-8">
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition"
      aria-label="Facebook"
    >
      <FontAwesomeIcon icon={faFacebookF} />
    </a>
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition"
      aria-label="Twitter"
    >
      <FontAwesomeIcon icon={faXTwitter} />
    </a>
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition"
      aria-label="LinkedIn"
    >
      <FontAwesomeIcon icon={faLinkedinIn} />
    </a>
  </div>

  {/* Divider */}
  <hr className="border-gray-700 mb-6" />

  {/* Contact Info */}
 <div className="text-center md:text-left leading-relaxed space-y-2">
    <div className="text-center md:text-left leading-relaxed">
        <p className="flex items-center justify-center md:justify-start gap-2">
    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
    123 Car Street, Rotorua 3010, New Zealand
  </p>
  <p className="flex items-center justify-center md:justify-start gap-2">
    <FontAwesomeIcon icon={faPhoneAlt} className="text-white" />
    0800 99 7000
  </p>
  <p className="flex items-center justify-center md:justify-start gap-2">
    <FontAwesomeIcon icon={faEnvelope} className="text-white" />
    contact@cashforcarsrotorua.co.nz
  </p>
    </div>

    <div className="text-center md:text-right leading-relaxed">
      <p>
        <a href="#" className="hover:underline">Privacy Policy</a> |{" "}
        <a href="#" className="hover:underline">Terms and Conditions</a>
      </p>
      <p>© {new Date().getFullYear()} Cash For Cars Rotorua. All rights reserved.</p>
    </div>
  </div>
</section>
  );
}