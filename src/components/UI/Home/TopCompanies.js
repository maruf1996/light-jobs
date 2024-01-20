/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Slider from "react-slick";

const images = [
  { id: 1, image: "/assets/jobs/emplogo1.jpg" },
  { id: 2, image: "/assets/jobs/emplogo2.jpg" },
  { id: 3, image: "/assets/jobs/emplogo3.jpg" },
  { id: 4, image: "/assets/jobs/emplogo4.jpg" },
  { id: 5, image: "/assets/jobs/emplogo5.jpg" },
  { id: 6, image: "/assets/jobs/emplogo6.jpg" },
  { id: 7, image: "/assets/jobs/emplogo7.jpg" },
  { id: 8, image: "/assets/jobs/emplogo8.jpg" },
  { id: 9, image: "/assets/jobs/emplogo9.jpg" },
  { id: 10, image: "/assets/jobs/emplogo10.jpg" },
];

const TopCompanies = () => {
  const [settings] = useState({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
  });

  return (
    <div className="lg:py-8 bg-gray-100">
      <section className="p-4 w-full lg:w-[90%] mx-auto ">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-gray-600 font-semibold">
            Here You Can See
          </h2>
          <h1 className="text-5xl text-gray-900 font-semibold mt-2">
            Top <span className="text-blue-600 font-normal">Employers?</span>
          </h1>
        </div>
        <Slider {...settings}>
          {images?.map((image) => (
            <img
              key={image?.id}
              className="rounded p-2"
              src={image?.image}
              alt=""
            />
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default TopCompanies;
