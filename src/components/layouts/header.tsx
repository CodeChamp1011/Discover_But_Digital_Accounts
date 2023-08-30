/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState } from "react";
import Image from "next/image";
import { HeaderIcons } from "@/assets/icons/_icons";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-black-gray flex flex-row justify-between items-center py-[25px] lg:px-[50px] md:px-30 px-30 ">
        <div
          className="flex flex-row justify-center items-center space-x-15"
          onClick={() => router.push("/")}
        >
          <Image
            className="h-[49px] w-[53px] max-h-[49px] max-w-[53px]"
            src={HeaderIcons.Logo}
            alt="logo"
          />
          <span className="text-[24px] font-[700] text-center leading-3">
            PVL
          </span>
          <span className="text-[24px] font-[700] text-center leading-3">
            Account
          </span>
          <span className="text-[24px] font-[700] text-center leading-3">
            Shop
          </span>
        </div>
        <div className="lg:flex hidden flex-row justify-center items-center space-x-35">
          <span
            className="text-[16px] font-[600] text-center leading-3 cursor-pointer"
            onClick={() => router.push("/market")}
          >
            Marketplace
          </span>
          <span className="text-[16px] w-full font-[600] text-center leading-3">
            About Us
          </span>
          <span className="text-[16px] font-[600] text-center leading-3">
            Carts
          </span>
          <button className="flex flex-row w-[150px] min-w-[150px]  gradient-btn rounded-[15px] h-[50px] gap-[12px] px-5 py-0 items-center justify-center" onClick={()=>router.push('/signup')}>
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
                d="M10 3.125C7.58375 3.125 5.625 5.08375 5.625 7.5C5.625 9.91625 7.58375 11.875 10 11.875C12.4162 11.875 14.375 9.91625 14.375 7.5C14.375 5.08375 12.4162 3.125 10 3.125ZM4.375 7.5C4.375 4.3934 6.8934 1.875 10 1.875C13.1066 1.875 15.625 4.3934 15.625 7.5C15.625 10.6066 13.1066 13.125 10 13.125C6.8934 13.125 4.375 10.6066 4.375 7.5Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.99998 13.1244C8.57362 13.1244 7.17239 13.4999 5.93716 14.2131C4.70193 14.9264 3.67622 15.9522 2.96315 17.1875C2.79059 17.4865 2.40836 17.5889 2.10941 17.4164C1.81046 17.2438 1.708 16.8616 1.88056 16.5626C2.70333 15.1373 3.88684 13.9536 5.31211 13.1306C6.73738 12.3077 8.35418 11.8744 9.99998 11.8744C11.6458 11.8744 13.2626 12.3077 14.6879 13.1306C16.1131 13.9536 17.2966 15.1373 18.1194 16.5626C18.292 16.8616 18.1895 17.2438 17.8906 17.4164C17.5916 17.5889 17.2094 17.4865 17.0368 17.1875C16.3237 15.9522 15.298 14.9264 14.0628 14.2131C12.8276 13.4999 11.4263 13.1244 9.99998 13.1244Z"
                fill="white"
              />
            </svg>
            <span
              className="items-center text-[16px] font-[600] leading-3"
            >
              Sign Up
            </span>
          </button>
        </div>
        <div className="relative lg:hidden sm:inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 6C3 5.58579 3.33579 5.25 3.75 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H3.75C3.33579 6.75 3 6.41421 3 6Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 18C3 17.5858 3.33579 17.25 3.75 17.25H15C15.4142 17.25 15.75 17.5858 15.75 18C15.75 18.4142 15.4142 18.75 15 18.75H3.75C3.33579 18.75 3 18.4142 3 18Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 p-10`}
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => router.push("/market")}
              >
                MarketPlace
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                About Us
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => router.push("/detail")}
              >
                Cart
              </a>
              <a
                href="#"
                className="block px-4 pt-10 text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => router.push("/signup")}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
