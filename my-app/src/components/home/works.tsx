import Image from "next/image";
import { WorksData } from "@/assets/images/_images";

export default function Works() {
  return (
    <section>
      <div className="flex flex-col py-55 px-[255px]">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col ">
            <div className="flex flex-col w-[510px] min-w-max">
              <span className="text-[38px] font-[600]">How it works</span>
              <span className="text-[22px] font-[400] mt-[20px]">
                Find out how to get started
              </span>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-35 justify-center items-center mt-[20px]">
          {WorksData.map((item, key) => (
            <div
              key={key}
              className="bg-[#3B3B3B] p-[10px] rounded-[20px] w-full h-full min-w-[250px] min-h-[250px] flex justify-center items-center"
            >
              <div className="flex flex-col  p-20 items-center gap-20">
                <Image
                  src={item.url}
                  alt={item.title}
                  width={120}
                  height={120}
                />
                <div className="flex flex-col justify-center items-center">
                  <span className="text-[22px] font-[600]">{item.title}</span>
                  <div className="gap-10">
                    <span>{item.subTitle}</span>
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
