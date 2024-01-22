import Link from "next/link";
import { FaBriefcase, FaClipboardUser } from "react-icons/fa6";

const dashboardLinks = [
  { id: 1, title: "Dashboard", link: "", icon: <FaClipboardUser size={16} /> },
  { id: 2, title: "View Job", link: "", icon: <FaBriefcase size={16} /> },
  { id: 3, title: "Applied Job", link: "", icon: <FaBriefcase size={16} /> },
  { id: 4, title: "Manage Company", link: "", icon: <FaBriefcase size={16} /> },
  { id: 5, title: "Manage Blog", link: "", icon: <FaBriefcase size={16} /> },
  { id: 6, title: "Manage Admin", link: "", icon: <FaBriefcase size={16} /> },
];

const Sidebar = () => {
  return (
    <div className="lg:h-screen p-3 space-y-2 w-full bg-white text-gray-600">
      <div className="divide-y divide-gray-300">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          {dashboardLinks?.map((link) => (
            <li key={link?.id} className="hover:bg-blue-600 hover:text-gray-50">
              <Link
                href={link?.link}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <span className="text-gray-400">{link?.icon}</span>
                <span className="mt-1">{link?.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="pt-4 pb-2 space-y-1 text-sm">
          <li>
            <button className="flex items-center p-2 space-x-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current text-gray-400"
              >
                <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                <rect width="32" height="64" x="256" y="232"></rect>
              </svg>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
