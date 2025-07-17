import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

export default function ContactDetails() {
  return (
    <div className="text-center md:text-left leading-relaxed space-y-2">
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
  );
}