import Image from 'next/image';
import MaAvatar from '../../../public/me.jpg';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Introduction() {
  return (
    <section id="portfolio" className="my-10 sm:my-20">
      <div className="flex justify-center gap-2 h-[605px]">
        <div className="my-auto">
          <h1 className="text-3xl md:pt-4 text-center">
            Hello, I'm Mohammed Allawi
          </h1>
          <h2 className="text-lightGray dark:text-darkGrey text-2xl md:py-2 text-center sm:text-start">
            Front-end web development and UX designer.
          </h2>
          <div className="flex justify-center py-3">
            <a
              href="#projects"
              className="group flex bg-dark text-white border border-transparent hover:bg-transparent hover:border-dark hover:text-dark dark:bg-gold dark:text-dark dark:hover:border-lightGold dark:hover:text-gold dark:hover:bg-transparent font-bold py-2 px-10 rounded"
            >
              View my work
              <ArrowRightIcon className="h-6 w-6 ml-1 transition-transform duration-300 transform group-hover:rotate-90" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
