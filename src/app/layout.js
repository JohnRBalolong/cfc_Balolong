import '../../styles/globals.css'; 
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cash for Cars - Instant Offer',
  description: 'Sell your unwanted car for top cash with free same-day removal.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}