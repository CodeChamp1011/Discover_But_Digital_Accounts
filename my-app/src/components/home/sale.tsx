import Image from "next/image";
// import { NftHighLight } from "@/assets/images/_images";

export default function Sale() {
  return (
    <section>
      <div
        style={{
          backgroundImage: "url(/NFT_Highlight.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh", // add this line
        }}
      ></div>
    </section>
  );
}
