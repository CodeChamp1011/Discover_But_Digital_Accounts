import React, { useState } from "react";
import { MarketList } from "./market_data";
import Image from "next/image";
import Logo from "@/assets/icons/logo_white.png";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function MarketPlace() {
  const [activeTab, setActiveTab] = useState("account_type");
  const data = [
    {
      label: "Account Types",
      value: "account_type",
    },
    {
      label: "Collections",
      value: "collections",
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
          <input
            type="text"
            placeholder="Search for the one you want"
            className="h-60 block mt-20 rounded-2xl px-20 bg-transparent border border-gray-500"
          />
        </div>
      </div>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 "
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value
                  ? "text-white py-20"
                  : "text-[#858584] py-20"
              }
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          <TabPanel key="account_type" value="account_type">
            <div className="bg-[#3B3B3B] flex justify-center py-60">
              <div className="grid grid-cols-1 gap-30 md:grid-cols-2 lg:grid-cols-3 lg:w-[1050px] md:w-[680px] w-[315px] ">
                {MarketList.map((item, index) => (
                  <div key={index}>
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
