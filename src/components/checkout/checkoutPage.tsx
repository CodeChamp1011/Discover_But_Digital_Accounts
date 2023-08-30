import React, { useState } from "react";
import { Data, ImageData } from "./checkout_data";
import Image from "next/image";
import Logo from "@/assets/icons/logo_white.png";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function CheckoutPage() {
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
            Proceed to Checkout
          </p>
          <p className="md:text-[22px] text-[16px] font-normal">
            Secure checkout sample text - all transactions are processed safely
            and encrypted etc
          </p>
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
                  : "text-[#858584] py-20 border-b-0 md:mx-[100px] mx-20 "
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
            <div className="gradient-bg-purple flex flex-col items-center justify-center py-60">
              <div className="grid grid-cols-1 gap-30 md:grid-cols-2 lg:grid-cols-3 lg:w-[1050px] md:w-[680px] w-[315px] ">
                {Data.map((item, index) => (
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
              <div className="border border-dashed rounded-[30px] gradient-bg-purple  lg:w-[1050px] md:w-full w-full h-[529px] mt-[100px] pt-[21px] px-[52px] pb-[52px]">
                <div className="flex flex-row w-full justify-around items-center md:mx-[30px] mx-0">
                  <div className="flex flex-col justify-center items-center">
                    <span className="text-white text-[52px] font-[600]">
                      10.00$
                    </span>
                    <span className="text-white text-[18px] font-[400]">
                      Pay by bank card
                    </span>
                    <div className="flex flex-col w-full mt-[10px] justify-center items-center">
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="h-[68px] w-100% block md:w-[500px] w-auto rounded-[10px] px-20 bg-white border border-gray-500 text-gray"
                      />
                      <input
                        type="text"
                        placeholder="Email Address"
                        className="h-[68px] w-100% block md:w-[500px] w-auto   rounded-[10px] px-20 bg-white border border-gray-500 text-gray mt-[10px]"
                      />
                    </div>
                    <hr className="bg-white border-white-[1px] w-full mt-[30px]" />
                    <div className="flex flex-col mt-[30px] w-full">
                      <span className="text-[12px] font-[400] text-white">
                        Other Payment Methods
                      </span>
                      <div className="grid grid-cols-4 gap-30  w-full mt-[30px]">
                        <button className="bg-black p-[10px] rounded-[10px] flex justify-center items-center">
                          <Image src={ImageData.Apple} alt="apple" />
                        </button>
                        <button className="bg-[#6461FC] p-[10px] rounded-[10px] flex justify-center items-center">
                          <Image src={ImageData.Stripe} alt="stripe" />
                        </button>
                        <button className="bg-[#CCECFF] p-[10px] rounded-[10px] flex justify-center items-center">
                          <Image src={ImageData.Paypal} alt="paypal" />
                        </button>
                        <button className="bg-[#FF7E00] p-[10px] rounded-[10px] flex justify-center items-center">
                          <Image src={ImageData.Crypto} alt="crypto" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex hidden justify-center items-center">
                    <Image
                      src={ImageData.Pul}
                      alt="pvl"
                      className="w-[314px] h-[350px] min-w-[314px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="gradient-btn1 text-white w-[238px] h-[51px] rounded-[20px] mt-[30px]">
                  Proceed!
                </button>
              </div>
            </div>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </section>
  );
}
