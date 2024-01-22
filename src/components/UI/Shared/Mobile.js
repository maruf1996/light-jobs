import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Mobile = ({ navLinks, open, setOpen }) => {
  const [email, setEmail] = useState();

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      const { role, email } = userInfo;
      // setRole(role);
      setEmail(email);
    }
  }, []);

  const mobileMenuClass = open
    ? "flex flex-col fixed right-0 top-0 w-[100%] md:w-[100%] ease-in-out duration-500 bg-gray-800 h-full z-10 !important"
    : "fixed right-[-100%]";

  return (
    <div className="lg:hidden">
      <div onClick={() => setOpen(!open)} className={mobileMenuClass}>
        <div className="bg-gray-50 p-4 h-12 lg:h-16 flex justify-between items-center">
          <div className=" font-bold">
            <Link href="/">Light Jobs</Link>
          </div>
          <div onClick={() => setOpen(!open)}>
            <AiOutlineClose size={23} />
          </div>
        </div>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id} className="py-3 ml-4 border-b-2">
              <Link href={link.link} className="w-full block">
                <span className="py-4 uppercase text-gray-50 text-sm tracking-wide">
                  {link.title}
                </span>
              </Link>
            </li>
          ))}
          {!email ? (
            <li className="py-3 ml-4 border-b-2">
              <Link href="/login" className="w-full block">
                <span className="py-4 uppercase text-gray-50 text-sm tracking-wide">
                  Login
                </span>
              </Link>
            </li>
          ) : (
            <>
              <li className="py-3 ml-4 border-b-2">
                <Link href="/login" className="w-full block">
                  <span className="py-4 uppercase text-gray-50 text-sm tracking-wide">
                    My Jobs
                  </span>
                </Link>
              </li>
              <li className="py-3 ml-4 border-b-2">
                <Link href="/login" className="w-full block">
                  <span className="py-4 uppercase text-gray-50 text-sm tracking-wide">
                    Edit Profile
                  </span>
                </Link>
              </li>
              <li className="py-3 ml-4 border-b-2">
                <Link href="/login" className="w-full block">
                  <span className="py-4 uppercase text-gray-50 text-sm tracking-wide">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li className="py-3 ml-4 border-b-2">
                <Link href="/login" className="w-full block">
                  <span className="py-4 uppercase text-gray-50 text-sm tracking-wide">
                    Logout
                  </span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Mobile;
