/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import Image from "next/image";
import { HeaderIcons } from "@/assets/icons/_icons";

export default function Footer() {
  return (
    <section className="bg-black-gray flex justify-center lg:px-[255px] px-20">
      <div className="h-[550px] w-full flex flex-col mt-50">
        <div className=" flex lg:flex-row flex-col lg:justify-between sm:justify-start lg:items-center sm:items-start lg:space-x-35 space-x-0 space-y-35 py-25 lg:px-0 px-50">
          <div className="lg:w-[320px] md:w-full items-start pace-y-25">
            <Image
              className="h-[49px] w-[53px] max-h-[49px] max-w-[53px]"
              src={HeaderIcons.Logo}
              alt="logo"
            />
            <span className="text-gray-500 text-[16px] font-[400] text-center">
              PVL Shop - The best place to get online accounts for cheap
            </span>
          </div>
          <div className="flex flex-col space-y-25 items-start">
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
          <div className="flex flex-col space-y-25 items-start">
            <span className="text-[22px] font-[700]  text-center leading-3">
              Join Our Weekly Digest
            </span>
            <span className="text-gray-500 text-[16px] font-[400]  text-center leading-3">
              Get exclusive promotions & updates straight to your inbox.
            </span>
            <div className="bg-white rounded-[20px] flex flex-row justify-between items-center pl-30 mt-[20px]">
              <span className="text-[#000000] min-w-max md:mr-5 mr-5">
                Enter your email here
              </span>
              <div className="flex flex-row justify-center items-center gradient-btn p-[10px] rounded-[20px] text-center gap-15">
                <span className="text-[#FFFFFF] w-[100px]">Subscribe</span>
              </div>
            </div>
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
