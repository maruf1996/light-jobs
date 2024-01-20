/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Mobile from "./Mobile";

const navLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Jobs", link: "/jobs" },
  { id: 3, title: "About us", link: "/about" },
  { id: 4, title: "Contact", link: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const user = { name: "", email: "" };

  return (
    <header className="shadow-xl bg-gray-50">
      <div className="">
        <div
          className={`p-2 container flex flex-row lg:flex-row justify-between items-center h-12 md:h-16 lg:h-18 mx-auto`}
        >
          <Link
            href="/"
            className="hidden lg:block font-bold text-3xl text-blue-600"
          >
            Light Jobs
          </Link>
          <div className="hidden lg:flex">
            <ul className="lg:flex items-center space-x-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.link}
                    className="flex w-full items-center uppercase px-4 text-sm tracking-wide font-bold"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="inline-flex items-center divide-x">
                <Link
                  href=""
                  type="button"
                  className="px-4 py-3 bg-blue-600 text-white rounded-l-full"
                >
                  Post a Job
                </Link>
                <Link
                  href=""
                  type="button"
                  className="px-4 py-3 bg-gray-500 text-white rounded-r-full"
                >
                  Find a Job
                </Link>
              </li>
              {user?.email ? (
                <li>
                  <Link
                    href="/login"
                    className="flex w-full items-center uppercase px-4 text-sm tracking-wide font-bold"
                  >
                    Login
                  </Link>
                </li>
              ) : (
                <li>
                  <img
                    alt=""
                    className="w-9 h-9 rounded-full ri ri bg-gray-500 ri ri border-4 border-gray-200"
                    src="https://www.sharjeelanjum.com/html/jobs-portal/images/candidates/01.jpg"
                  />
                </li>
              )}
            </ul>
          </div>
          <div className="lg:hidden font-bold">Light Jobs</div>
          <div className="lg:hidden">
            <div onClick={() => setOpen(!open)} className="block lg:hidden">
              {open ? (
                <AiOutlineClose size={23} />
              ) : (
                <AiOutlineMenu size={23} />
              )}
            </div>
          </div>
        </div>

        {/* mobile ul  */}
        <Mobile navLinks={navLinks} open={open} setOpen={setOpen}></Mobile>
      </div>
    </header>
  );
};

export default Header;
