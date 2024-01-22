import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
const LatestJob = () => {
  const [jobdata, setJobata] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./data.json");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setJobata(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="py-4 lg:py-8">
      <section className="p-3 md:p-4 w-full lg:w-[85%] mx-auto ">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="lg:text-2xl text-gray-600 font-semibold">
            Here You Can See
          </h2>
          <h1 className="text-3xl lg:text-5xl text-gray-900 font-semibold mt-2">
            Featured <span className="text-blue-600 font-normal">Jobs</span>
          </h1>
        </div>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobdata?.map((job) => (
            <div
              key={job?.id}
              className="flex flex-col md:flex-row justify-between  items-center bg-white rounded pb-8 md:p-4"
            >
              <div className="flex flex-col md:flex-row md:space-x-4">
                <img
                  className="w-full md:w-[4rem] md:h-[4rem]"
                  src={job?.companyLogo}
                  alt=""
                />
                <div className="">
                  <h1 className="text-[1.1rem] font-bold mt-3">{job?.title}</h1>
                  <p className="text-blue-500 mt-1">{job?.company}</p>
                  <div className="flex justify-center md:justify-normal space-x-1 mt-2">
                    <p
                      className={`
                      ${job?.jobType === "Freelance" && "bg-[#FF0000]"}
                      ${job?.jobType === "Full Time" && "bg-[#F8A60C]"}
                      ${job?.jobType === "Part-time" && "bg-[#6ACA00]"}
                      text-white py-1 px-3 text-xs
                    `}
                    >
                      {job?.jobType}
                    </p>{" "}
                    <p>- {job?.location}</p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <button className="border border-blue-400 text-blue-500 font-semibold py-1 px-3 hover:bg-blue-500 hover:text-white">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LatestJob;
