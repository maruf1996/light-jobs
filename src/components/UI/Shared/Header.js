/* eslint-disable @next/next/no-img-element */
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaBriefcase,
  FaClipboardUser,
  FaPencil,
  FaRegCalendarXmark,
} from "react-icons/fa6";
import Mobile from "./Mobile";

const navLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Jobs", link: "/jobs" },
  { id: 3, title: "About us", link: "/about" },
  { id: 4, title: "Contact", link: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      const { role, email } = userInfo;
      setRole(role);
      setEmail(email);
    }
  }, []);

  const handleLogout = (accessToken) => {
    removeUserInfo(accessToken);
    window.location.reload();
  };

  return (
    <header className="shadow-xl bg-gray-50">
      <div className="">
        <div
          className={`p-2 container flex flex-row lg:flex-row justify-between items-center h-16 lg:h-18 mx-auto`}
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
              {!email && (
                <li>
                  <Link
                    href="/login"
                    className="flex w-full items-center uppercase px-4 text-sm tracking-wide font-bold"
                  >
                    Login
                  </Link>
                </li>
              )}

              <li className="inline-flex items-center divide-x">
                <Link
                  href=""
                  className="px-4 py-2 bg-blue-600 text-white rounded-l-full hover:text-black"
                >
                  Post a Job
                </Link>
                <Link
                  href=""
                  className="px-4 py-2 bg-gray-500 text-white rounded-r-full hover:text-black"
                >
                  Find a Job
                </Link>
              </li>
              {role === "applicant" && (
                <li>
                  <div className="dropdown dropdown-hover dropdown-bottom dropdown-end ml-3">
                    <img
                      alt=""
                      className="w-10 h-10 rounded-full ri ri bg-gray-500 ri ri border-4 border-gray-200 tabIndex={0}"
                      src="https://www.sharjeelanjum.com/html/jobs-portal/images/candidates/01.jpg"
                    />
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 text-gray-600"
                    >
                      <li>
                        <Link
                          href="/dashboard"
                          className="flex items-center p-2 space-x-3 rounded-md"
                        >
                          <span className="text-gray-400">
                            {" "}
                            <FaClipboardUser size={16} />
                          </span>
                          <span className="mt-1">Dashboard</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href=""
                          className="flex items-center p-2 space-x-3 rounded-md"
                        >
                          <span className="text-gray-400">
                            {" "}
                            <FaPencil size={16} />
                          </span>
                          <span className="mt-1">My Profile</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href=""
                          className="flex items-center p-2 space-x-3 rounded-md"
                        >
                          <span className="text-gray-400">
                            {" "}
                            <FaBriefcase size={16} />
                          </span>
                          <span className="mt-1">Edit Resume</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href=""
                          className="flex items-center p-2 space-x-3 rounded-md"
                        >
                          <span className="text-gray-400">
                            {" "}
                            <FaBriefcase size={16} />
                          </span>
                          <span className="mt-1">My Application</span>
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLogout("accessToken")}
                          className="flex items-center p-2 space-x-3 rounded-md"
                        >
                          <span className="text-gray-400">
                            {" "}
                            <FaRegCalendarXmark size={16} />
                          </span>
                          <span className="mt-1">Logout</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div className="lg:hidden font-bold text-xl text-blue-600">
            Light Jobs
          </div>
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
