
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

export default function SocialIcons() {
  const socials = [
    { href: '#', icon: faFacebookF, label: 'Facebook' },
    { href: '#', icon: faXTwitter, label: 'Twitter' },
    { href: '#', icon: faLinkedinIn, label: 'LinkedIn' },
  ];

  return (
    <div className="max-w-6xl mx-auto flex justify-center gap-4 mb-8">
      {socials.map((item, i) => (
        <a
          key={i}
          href={item.href}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition"
          aria-label={item.label}
        >
          <FontAwesomeIcon icon={item.icon} />
        </a>
      ))}
    </div>
  );
}