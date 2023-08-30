import { ItemsData } from "./detailData";
import Image from "next/image";
export default function Items() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col mt-55">
        <div className="flex md:flex-row flex-col justify-between w-full ">
          <span className="text-[38px] font-[600]">More Items</span>
          <div className=" border-purple border-2 flex justify-center items-center rounded-[20px] px-[30px] py-[5px]">
            Go To Explore Page
          </div>
        </div>
        <div className="grid grid-cols-1 md:gap-30 gap-55 md:grid-cols-2 lg:grid-cols-3 lg:w-[1050px] md:w-[680px] w-[315px] mt-55">
          {ItemsData.map((item, key) => (
            <div key={key}>
              <div className="bg-[#3B3B3B] rounded-[20px] h-[469px] flex flex-col">
                <Image src={item.image} alt={item.title} className=" w-auto" />
                <div className="flex flex-col px-[20px]">
                  <span className="text-[22px] font-[600]">{item.title}</span>
                  <span className="text-[16px] font-[400]">{item.Solder}</span>
                </div>
                <div className="flex flex-row px-[20px] justify-between mt-[50px]">
                  <div className="flex flex-col">
                    <span className="text-[12px] text-[#858584] font-[400]">
                      Price 6 months
                    </span>
                    <span className="text-[16px] font-[400]">
                      {item.first_price}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] text-[#858584] font-[400]">
                      Lifetime price
                    </span>
                    <span className="text-[16px] font-[400]">
                      {item.Lifetime_Price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
