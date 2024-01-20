/* eslint-disable @next/next/no-img-element */

const Overview = () => {
  return (
    <div className="lg:py-6 bg-white">
      <section className="p-4 w-full lg:w-[85%] mx-auto ">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-gray-600 font-semibold">
            Here You Can See
          </h2>
          <h1 className="text-5xl text-gray-900 font-semibold mt-2">
            How It <span className="text-blue-600 font-normal">Works?</span>
          </h1>
        </div>
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
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
  <div className="flex flex-col justify-center lg:p-2 align-middle">
    <img className="w-[30%] mx-auto" src={imageSrc} alt="" />
    <h1 className="text-center text-2xl font-bold mt-3">{title}</h1>
    <p className="text-center mt-2">{description}</p>
  </div>
);

export default Overview;
