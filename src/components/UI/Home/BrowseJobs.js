import Link from "next/link";
import { FaPlay } from "react-icons/fa6";

const links = [
  { id: 1, title: "Web Design" },
  { id: 2, title: "Web Development" },
  { id: 3, title: "Wordpress Design" },
  { id: 4, title: "App Design" },
  { id: 5, title: "App Development" },
  { id: 6, title: "Softwar Development" },
  { id: 7, title: "Softwar Design" },
  { id: 8, title: "Front End Development" },
  { id: 9, title: "Back End Development" },
  { id: 10, title: "Full End Development" },
  { id: 11, title: "Laravel Developer" },
  { id: 12, title: "Product Design" },
  { id: 13, title: "Graphic Design" },
  { id: 14, title: "Seo Customization" },
  { id: 15, title: "UI/UX Designer" },
];

const BrowseJobs = () => {
  return (
    <div className="w-full lg:w-[85%] px-4 py-8 mx-auto   lg:px-8 lg:py-16">
      <h1 className="text-2xl font-semibold mb-2">Browse Jobs By</h1>
      <div className=" bg-white p-4 lg:p-8 border-t-4 border-[#5A2BEF]">
        <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {links?.map((link) => (
            <Link key={link?.id} href="">
              <li className="flex hover:text-[#5A2BEF] font-semibold items-center space-x-1">
                <FaPlay size={10} />
                <span className="mt-1">{link?.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BrowseJobs;
