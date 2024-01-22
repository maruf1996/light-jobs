/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { FaRegCirclePlay } from "react-icons/fa6";

const Video = () => {
  return (
    <div className="bg-cover bg-center h-[22rem] lg:h-[28rem] relative z-0">
      <img
        src="/assets/banner-2.jpg"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover contrast-50"
      />
      <div className="absolute w-[98%] lg:w-[55%] mx-auto inset-0 flex flex-col items-center justify-center p-4 lg:p-0 text-center ">
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="lg:text-2xl text-gray-10 font-semibold text-white">
            Here You Can See
          </h2>
          <h1 className="text-3xl lg:text-5xl text-gray-100 font-semibold mt-2">
            Watch Our <span className="text-[#5A2BEF]">Video</span>
          </h1>
          <p className="text-white font-semibold my-8">
            Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac
            condimentum. Vestibulum congue posuere lacus, id tincidunt nisi
            porta sit amet. Suspendisse et sapien varius, pellentesque dui non,
            semper orci.
          </p>
          <div className="w-ful flex justify-center items-center ">
            <Link href="" className="text-gray-200 text-3xl inline-block">
              <FaRegCirclePlay className="" size={75} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
