'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import eCommerceSite from '../../../public/ecommerce.png';
import bookingSite from '../../../public/bookingSit.png';
import auctionsSite from '../../../public/auctioSite.png';
import notebookSite from '../../../public/notebook.png';
import trailsHikes from '../../../public/trail-hikes.png';
import { ImGithub } from 'react-icons/im';
import { FiExternalLink } from 'react-icons/fi';

const MySlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={'auto'}
    >
      <SwiperSlide>
        <div className="sm:w-[380x] cursor-grab">
          <div className="shadow-lg rounded-lg sm:h-[400px] aspect-w-16 aspect-h-9">
            <Image
              src={eCommerceSite}
              alt="Card Image"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="flex flex-col p-4">
              <div className="flex-1">
                <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
                  Buyers.
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                  An e-commerce store built with React, Bootstrap, sass and
                  rest-api.
                </p>
              </div>
              <div className="flex justify-between items-center py-3">
                <a href="https://github.com/Allawi465/js-framewokrs-ca">
                  <ImGithub size={25} />
                </a>
                <Link
                  className="text-lightblue dark:text-sky-400 flex items-center"
                  href="https://buyers.netlify.app/"
                >
                  Live site
                  <FiExternalLink className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="sm:w-[380x] cursor-grab">
          <div className=" shadow-lg rounded-lg sm:h-[330px]">
            <Image
              src={bookingSite}
              alt="Card Image"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 flex flex-col">
              <div className="flex-1">
                <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
                  Holidaze
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                  A front-end application for a booking site called Holidaze
                  built with React, Bootstrap, sass and rest-api.
                </p>
              </div>
              <div className="flex justify-between items-center py-3">
                <a href="https://github.com/Allawi465/holidaze">
                  <ImGithub size={25} />
                </a>
                <Link
                  className="text-lightblue dark:text-sky-400 flex items-center"
                  href="https://allawi465.github.io/holidaze/"
                >
                  Live site
                  <FiExternalLink className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="sm:w-[380x] cursor-grab">
          <div className=" shadow-lg rounded-lg sm:h-[330px]">
            <Image
              src={trailsHikes}
              alt="Card Image"
              className="w-full h-48 object-cover rounded-t-lg"
              quality={100}
            />
            <div className="p-4 flex flex-col">
              <div className="flex-1">
                <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
                  Adventure-Trails-Hikes
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                  A responsive website for Adventure Trails Hikes a new business
                  offering hiking experiences in various countries.
                </p>
              </div>
              <div className="flex justify-between items-center py-3">
                <a href="https://github.com/Allawi465/Adventure-Trails-Hikes">
                  <ImGithub size={25} />
                </a>
                <Link
                  className="text-lightblue dark:text-sky-400 flex items-center"
                  href="https://allawi465.github.io/Adventure-Trails-Hikes/"
                >
                  Live site
                  <FiExternalLink className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="sm:w-[380x] cursor-grab">
          <div className="shadow-lg rounded-lg sm:h-[330px]">
            <Image
              src={auctionsSite}
              alt="Card Image"
              className="w-full h-48 object-cover rounded-t-lg"
              quality={100}
            />
            <div className="p-4 flex flex-col">
              <div className="flex-1">
                <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
                  NoxB
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                  An auction site where users can add items to be bid on and bid
                  on items other users have put up for auction.
                </p>
              </div>
              <div className="flex justify-between items-center py-3">
                <a href="https://github.com/Allawi465/Semester-Project-2">
                  <ImGithub size={25} />
                </a>
                <Link
                  className="text-lightblue dark:text-sky-400 flex items-center"
                  href="https://noxb.netlify.app/index.html"
                >
                  Live site
                  <FiExternalLink className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="sm:w-[380x] cursor-grab">
          <div className=" shadow-lg rounded-lg sm:h-[330px]">
            <Image
              src={notebookSite}
              alt="Card Image"
              className="w-full h-48 object-cover rounded-t-lg"
              quality={100}
            />
            <div className="p-4 flex flex-col">
              <div className="flex-1">
                <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
                  Notebook
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                  Eye-controlled virtual keyboard and calculator notebook for
                  disabled users.
                </p>
              </div>
              <div className="flex justify-between items-center py-3">
                <a href="https://github.com/Allawi465/notebook">
                  <ImGithub size={25} />
                </a>
                <Link
                  className="text-lightblue dark:text-sky-400 flex items-center"
                  href="https://allawi465.github.io/notebook/"
                >
                  Live site
                  <FiExternalLink className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySlider;
