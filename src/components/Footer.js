/* eslint-disable no-octal-escape */
import React from "react";
import { logoLightText, react, sakshxm08, tailwind } from "../assets";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="w-screen bg-black">
      {/* <Link
        to="/seller"
        className="w-full bg-black flex items-center justify-center pt-10"
      >
        <span className="w-fit text-white text-sm mx-auto px-10 py-2 border border-green-600 hover:bg-green-600 transition-all cursor-pointer">
          Become a seller?
        </span>
      </Link> */}
      <div className=" text-[#949494] flex flex-wrap flex-col sm:flex-row  py-8 mobile:py-14 font-titleFont px-8 md:px-10  lg:px-20 xl:px-40 gap-8 lg:gap-12  justify-between">
        <div className="flex flex-col gap-4">
          <img src={logoLightText} className="w-48 sm:w-60" alt="wearworx" />
          <span className="text-lg">by</span>

          <div className="flex items-center gap-4 w-fit">
            <img src={sakshxm08} alt="sakshxm08" className="w-12" />
            <Link
              to="https://sakshxm08.in"
              target="_blank"
              className="text-2xl group font-extrabold hover:text-green-600 transition-all font-bodyFont flex flex-col gap- w-fit"
            >
              @sakshxm08
              <span className="whitespace-nowrap text-green-600 text-xs transition-all group-hover:tracking-widest duration-200">
                Saksham Gambhir
              </span>
            </Link>
          </div>
        </div>
        <div className=" text-right text-white pt-4  gap-2  sm:gap-0 flex flex-col items-start min-[780px]:items-end justify-between ">
          <h2 className="text-base mobile:text-lg font-semibold font-titleFont ">
            Contact
          </h2>
          <div className="font-bodyFont mobile:text-base text-sm flex flex-col gap-2 font-extralight items-start min-[780px]:items-end">
            <div className=" flex items-start min-[780px]:items-end">
              Phone : +91 9xxxxxxxx0
            </div>
            <div className=" flex items-start min-[780px]:items-end">
              Email : wearworx@sakshxm08.in
            </div>
          </div>
          <div className="flex gap-4 text-base pt-4">
            <span className="cursor-pointer rounded-full border border-gray-100 text-gray-100 p-2 hover:border-gray-400 hover:text-gray-400 transition-all duration-200 ">
              {/* <Link to="https://www.instagram.com/wear_worx/">
                <FaInstagram />
              </Link> */}
              <span>
                <FaInstagram />
              </span>
            </span>
            <span className="cursor-pointer rounded-full border border-gray-100 text-gray-100 p-2 hover:border-gray-400 hover:text-gray-400 transition-all duration-200">
              <FaFacebookF />
            </span>
          </div>
        </div>
      </div>
      <div className="h-fit   w-full relative flex justify-center items-center mb-10">
        <div className="w-5/6 mobile:w-11/12 xl:w-4/5 bg-gradient-to-br from-green-500 to-green-800  text-white px-6 lg:px-10 gap-6 lg:gap-10 text-center h-fit py-6 rounded-lg mobile:rounded-xl shadow-lg  flex flex-col md:flex-row justify-center md:justify-around items-center">
          <span className="font-titleFont text-2xl mobile:text-3xl lg:text-4xl font-bold ">
            Have feedback about the website?
          </span>
          <span className="font-titleFont text-base lg:text-lg font-light">
            Interested in working together? We should queue up a time to chat.
          </span>
          <Link to="https://sakshxm08.in/#contact" target="_blank">
            <button className="bg-transparent border-2 mobile:border-4 hover:bg-green-300 duration-200 hover:text-sky-950  border-green-300 rounded-full whitespace-nowrap px-8 py-2 text-base mobile:text-lg lg:text-xl font-titleFont ">
              Let's do this !
            </button>
          </Link>
        </div>
      </div>

      <div className="font-titleFont mobile:text-xl font-light flex flex-col items-center justify-center gap-8 dark:text-sky-100 pb-10">
        <div className="flex sm:flex-row flex-col sm:items-start items-center justify-center gap-1 mobile:gap-2 text-white">
          Handcrafted by{" "}
          <Link
            className="after:w-full flex flex-col after:h-[1px] after:bg-green-600  sm:gap-2 after:scale-x-0 hover:after:scale-x-100 after:duration-200 duration-200 text-green-400 hover:text-green-600  "
            to="https://sakshxm08.in"
            target="_blank"
          >
            @sakshxm08
          </Link>
          <span className="text-sm sm:text-xl">&copy;twentytwentythree</span>
        </div>
        <div className="flex gap-2 flex-col sm:flex-row justify-center items-center">
          <div className="w-fit flex items-center h-full justify-center gap-2 bg-sky-800 text-white px-4 py-0 mobile:py-1 rounded text-xs">
            Made with
            <Link to="https://react.dev/">
              <img src={react} className="h-6" alt="React" />
            </Link>
          </div>
          <div className="w-fit flex items-center h-full justify-center py-1 mobile:py-2 gap-2 bg-white text-black px-4 rounded text-xs">
            Styled with
            <Link to="https://tailwindcss.com/">
              <img src={tailwind} className="h-3" alt="TailwindCSS" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
