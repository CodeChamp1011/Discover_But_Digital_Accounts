import React, { useState } from "react";
import { MarketList } from "./market_data";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "@/assets/icons/logo_white.png";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function MarketPlace() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("account_type");
  const data = [
    {
      label: "Account Types",
      value: "account_type",
      badgeValue: "248",
    },
    {
      label: "Collections",
      value: "collections",
      badgeValue: "67",
    },
  ];
  return (
    <section className="flex justify-center flex-col w-full">
      <div className=" w-full flex justify-center">
        <div className="text-white lg:w-[1050px] md:w-[680px] w-[315px] py-80 flex flex-col justify-center gap-5">
          <p className="md:text-[51px] text-[28px] font-semibold">
            Browse Marketplace
          </p>
          <p className="md:text-[22px] text-[16px] font-normal">
            Browse through more than 240+ account types on the account
            marketplace.
          </p>
          <div className="relative mt-20">
            <input
              type="text"
              placeholder="Search for the one you want"
              className="h-60 block w-full rounded-2xl px-20 bg-transparent border border-gray-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute top-1/2 transform -translate-y-1/2 right-15" // position it at center vertically and a little bit inside from the right edge
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.875 3.75C6.93997 3.75 3.75 6.93997 3.75 10.875C3.75 14.81 6.93997 18 10.875 18C14.81 18 18 14.81 18 10.875C18 6.93997 14.81 3.75 10.875 3.75ZM2.25 10.875C2.25 6.11154 6.11154 2.25 10.875 2.25C15.6385 2.25 19.5 6.11154 19.5 10.875C19.5 15.6385 15.6385 19.5 10.875 19.5C6.11154 19.5 2.25 15.6385 2.25 10.875Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.9135 15.9133C16.2064 15.6204 16.6813 15.6204 16.9742 15.9133L21.5304 20.4695C21.8233 20.7624 21.8233 21.2373 21.5304 21.5302C21.2375 21.8231 20.7627 21.8231 20.4698 21.5302L15.9135 16.9739C15.6206 16.681 15.6206 16.2062 15.9135 15.9133Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <Tabs
        value={activeTab}
        className="justify-center items-center flex flex-col"
      >
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 md:w-[1050px] w-auto"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none flex justify-center items-center",
          }}
        >
          {data.map(({ label, value, badgeValue }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value
                  ? "text-white py-20 border-b border-white-100 md:mx-[100px] mx-20"
                  : "text-[#858584] py-20 border-b-0 md:mx-[100px] mx-20"
              }
            >
              <div className="flex flex-row md:w-full w-max gap-10">
                {label}
                <div className="bg-[#858584] text-white rounded-[20px] w-[40px] min-w-[40px] justify-center items-center flex">
                  {badgeValue}
                </div>
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          <TabPanel key="account_type" value="account_type">
            <div className="bg-[#3B3B3B] flex justify-center py-60">
              <div
                className="grid grid-cols-1 gap-30 md:grid-cols-2 lg:grid-cols-3 lg:w-[1050px] md:w-[680px] w-[315px]"
                data-aos="fade-right"
              >
                {MarketList.map((item, index) => (
                  <div key={index} onClick={() => router.push("/detail")}>
                    <Image alt="" src={item.image} />
                    <div className="px-30 py-20 text-white space-y-25">
                      <div>
                        <p className="text-[22px] font-semibold">
                          {item.title}
                        </p>
                        <p className=" gap-10 flex items-center text-[16px] text-white/70">
                          <Image alt="logo" src={Logo} className="w-[20px]" />
                          PVL Shop
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-white space-y-10">
                          <p className="text-[12px] font-normal text-[#858584]">
                            {item.month}
                          </p>
                          <p className="text-[16px] font-normal">
                            {item.price_month}
                          </p>
                        </div>
                        <div className="text-white  space-y-10">
                          <p className="text-[12px] font-normal text-[#858584]">
                            {item.lifetime}
                          </p>
                          <p className="text-[16px] font-normal">
                            {item.price_life}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </section>
  );
}
