/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import { useUserSignupMutation } from "@/redux/features/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userSignup] = useUserSignupMutation();
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const registerData = {
        email,
        phoneNumber,
        password,
        name: {
          firstName,
          lastName,
        },
      };
      const res = await userSignup(registerData);
      if (res) {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error logging in user:", error.message);
    }
    setEmail("");
    setPhoneNumber("");
    setFirstName("");
    setLastName("");
    setPassword("");
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
          <h1 className="text-4xl font-bold">Signup</h1>
          <p>
            {" "}
            <Link className="" href="/">
              Home
            </Link>{" "}
            / Signup
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-2 md:mt-8 lg:mt-11">
        <div className="flex flex-col w-[96%] md:w-[60%] lg:w-[40%] mx-auto p-6 rounded-md sm:p-10 bg-white  text-gray-900 border">
          <div className="text-center">
            <h1 className="my-3 text-gray-700 text-2xl font-bold">
              Signup Or Login{" "}
            </h1>
          </div>
          <form onSubmit={handleSignIn}>
            <div className="form-control w-full grid grid-cols-1 lg:grid-cols-2 !important lg:gap-4">
              <div className="">
                <label className="label">
                  <span className="label-text font-semibold">First Name</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input w-full input-bordered"
                  required
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text font-semibold">Last Name</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="input w-full input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="from_email"
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
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
                name="from_name"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input w-full input-bordered"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full btn text-white bg-[#5A2BEF] hover:bg-gray-700 lg:mt-8 mt-5 px-9"
            >
              Signup
            </button>
          </form>
          <p className="mt-6 text-center">
            {" "}
            Already have an account!{" "}
            <Link className="text-blue-900" href="/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

Register.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
