'use client';
import { useContext } from 'react';
import { Syne } from 'next/font/google';
import AboutHome from '@/components/about';
import MySlider from '@/components/projectsSwip';
import Link from 'next/link';
import { SliderContext } from '../provider';

import { ArrowRightIcon } from '@heroicons/react/24/solid';

const inter = Syne({ weight: '400', subsets: ['latin'] });

export default function Home() {
  const { showSlider } = useContext(SliderContext);
  return (
    <main
      className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4 ${inter.className}`}
    >
      <div className="mb-7">
        {showSlider && (
          <>
            <div className="py-0 flex justify-end">
              <Link
                href={'/projects'}
                className="text-lightblue dark:text-sky-400 font-bol flex justify-center"
              >
                View my work
                <ArrowRightIcon className="h-4 w-4 pt-1 mt-1 text-lightblue dark:text-sky-400" />
              </Link>
            </div>
            <MySlider />
          </>
        )}
      </div>

      <AboutHome />
    </main>
  );
}
