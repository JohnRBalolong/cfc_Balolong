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
      <head>
        <link rel="preload" href="/img/Group-2958.webp" as="image" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
