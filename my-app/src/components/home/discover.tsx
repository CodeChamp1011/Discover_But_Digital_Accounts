import Image from "next/image";
import { DigestImage } from "@/assets/images/_images";

export default function Discover() {
  return (
    <section>
      <div className="flex flex-col py-55 lg:px-[255px] md:px-50 px-0">
        <div className="bg-[#3B3B3B] p-[60px] rounded-[20px] w-full flex md:flex-row flex-col justify-center items-center md:h-[350px] min-h-fit gap-40">
          <Image src={DigestImage.Digest} alt="digest" />
          <div className="flex flex-col">
            <span className="text-[38px] font-[680]">
              Join Our Weekly Digest
            </span>
            <span>
              Get Exclusive Promotions & Updates Straight To Your inbox.
            </span>
            <div className="bg-white rounded-[20px] flex flex-row justify-between items-center pl-30 mt-[20px]">
              <span className="text-[#000000] min-w-max md:mr-5 mr-5">
                Enter your email here
              </span>
              <div className="flex flex-row justify-center items-center gradient-btn p-[10px] rounded-[20px] text-center gap-15">
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
        </div>
      </div>
    </section>
  );
}
