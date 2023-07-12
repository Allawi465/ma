'use client';
import { Syne } from 'next/font/google';
import Introduction from '@/components/about';
import Projects from '@/components/projects';
import AboutMe from '@/components/about/aboutMe';

const inter = Syne({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <div
      className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4 ${inter.className}`}
    >
      <Introduction />

      <Projects />

      <div className="arrow-scroll pt-[97px] pb-[150px] sm:py-[140px] ">
        <a href="#about">
          <span className="arrow one border-r-2 border-b-2 border-sky-800 dark:border-sky-400"></span>
          <span className="arrow two border-r-2 border-b-2 border-sky-800 dark:border-sky-400"></span>
          <span className="arrow tree border-r-2 border-b-2 border-sky-800 dark:border-sky-400"></span>
        </a>
      </div>

      <AboutMe />
    </div>
  );
}
