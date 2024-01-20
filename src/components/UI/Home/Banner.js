/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaBriefcase, FaUserLarge } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="bg-cover bg-center h-[30rem] lg:h-[98vh] relative z-0">
      <img
        src="/assets/banner.jpg"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover contrast-50"
      />
      <div className="absolute w-[98%] lg:w-[55%] mx-auto inset-0 flex flex-col items-center justify-center p-4 lg:p-0 text-center text-white">
        <h1
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="text-2xl md:text-2xl font-bold uppercase"
        >
          One million success stories. Start yours today.
        </h1>
        <p className="mt-2">
          Find Your Favorite Jobs, Employment & Career Opportunities
        </p>
        <div className="mt-12 space-x-4 flex">
          <Link
            href=""
            type="button"
            className="px-8 py-3 font-bold border hover:border-none rounded flex space-x-2 hover:bg-[#17D27C]"
          >
            <FaBriefcase size={18} /> <span>Post Your Job</span>
          </Link>
          <Link
            href=""
            type="button"
            className="px-8 py-3 font-bold border hover:border-none rounded flex space-x-2 hover:bg-[#17D27C]"
          >
            <FaUserLarge size={18} /> <span>Search Jobs</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
