import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "@/assets/icons/logo_white.png";

export default function Register() {
  const router = useRouter();
  return (
    <section className="gradient-bg-purple-reverse">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-60">
        <div className="flex justify-center">
          <Image
            src={Logo}
            alt="logo"
            className="md:w-full md:h-full h-[330px] w-[310px]"
          />
        </div>
        <div className="flex flex-col gap-40 justify-center">
          <div className=" text-white space-y-10 md:px-0 px-30">
            <p className="md:text-[51px] text-[38px] font-semibold">
              Create Account
            </p>
            <p className="md:text-[22px] text-[16px] font-normal lg:w-[430px] w-auto">
              Welcome! Enter Your Details And Start Buying Online Accounts For A
              Fraction Of The Price.
            </p>
          </div>
          <form>
            <div className="flex flex-col gap-20 md:px-0 px-30 md:w-[60%] lg:w-[37%]">
              <div id="username" className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-[20px] pointer-events-none">
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
                      fill="#BDBDBD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.0001 13.1244C8.57374 13.1244 7.17251 13.4999 5.93728 14.2131C4.70205 14.9264 3.67634 15.9522 2.96327 17.1875C2.79071 17.4865 2.40848 17.5889 2.10953 17.4164C1.81058 17.2438 1.70812 16.8616 1.88068 16.5626C2.70345 15.1373 3.88696 13.9536 5.31223 13.1306C6.7375 12.3077 8.3543 11.8744 10.0001 11.8744C11.6459 11.8744 13.2627 12.3077 14.688 13.1306C16.1132 13.9536 17.2968 15.1373 18.1195 16.5626C18.2921 16.8616 18.1896 17.2438 17.8907 17.4164C17.5917 17.5889 17.2095 17.4865 17.0369 17.1875C16.3239 15.9522 15.2982 14.9264 14.0629 14.2131C12.8277 13.4999 11.4265 13.1244 10.0001 13.1244Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  className="block rounded-[20px] py-[16px] pl-[52px] w-full text-sm text-gray-900 border border-gray-300 bg-gray-50 "
                  placeholder="Username"
                  required
                />
              </div>
              <div id="email" className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-[20px] pointer-events-none">
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
                      fill="#BDBDBD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.03928 3.95268C2.27253 3.69823 2.66788 3.68104 2.92233 3.91428L10 10.4021L17.0777 3.91428C17.3321 3.68104 17.7275 3.69823 17.9607 3.95268C18.194 4.20713 18.1768 4.60248 17.9223 4.83573L10.4223 11.7107C10.1834 11.9298 9.81663 11.9298 9.57768 11.7107L2.07768 4.83573C1.82323 4.60248 1.80604 4.20713 2.03928 3.95268Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  className="block rounded-[20px] w-full py-[16px] pl-[52px] text-sm text-gray-900 border border-gray-300 bg-gray-50 "
                  placeholder="Email Address"
                  required
                />
              </div>
              <div id="password" className="relative ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-[20px] pointer-events-none">
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
                      d="M10 10C9.48223 10 9.0625 10.4197 9.0625 10.9375C9.0625 11.4553 9.48223 11.875 10 11.875C10.5178 11.875 10.9375 11.4553 10.9375 10.9375C10.9375 10.4197 10.5178 10 10 10ZM7.8125 10.9375C7.8125 9.72938 8.79188 8.75 10 8.75C11.2081 8.75 12.1875 9.72938 12.1875 10.9375C12.1875 12.1456 11.2081 13.125 10 13.125C8.79188 13.125 7.8125 12.1456 7.8125 10.9375Z"
                      fill="#BDBDBD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 11.875C10.3452 11.875 10.625 12.1548 10.625 12.5V14.375C10.625 14.7202 10.3452 15 10 15C9.65482 15 9.375 14.7202 9.375 14.375V12.5C9.375 12.1548 9.65482 11.875 10 11.875Z"
                      fill="#BDBDBD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 7.5C2.5 6.80964 3.05964 6.25 3.75 6.25H16.25C16.9404 6.25 17.5 6.80964 17.5 7.5V16.25C17.5 16.9404 16.9404 17.5 16.25 17.5H3.75C3.05964 17.5 2.5 16.9404 2.5 16.25V7.5ZM16.25 7.5H3.75V16.25H16.25V7.5Z"
                      fill="#BDBDBD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 1.875C9.41984 1.875 8.86344 2.10547 8.4532 2.5157C8.04297 2.92594 7.8125 3.48234 7.8125 4.0625V6.875C7.8125 7.22018 7.53268 7.5 7.1875 7.5C6.84232 7.5 6.5625 7.22018 6.5625 6.875V4.0625C6.5625 3.15082 6.92466 2.27648 7.56932 1.63182C8.21398 0.987164 9.08832 0.625 10 0.625C10.9117 0.625 11.786 0.987164 12.4307 1.63182C13.0753 2.27648 13.4375 3.15082 13.4375 4.0625V6.875C13.4375 7.22018 13.1577 7.5 12.8125 7.5C12.4673 7.5 12.1875 7.22018 12.1875 6.875V4.0625C12.1875 3.48234 11.957 2.92594 11.5468 2.5157C11.1366 2.10547 10.5802 1.875 10 1.875Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  className="block rounded-[20px] w-full py-[16px] pl-[52px] text-sm text-gray-900 border border-gray-300 bg-gray-50 "
                  placeholder="Password"
                  required
                />
              </div>
              <div id="confirm_password" className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-[20px] pointer-events-none">
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
                      d="M10 10C9.48223 10 9.0625 10.4197 9.0625 10.9375C9.0625 11.4553 9.48223 11.875 10 11.875C10.5178 11.875 10.9375 11.4553 10.9375 10.9375C10.9375 10.4197 10.5178 10 10 10ZM7.8125 10.9375C7.8125 9.72938 8.79188 8.75 10 8.75C11.2081 8.75 12.1875 9.72938 12.1875 10.9375C12.1875 12.1456 11.2081 13.125 10 13.125C8.79188 13.125 7.8125 12.1456 7.8125 10.9375Z"
                      fill="#BDBDBD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 11.875C10.3452 11.875 10.625 12.1548 10.625 12.5V14.375C10.625 14.7202 10.3452 15 10 15C9.65482 15 9.375 14.7202 9.375 14.375V12.5C9.375 12.1548 9.65482 11.875 10 11.875Z"
                      fill="#BDBDBD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 7.5C2.5 6.80964 3.05964 6.25 3.75 6.25H16.25C16.9404 6.25 17.5 6.80964 17.5 7.5V16.25C17.5 16.9404 16.9404 17.5 16.25 17.5H3.75C3.05964 17.5 2.5 16.9404 2.5 16.25V7.5ZM16.25 7.5H3.75V16.25H16.25V7.5Z"
                      fill="#BDBDBD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 1.875C9.41984 1.875 8.86344 2.10547 8.4532 2.5157C8.04297 2.92594 7.8125 3.48234 7.8125 4.0625V6.875C7.8125 7.22018 7.53268 7.5 7.1875 7.5C6.84232 7.5 6.5625 7.22018 6.5625 6.875V4.0625C6.5625 3.15082 6.92466 2.27648 7.56932 1.63182C8.21398 0.987164 9.08832 0.625 10 0.625C10.9117 0.625 11.786 0.987164 12.4307 1.63182C13.0753 2.27648 13.4375 3.15082 13.4375 4.0625V6.875C13.4375 7.22018 13.1577 7.5 12.8125 7.5C12.4673 7.5 12.1875 7.22018 12.1875 6.875V4.0625C12.1875 3.48234 11.957 2.92594 11.5468 2.5157C11.1366 2.10547 10.5802 1.875 10 1.875Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  className="block rounded-[20px] w-full py-[16px] pl-[52px] text-sm text-gray-900 border border-gray-300 bg-gray-50 "
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white mt-15 gradient-btn1  text-center text-[16px] font-semibold h-[46px] rounded-[20px] mb-35"
                onClick={() => router.push("/login")}
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
