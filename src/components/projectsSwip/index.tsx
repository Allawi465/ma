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

const MySlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={'auto'}
    >
      <SwiperSlide>
        <div className="w-[330x] sm:w-[380x]">
          <div className=" shadow-lg rounded-lg">
            <Image
              src={eCommerceSite}
              alt="Card Image"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
                Buyers.
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                An e-commerce store built with React, Bootstrap, sass and
                rest-api
              </p>
              <Link
                className="text-lightblue dark:text-sky-400 after:content-['_↗'] flex justify-end"
                href="https://buyers.netlify.app/"
              >
                Live site
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[330x] sm:w-[380x]">
          <div className=" shadow-lg rounded-lg">
            <Image
              src={bookingSite}
              alt="Card Image"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
                Holidaze
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                A front-end application for a booking site called Holidaze built
                with React, Bootstrap, sass and rest-api
              </p>
              <Link
                className="text-lightblue dark:text-sky-400 after:content-['_↗'] flex justify-end"
                href="https://allawi465.github.io/holidaze/"
              >
                Live site
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[330x] sm:w-[380x]">
          <div className=" shadow-lg rounded-lg">
            <Image
              src={auctionsSite}
              alt="Card Image"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
                NoxB
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                An auction site where users can add items to be bid on and bid
                on items other users have put up for auction.
              </p>
              <Link
                className="text-lightblue dark:text-sky-400 after:content-['_↗'] flex justify-end"
                href="https://noxb.netlify.app/index.html"
              >
                Live site
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[330x] sm:w-[380x]">
          <div className=" shadow-lg rounded-lg">
            <Image
              src={notebookSite}
              alt="Card Image"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
                Notebook
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                Eye-controlled virtual keyboard and calculator notebook for
                disabled users.
              </p>
              <Link
                className="text-lightblue dark:text-sky-400 after:content-['_↗'] flex justify-end"
                href="https://allawi465.github.io/notebook/"
              >
                Live site
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySlider;
