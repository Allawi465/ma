import Image from 'next/image';
import avatar from '../../../public/me.jpg';
import Link from 'next/link';

export default function AboutHome() {
  return (
    <div className="flex justify-evenly flex-wrap sm:flex-nowrap flex-row-reverse gap-2 py-4">
      <div className="pt-3">
        <Image
          src={avatar}
          alt="Mohammed Allawi"
          width={280}
          height={280}
          className="rounded-[30px] object-cover"
        />
      </div>
      <div className="mt-4 relative">
        <div className="max-w-[516px]">
          <h1 className="text-4xl md:pt-5">Get to know me</h1>
        </div>
        <div className="max-w-[624px] py-2">
          <p className="text-base text-lightGray dark:text-darkGrey tracking-wide">
            I am a Front-End Developer graduate from Noroff School of Technology
            and Digital Media. I am passionate about coding and enjoy the
            challenges it brings...
          </p>
        </div>
        <div className="py-2 flex justify-center sm:justify-start">
          <Link
            href={'/about'}
            className="bg-dark text-white border border-transparent hover:bg-transparent hover:border-dark hover:text-dark dark:bg-gold dark:text-dark dark:hover:border-lightGold dark:hover:text-gold dark:hover:bg-transparent font-bold py-2 px-4 rounded"
          >
            More About Me
          </Link>
        </div>
      </div>
    </div>
  );
}
