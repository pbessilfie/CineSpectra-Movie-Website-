import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/prop-types
const Register = ({ registered, setRegistered, iconColor, btnHover }) => {
  const [toggleFormChange, setToggleFormChange] = useState(true);

  return (
    <div
      className="bg-[rgba(0,0,0,0.7)] h-screen w-screen absolute top-0 left-0 flex justify-center items-center cursor-pointer "
      onScroll={null}
    >
      {/* sign in form */}
      <div
        className={`${
          toggleFormChange
            ? "min-w-[300px] xl:w-[400px] min-h-[300px] lg:w-[400px] md:w-[380px] sm:w-[300px] flex flex-col justify-center items-center  rounded-lg  p-10 backdrop-blur-lg bg-[rgba(255,255,255,0.5)] "
            : "hidden"
        }`}
      >
        <h2 className="text-white font-bold text-2xl font-primary mb-10">
          Welcome back!
        </h2>
        <div className="w-full ">
          <form className="w-full flex flex-col justify-between ">
            <div className="flex flex-col  w-full h-[50px] justify-between mb-8">
              <label className="text-sm text-primaryColor">EMAIL ADDRESS</label>
              <input
                required
                name="email"
                type="email"
                placeholder="name@email.com"
                className="rounded-md border-2 focus:outline-none focus:border-blue-500  px-2 text-primaryColor font-primary"
              />
            </div>
            <div className="flex flex-col  w-full h-[50px] justify-between mb-8">
              <label className="text-sm text-primaryColor">PASSWORD</label>
              <input
                required
                name="email"
                type="password"
                placeholder="Password"
                className="rounded-md border-2 focus:outline-none focus:border-blue-500  px-2 text-primaryColor font-primary"
              />
            </div>
            <div className="text-md mb-2 flex justify-between px-2">
              <div className="w-[46%] flex justify-between">
                {" "}
                <input required type="checkbox" />
                <label className="text-white font-primary">Remember me</label>
              </div>
              <Link className="text-primaryColor">Forgot password?</Link>
            </div>
            <button className="bg-primaryColor text-white font-medium px-6 py-2  rounded-md  hover:bg-white hover:text-primaryColor transition-all duration-200">
              Login
            </button>
            <div className="text-white flex justify-center">
              <h3>
                Don't have an account?{" "}
                <button
                  className="text-sm text-primaryColor hover:underline hover:underline-offset-4"
                  onClick={(e) => {
                    setToggleFormChange(!toggleFormChange), e.preventDefault();
                  }}
                >
                  Register
                </button>{" "}
                or{" "}
                <Link
                  href="/"
                  className="text-sm text-primaryColor hover:underline hover:underline-offset-4"
                >
                  Verify
                </Link>
              </h3>
            </div>
          </form>
        </div>
        <button
          className={`bg-white p-2 rounded-full absolute -right-4 -top-4 ${btnHover} `}
          onClick={() => {
            setRegistered(!registered);
          }}
        >
          <FaTimes className={`${iconColor} hover:text-white`} />
        </button>
      </div>

      {/* sign up form section */}
      <div
        className={`${
          !toggleFormChange
            ? "min-w-[320px] xl:w-[400px] min-h-[300px] lg:w-[400px] md:w-[380px] sm:w-[35 0px] flex flex-col justify-center items-center  rounded-lg  p-10 backdrop-blur-lg bg-[rgba(255,255,255,0.5)] "
            : "hidden"
        }`}
      >
        <h2 className="text-white font-bold text-2xl font-primary mb-10">
          Create an Account
        </h2>
        <div className="w-full ">
          <form className="w-full flex flex-col justify-between">
            <div className="flex flex-col  w-full h-[50px] justify-between mb-8">
              <label className="text-sm text-primaryColor">YOUR NAME</label>
              <input
                required
                name="text"
                type="text"
                placeholder="Name"
                className="rounded-md border-2 focus:outline-none focus:border-blue-500  px-2 text-primaryColor font-primary"
              />
            </div>
            <div className="flex flex-col  w-full h-[50px] justify-between mb-8">
              <label className="text-sm text-primaryColor">EMAIL ADDRESS</label>
              <input
                required
                name="email"
                type="email"
                placeholder="name@email.com"
                className="rounded-md border-2 focus:outline-none focus:border-blue-500  px-2 text-primaryColor font-primary"
              />
            </div>
            <div className="flex flex-col  w-full h-[50px] justify-between mb-8">
              <label className="text-sm text-primaryColor">PASSWORD</label>
              <input
                required
                name="password"
                type="password"
                placeholder="Password"
                className="rounded-md border-2 focus:outline-none focus:border-blue-500  px-2 text-primaryColor font-primary"
              />
            </div>
            <div className="flex flex-col  w-full h-[50px] justify-between mb-8">
              <label className="text-sm text-primaryColor">
                CONFIRM PASSWORD
              </label>
              <input
                required
                name="password"
                type="password"
                placeholder="Confirm Password"
                className="rounded-md border-2 focus:outline-none focus:border-blue-500  px-2 text-primaryColor font-primary"
              />
            </div>

            <button className="bg-primaryColor text-white font-medium px-6 py-2  rounded-md  hover:bg-white hover:text-primaryColor transition-all duration-200 mb-2">
              Register
            </button>
            <div className="text-white flex justify-center">
              <h3>
                Have an account?{" "}
                <button
                  className="text-sm text-primaryColor hover:underline hover:underline-offset-4"
                  onClick={(e) => {
                    setToggleFormChange(!toggleFormChange), e.preventDefault();
                  }}
                >
                  Login
                </button>{" "}
              </h3>
            </div>
          </form>
        </div>
        <button
          className={`bg-white p-2 rounded-full absolute -right-4 -top-4 ${btnHover} `}
          onClick={() => {
            setRegistered(!registered);
          }}
        >
          <FaTimes className={`${iconColor} hover:text-white`} />
        </button>
      </div>
    </div>
  );
};

export default Register;
