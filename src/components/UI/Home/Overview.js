/* eslint-disable @next/next/no-img-element */

const Overview = () => {
  return (
    <div className="py-4 lg:py-8 bg-white">
      <section className="p-3 lg:p-4 w-full lg:w-[85%] mx-auto ">
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="lg:text-2xl text-gray-600 font-semibold">
            Here You Can See
          </h2>
          <h1 className="text-3xl lg:text-5xl text-gray-900 font-semibold mt-2">
            How It <span className="text-blue-600 font-normal">Works?</span>
          </h1>
        </div>
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {renderFeature(
            "/assets/user.png",
            "Create An Account",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua."
          )}
          {renderFeature(
            "/assets/job.png",
            "Search Desired Job",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua."
          )}
          {renderFeature(
            "/assets/resume.png",
            "Send Your Resume",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua."
          )}
        </div>
      </section>
    </div>
  );
};

const renderFeature = (imageSrc, title, description) => (
  <div className="flex lg:flex-col justify-center lg:p-2 items-center space-x-4 lg:file:space-x-0 bg-gray-50 lg:bg-white shadow-lg lg:shadow-none p-2">
    <img
      className="w-[5rem] h-[5rem] lg:h-full lg:w-[30%] mx-auto"
      src={imageSrc}
      alt=""
    />
    <div className="">
      <h1 className="lg:text-center lg:text-2xl font-bold mt-3">{title}</h1>
      <p className="lg:text-center mt-2">{description}</p>
    </div>
  </div>
);

export default Overview;
