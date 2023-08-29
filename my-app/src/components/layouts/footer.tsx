/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import Image from "next/image";
import { HeaderIcons } from "@/assets/icons/_icons";

export default function Footer() {
  return (
    <>
      <div className="bg-black-gray flex flex-row w-full  justify-center items-center space-x-35 py-25">
        <div className="w-[320px] items-start">
          <Image
            className="h-[49px] w-[53px] max-h-[49px] max-w-[53px]"
            src={HeaderIcons.Logo}
            alt="logo"
          />
          <span className="text-[16px] font-[400] text-center leading-3">
            PVL Shop - The best place to get online accounts for cheap
          </span>
        </div>
        <div className="flex flex-col space-y-25">
          <span className="text-[22px] font-[700]  text-center leading-3">
            Explore
          </span>
          <span className="text-[16px] font-[400]  text-center leading-3">
            Marketplace
          </span>
          <span className="text-[16px] font-[400]  text-center leading-3">
            How it works?
          </span>
          <span className="text-[16px] font-[400]  text-center leading-3">
            Support
          </span>
        </div>
      </div>
    </>
  );
}
