/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import Image from "next/image";
import { HeaderIcons } from "@/assets/icons/_icons";

export default function Footer() {
  return (
    <section className="bg-black-gray flex justify-center lg:px-[255px] px-20">
      <div className="h-[600px] w-full flex flex-col mt-50">
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
            <span className="text-gray-500 text-[16px] font-[400]  md:text-center text-left leading-3">
              Get exclusive promotions & updates straight to your inbox.
            </span>
            <div className="bg-white rounded-[20px] flex flex-row md:justify-between justify-center items-center pl-30 lg:py-0 py-10 mt-[20px] w-full">
              <span className="text-[#000000] min-w-max md:mr-5 mr-5">
                Enter your email here
              </span>
              <div className="lg:flex hidden flex-row justify-center items-center gradient-btn p-[10px] rounded-[20px] text-center gap-15 w-auto cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.875 4.375C1.875 4.02982 2.15482 3.75 2.5 3.75H17.5C17.8452 3.75 18.125 4.02982 18.125 4.375V15C18.125 15.3315 17.9933 15.6495 17.7589 15.8839C17.5245 16.1183 17.2065 16.25 16.875 16.25H3.125C2.79348 16.25 2.47554 16.1183 2.24112 15.8839C2.0067 15.6495 1.875 15.3315 1.875 15V4.375ZM3.125 5V15H16.875V5H3.125Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.03928 3.95268C2.27253 3.69823 2.66788 3.68104 2.92233 3.91428L10 10.4021L17.0777 3.91428C17.3321 3.68104 17.7275 3.69823 17.9607 3.95268C18.194 4.20713 18.1768 4.60248 17.9223 4.83573L10.4223 11.7107C10.1834 11.9298 9.81663 11.9298 9.57768 11.7107L2.07768 4.83573C1.82323 4.60248 1.80604 4.20713 2.03928 3.95268Z"
                    fill="white"
                  />
                </svg>
                <span className="text-[#FFFFFF] w-[100px] ">Subscribe</span>
              </div>
            </div>
            <div className="lg:hidden flex flex-row justify-center items-center gradient-btn p-[10px] rounded-[20px] text-center gap-15 lg:w-auto w-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.875 4.375C1.875 4.02982 2.15482 3.75 2.5 3.75H17.5C17.8452 3.75 18.125 4.02982 18.125 4.375V15C18.125 15.3315 17.9933 15.6495 17.7589 15.8839C17.5245 16.1183 17.2065 16.25 16.875 16.25H3.125C2.79348 16.25 2.47554 16.1183 2.24112 15.8839C2.0067 15.6495 1.875 15.3315 1.875 15V4.375ZM3.125 5V15H16.875V5H3.125Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.03928 3.95268C2.27253 3.69823 2.66788 3.68104 2.92233 3.91428L10 10.4021L17.0777 3.91428C17.3321 3.68104 17.7275 3.69823 17.9607 3.95268C18.194 4.20713 18.1768 4.60248 17.9223 4.83573L10.4223 11.7107C10.1834 11.9298 9.81663 11.9298 9.57768 11.7107L2.07768 4.83573C1.82323 4.60248 1.80604 4.20713 2.03928 3.95268Z"
                  fill="white"
                />
              </svg>
              <span className="text-[#FFFFFF] w-[100px]">Subscribe</span>
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
