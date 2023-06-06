import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ${inter.className}`}
    >
      <div>Allawi465</div>
    </main>
  );
}
