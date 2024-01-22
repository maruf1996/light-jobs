/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Footer from "../UI/Shared/Footer";
import Header from "../UI/Shared/Header";
import Sidebar from "../UI/Shared/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-cover bg-center w-full h-[8rem] lg:h-[12rem] relative z-0">
        <img
          src="/assets/loginBanner.jpg"
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover contrast-50"
        />
        <div className="text-white flex justify-between items-center absolute inset-0 w-[90%] lg:w-[80%] mx-auto">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p>
            {" "}
            <Link className="" href="/">
              Home
            </Link>{" "}
            / Dashboard
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row min-h-screen py-5 px-3 lg:py-12 lg:px-20 space-y-4 space-x-4">
        <div className="w-full md:w-[28%] lg:w-[20%]">
          <Sidebar></Sidebar>
        </div>
        <div className="w-full md:w-[72%] lg:w-[80%]">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
