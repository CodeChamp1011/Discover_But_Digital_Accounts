/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import Image from "next/image";
import { HeaderIcons } from "@/assets/icons/_icons";

export default function Footer() {
  return (
    <section className="bg-black-gray flex justify-center ">
      <div className="h-[350px] w-[1440px] flex flex-col">
        <div className=" flex lg:flex-row sm:flex-col lg:justify-center sm:justify-start lg:items-center sm:items-start lg:space-x-35 space-x-0 space-y-35 py-25 lg:px-0 px-50">
          <div className="lg:w-[320px] md:w-full items-start">
            <Image
              className="h-[49px] w-[53px] max-h-[49px] max-w-[53px]"
              src={HeaderIcons.Logo}
              alt="logo"
            />
            <span className="text-gray-500 text-[16px] font-[400] text-center leading-3">
              PVL Shop - The best place to get online accounts for cheap
            </span>
          </div>
          <div className="flex flex-col space-y-25">
            <span className="text-[22px] font-[700]  text-center leading-3">
              Explore
            </span>
            <span className="text-gray-500 text-[16px] font-[400]  text-center leading-3">
              Marketplace
            </span>
            <span className="text-gray-500 text-[16px] font-[400]  text-center leading-3">
              How it works?
            </span>
            <span className="text-gray-500 text-[16px] font-[400]  text-center leading-3">
              Support
            </span>
          </div>
        </div>
        <hr className="bg-white border-w-[1px]" />
        <span className=" text-gray-500 text-[16px] font-[400] text-start mt-[10px]">
          Ⓒ All rights reserved, PVL Shop
        </span>
      </div>
    </section>
  );
}
