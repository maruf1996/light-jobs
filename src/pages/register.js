/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import { loginUser } from "@/redux/features/userSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { user, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, phone, password }));
    } catch (error) {
      console.error("Error logging in user:", error.message);
    }
    setEmail("");
    setPhone("");
    setPassword("");
  };

  if (user?.email) {
    router.push("/");
  }

  return (
    <div className="min-h-screen mb-2 md:mb-8 lg:mb-12 bg-[#F1F5F9]">
      <div className="bg-cover bg-center w-full h-[8rem] lg:h-[12rem] relative z-0">
        <img
          src="/assets/loginBanner.jpg"
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover contrast-50"
        />
        <div className="text-white flex justify-between items-center absolute inset-0 w-[90%] lg:w-[80%] mx-auto">
          <h1 className="text-4xl font-bold">Login</h1>
          <p>
            {" "}
            <Link className="" href="/">
              Home
            </Link>{" "}
            / JobName
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-2 md:mt-8 lg:mt-11">
        <div className="flex flex-col w-[96%] md:w-[60%] lg:w-[40%] mx-auto p-6 rounded-md sm:p-10 bg-white  text-gray-900 border">
          <div className="text-center">
            <h1 className="my-3 text-gray-700 text-2xl font-bold">
              Register Or Login{" "}
            </h1>
          </div>
          <form onSubmit={handleSignIn}>
            <div className="form-control w-full flex flex-row !important space-x-4">
              <div className="">
                <label className="label">
                  <span className="label-text font-semibold">First Name</span>
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
              <div className="">
                <label className="label">
                  <span className="label-text font-semibold">Last Name</span>
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
                name="from_name"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input w-full input-bordered"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full btn text-white bg-blue-700 hover:bg-gray-700 lg:mt-8 mt-5 px-9"
            >
              Submit
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
