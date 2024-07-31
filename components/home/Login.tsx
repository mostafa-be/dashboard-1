"use client";
import React, { useState } from "react";
import google_svg from "../../public/assests/google.svg";
import apple_svg from "../../public/assests/apple.svg";
import { styles } from "../../../app/styles/style";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

type Props = {
  setAuth: (auth: number) => void;
};

const Login = ({ setAuth }: Props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full h-full bg-transparent 800px:w-1/2">
      <div className="w-full h-full flex flex-col items-center justify-center px-6 800px:px-20">
        <div className="w-full">
          <h1 className="text-lg 800px:text-2xl text-black font-[500] capitalize">
            get started now
          </h1>
          <p className="text-gray-800 text-sm font-[400]">
            Enter your credentials to access account
          </p>
        </div>
        <div className="w-full mt-5 flex flex-wrap 800px:flex 800px:flex-nowrap items-center justify-center gap-7">
          <div className="w-full shadow-sm px-2 py-3 border border-blue-200/[0.1] flex items-center justify-center gap-4 rounded-lg cursor-pointer">
            <Image
              src={google_svg}
              alt="logo google-svg"
              className="w-5 h-5 object-cover"
            />
            <span className="text-sm text-black font-[500] capitalize">
              log in with google
            </span>
          </div>
          <div className="w-full shadow-sm px-2 py-3 border border-blue-200/[0.1] flex items-center justify-center gap-4 rounded-lg cursor-pointer">
            <Image
              src={apple_svg}
              alt="logo apple-svg"
              className="w-5 h-5 object-cover"
            />
            <span className="text-sm text-black font-[500] capitalize">
              log in with apple
            </span>
          </div>
        </div>
        <div className="w-full flex items-center gap-2 my-5">
          <hr className="w-[35%] m-0" />
          <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white w-[30%] mb-3">
            Or Join With
          </h5>
          <hr className="w-[35%] m-0" />
        </div>
        <div className="w-full ">
          <div className="w-full">
            <label className={`${styles.label}`} htmlFor="email">
              Enter Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className={` ${styles.input} mt-1.5`}
            />
          </div>
          <div className="w-full mt-5 relative mb-1">
            <label className={`${styles.label}`} htmlFor="email">
              Enter Your Password
            </label>
            <input
              type={!show ? "password" : "text"}
              id="password"
              placeholder="password!@%"
              className={` ${styles.input} mt-1.5`}
            />
            {!show ? (
              <AiOutlineEyeInvisible
                className="absolute bottom-3 right-2 z-1 cursor-pointer"
                size={20}
                onClick={() => setShow(true)}
              />
            ) : (
              <AiOutlineEye
                className="absolute bottom-3 right-2 z-1 cursor-pointer"
                size={20}
                onClick={() => setShow(false)}
              />
            )}
          </div>
        </div>
        <div className="w-full flex items-center py-2 justify-end">
          <span
            className="text-sm font-[500] text-blue-600 cursor-pointer"
            onClick={() => setAuth(2)}
          >
            Forgot password?
          </span>
        </div>
        <div className="w-full flex items-center gap-3">
          <input
            type="checkbox"
            name="agrre"
            id="agrre"
            className=" outline-none w-4 h-4 rounded-lg border-4 border-black"
          />
          <span className="text-sm text-black font-[400]">
            {" "}
            I agree to the{" "}
            <Link href={"/terms&priavcy"} className="">
              {" "}
              Terms & Poriavcy
            </Link>{" "}
          </span>
        </div>
        <div className="w-full mt-5">
          <div className="w-full rounded-[20px] flex items-center justify-center py-3 text-white bg-blue-600">
            <span className="text-sm font-[600]">Login</span>
          </div>
        </div>
        <div className="w-full mt-5">
          <span className="text-sm font-[500] text-black">
            Have an account ?{" "}
            <span className="text-blue-600 cursor-pointer">sign in</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
