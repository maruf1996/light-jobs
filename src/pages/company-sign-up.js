/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import { useAddCompanyMutation } from "@/redux/features/companyApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CompanyRegister = () => {
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [size, setSize] = useState("");
  const [numberOfEmployees, setnumberOfEmployees] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");
  const [website, setWebsite] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [introducing, setIntroducing] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();
  const [addCompany] = useAddCompanyMutation();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const options = {
        data: {
          name,
          industry,
          location,
          description,
          website,
          logoUrl,
          size,
          password,
          numberOfEmployees,
          introducing,
          socialMedia: {
            twitter,
            linkedin,
            facebook,
          },
          contact: {
            email,
            phone,
            address,
          },
        },
      };
      const res = await addCompany(options);
      if (res) {
        router.push("/login");
      }
      console.log(options);
    } catch (error) {
      console.error("Error logging in user:", error.message);
    }
    setName("");
    setIndustry("");
    setLocation("");
    setAddress("");
    setSize("");
    setnumberOfEmployees("");
    setEmail("");
    setPassword("");
    setPhone("");
    setTwitter("");
    setLinkedin("");
    setFacebook("");
    setWebsite("");
    setLogoUrl("");
    setIntroducing("");
    setDescription("");
  };

  return (
    <div className="min-h-screen mb-2 md:mb-8 lg:mb-12 bg-[#F1F5F9]">
      <div className="bg-cover bg-center w-full h-[8rem] lg:h-[12rem] relative z-0">
        <img
          src="/assets/loginBanner.jpg"
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover contrast-50"
        />
        <div className="text-white flex justify-between items-center absolute inset-0 w-[90%] lg:w-[80%] mx-auto">
          <h1 className="text-4xl font-bold">Sign Up For Company</h1>
          <p>
            {" "}
            <Link className="" href="/">
              Home
            </Link>{" "}
            / Sign Up For Company
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-2 md:mt-8 lg:mt-12">
        <div className="flex flex-col w-[96%] md:w-[96%] lg:w-[90%] mx-auto p-6 rounded-md  bg-white  text-gray-900 border">
          <div className="text-center">
            <h1 className="my-3 text-gray-700 text-2xl font-bold">
              Sign Up For Your Company
            </h1>
          </div>
          <form className="space-y-4 lg:space-y-8" onSubmit={handleSignIn}>
            <div className=" border p-6 rounded-md">
              <h1 className="text-[1.2rem]">Company Information</h1>
              <div className="form-control w-full grid grid-cols-1 lg:grid-cols-3 !important gap-4">
                <div className="">
                  <label className="label">
                    <span className="label-text font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input w-full input-bordered "
                    required
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text font-semibold">Industry</span>
                  </label>
                  <input
                    type="text"
                    name="industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="input w-full input-bordered "
                    required
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text font-semibold">Location</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input w-full input-bordered "
                    required
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text font-semibold">Address</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="input w-full input-bordered "
                    required
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text font-semibold">Size</span>
                  </label>

                  <select
                    name="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    required
                    className="select select-bordered w-full"
                  >
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Number Of Employees
                    </span>
                  </label>
                  <input
                    type="text"
                    name="numberOfEmployees"
                    value={numberOfEmployees}
                    onChange={(e) => setnumberOfEmployees(e.target.value)}
                    className="input w-full input-bordered "
                    required
                  />
                </div>
              </div>
            </div>
            <div className="border p-6 rounded-md">
              <h1 className="text-[1.2rem]">Contact Information</h1>
              <div className="form-control w-full grid grid-cols-1 lg:grid-cols-3 !important gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input w-full input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">Phone</span>
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="input w-full input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input w-full input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">Twitter</span>
                  </label>
                  <input
                    type="text"
                    name="twitter"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    className="input w-full input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">Linkedin</span>
                  </label>
                  <input
                    type="text"
                    name="linkedin"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    className="input w-full input-bordered "
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">Facebook</span>
                  </label>
                  <input
                    type="text"
                    name="facebook"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                    className="input w-full input-bordered "
                    required
                  />
                </div>
              </div>
            </div>
            <div className="border p-6 rounded-md ">
              <h1 className="text-[1.2rem]">Others</h1>
              <div className="form-control w-full grid grid-cols-1 lg:grid-cols-3 !important gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">Website</span>
                  </label>
                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="input w-full input-bordered "
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">LogoUrl</span>
                  </label>
                  <input
                    type="text"
                    name="logoUrl"
                    value={logoUrl}
                    onChange={(e) => setLogoUrl(e.target.value)}
                    className="input w-full input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Introducing
                    </span>
                  </label>
                  <input
                    type="text"
                    name="introducing"
                    value={introducing}
                    onChange={(e) => setIntroducing(e.target.value)}
                    className="input w-full input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Description
                    </span>
                  </label>
                  <textarea
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="textarea textarea-bordered w-full"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="btn text-white bg-[#5A2BEF] hover:bg-gray-700 mt-5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegister;

CompanyRegister.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
