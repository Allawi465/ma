import Image from 'next/image';
import MaAvatar from '../../../public/me.jpg';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Introduction() {
  return (
    <section id="portfolio" className="py-3">
      <div className="my-10 sm:my-20 flex justify-evenly flex-wrap sm:flex-nowrap flex-row-reverse gap-2 py-4">
        <div className="images">
          <Image
            src={MaAvatar}
            className="w-[250px] object-cover rounded-full"
            alt="image of Mohammed Allawi"
          ></Image>
        </div>
        <div className="py-4">
          <h1 className="text-3xl md:pt-4 text-center">
            Hello, I'm Mohammed Allawi
          </h1>
          <h2 className="text-lightGray dark:text-darkGrey text-2xl md:py-2 text-center sm:text-start">
            Front-end web development and UX designer
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
