import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import bus from "../../public/assests/hero image/business-planning-sketch-concept.png";

type Props = {};

const Description = (props: Props) => {
  return (
    <div className=" hidden  min-h-full 800px:flex items-center justify-center  p-8 bg-blue-600 rounded-2xl 800px:w-1/2 ">
      <div className="w-full  ">
        <div className="w-full ">
          <h1 className="text-4xl font-[700]  text-white">
            The simplest way to manage Your workforce
          </h1>
          <p className="text-xl font-[400] leading-10 text-white">
            Entre your credentials to access account
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <Image src={bus} alt="busnise" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Description;
