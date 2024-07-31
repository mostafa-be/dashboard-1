import Image from "next/image";
import React from "react";
import { styles } from "../../../app/styles/style";
import Link from "next/link";

type Props = {
  setAuth: (auth: number) => void;
};

const ForgotPassword = ({ setAuth }: Props) => {
  return (
    <div className="w-full h-full bg-transparent 800px:w-1/2">
      <div className="w-full h-full flex flex-col items-center justify-center px-6 800px:px-20">
        <div className="w-full">
          <h1 className="text-lg 800px:text-2xl text-black font-[500] capitalize">
            Reset your password
          </h1>
          <p className="text-gray-800 text-sm font-[400]">
            Enter your email address to reset your password. You&apos;ll receive
            an email containing a secure link to reset it
          </p>
        </div>

        <div className="w-full mt-10 ">
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
        </div>
        <div className="w-full mt-5">
          <div className="w-full rounded-[20px] flex items-center justify-center py-3 text-white bg-blue-600">
            <span className="text-sm font-[600]">Submit</span>
          </div>
        </div>
        <div className="w-full mt-5">
          <span className="text-sm font-[500] text-black">
            Have an account ?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setAuth(1)}
            >
              Log in
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
