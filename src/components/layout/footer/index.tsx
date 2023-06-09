'use client';
import { ImGithub } from 'react-icons/im';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdOutgoingMail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-white w-full dark:bg-transparent">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="rounded-full sm:my-3 bg-dark text-white border-2 border-solid border-white dark:border-white inline-block">
            <a
              href="#portfolio"
              className="w-14 h-14 flex items-center justify-center"
            >
              <span className="text-2xl font-bold">MA</span>
            </a>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-black dark:text-gray-400">
            <li>
              <a href="https://github.com/Allawi465" className="p-2 m-3 ">
                <ImGithub size={25} />
              </a>
            </li>
            <li>
              <a href="mailto:allawi465@gmail.com" className="p-2 m-3">
                <MdOutgoingMail size={25} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mohammed-allawi-89830621a/"
                className="p-2 m-3"
              >
                <AiFillLinkedin size={25} />
              </a>
            </li>
            <li>
              <a
                href="mailto:allawi465@gmail.com"
                className="mr-4 hover:underline md:mr-6"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          &copy; {new Date().getFullYear()}
          <a
            href="https://github.com/Allawi465"
            className="hover:underline ml-1 text-base"
          >
            Allawi
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
