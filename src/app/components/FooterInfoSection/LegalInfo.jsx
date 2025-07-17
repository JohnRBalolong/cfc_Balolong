export default function LegalInfo() {
  return (
    <div className="text-center md:text-right leading-relaxed">
      <p>
        <a href="#" className="hover:underline">Privacy Policy</a> |{' '}
        <a href="#" className="hover:underline">Terms and Conditions</a>
      </p>
      <p>© {new Date().getFullYear()} Cash For Cars Rotorua. All rights reserved.</p>
    </div>
  );
}