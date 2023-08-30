import React from "react";
import Image from "next/image";
import { DetailData } from "./detailData";

export default function Detail_Page() {
  return (
    <section className="flex j: DetailData tify-center flex-col w-full">
      <div>
        <Image
          src={DetailData.Netflix}
          alt="netflix"
          className="w-full md:h-[560px] h-auto"
        />
      </div>
    </section>
  );
}
