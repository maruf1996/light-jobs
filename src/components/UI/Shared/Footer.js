import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-[#272727] text-gray-100">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/6">
          <Link href="/" className="flex  space-x-3 justify-start">
            <span className="self-center text-1xl lg:text-xl font-bold uppercase">
              Light Jobs
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-5/6 sm:grid-cols-3">
          {[
            {
              title: "Quick Links",
              links: [
                "Create Account",
                "Edit Resume",
                "Post a Job",
                "About Us",
                "Contact Us",
              ],
            },
            {
              title: "Jobs By Industry",
              links: [
                "Information Technology Jobs",
                "Onsite Jobs",
                "Intern Jobs",
                "Remote Jobs",
                "Anyhere Jobs",
              ],
            },
            {
              title: "Social Media",
              links: [
                { title: "Facebook", link: "#" },
                { title: "Twitter", link: "#" },
                { title: "Instagram", link: "#" },
                { title: "Linkdin", link: "#" },
              ],
            },
          ].map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className="uppercase font-bold text-1xl">{section.title}</h3>
              <ul className="space-y-2 text-xs">
                {section.links.map((link, linkIndex) => (
                  <li
                    className="text-[.9rem] text-gray-300 hover:text-blue-500"
                    key={linkIndex}
                  >
                    <a rel="noopener noreferrer" href="#">
                      {link.title || link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">
        © 2023 Light Jobs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
