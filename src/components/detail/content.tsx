import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  return (
    <section className="flex justify-center">
      <div className="flex flex-col space-y-30 lg:w-[1050px] md:w-[680px] w-[315px]">
        <div className="flex flex-row justify-between items-center ">
          <div className="flex flex-col space-y-15">
            <div className="flex flex-col">
              <span className="text-[51px] font-[600]">Netflix Account</span>
              <span className="text-[#858584] text-[22px] font-[400]">
                Added on Dec 07, 2022
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#858584] text-[22px] font-[700]">
                Sold by
              </span>
              <div className="flex flex-row">
                <span className="text-[22px] font-[600]">PVL SHOP</span>
              </div>
            </div>
          </div>
          <div className="bg-[#3B3B3B] rounded-[20px] w-[295px] h-[178px] flex flex-col p-[10px] space-y-10 items-center justify-center">
            <button
              className="gradient-btn1 rounded-[20px] py-10 pz-[20px] w-full"
              onClick={() => router.push("/checkout")}
            >
              Add to cart
            </button>
            <button
              className="gradient-btn1 rounded-[20px] py-10 pz-[20px] w-full"
              onClick={() => router.push("/checkout")}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-15">
          <span>description</span>
          <span className="text-[#858584] text-[22px] font-[400]">
            {`Get your Netflix account for a fraction of the price! 
            Unlimited films, TV programs and more. 
            Watch anywhere. 
            You can watch as much as you want, whenever you want. 
            There's always something new to discover, and new TV programs and films are added every week! 
            Watch anywhere, anytime. Sign in with the Netflix account sent to your email to watch instantly on the web at netflix.com from your
            personal computer or on any internet-connected device that offers
            the Netflix app, including smart TVs, smartphones, tablets,
            streaming media players and game consoles. 
            
            You can also download your favorite programs with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`}
          </span>
        </div>
        <div className="fles flex-col space-y-10 justify-center items-center">
          <span>Details</span>
          <div className="flex flex-row space-x-10 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z"
                fill="#858584"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.6875 12C3.6875 11.4477 4.13522 11 4.6875 11H27.3125C27.8648 11 28.3125 11.4477 28.3125 12C28.3125 12.5523 27.8648 13 27.3125 13H4.6875C4.13522 13 3.6875 12.5523 3.6875 12Z"
                fill="#858584"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.6875 20C3.6875 19.4477 4.13522 19 4.6875 19H27.3125C27.8648 19 28.3125 19.4477 28.3125 20C28.3125 20.5523 27.8648 21 27.3125 21H4.6875C4.13522 21 3.6875 20.5523 3.6875 20Z"
                fill="#858584"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.3837 8.13841C12.5439 10.0995 12 12.8783 12 16.0002C12 19.1221 12.5439 21.9009 13.3837 23.862C13.8044 24.8443 14.2797 25.5753 14.7565 26.0462C15.229 26.5129 15.6481 26.6752 16 26.6752C16.3519 26.6752 16.771 26.5129 17.2435 26.0462C17.7203 25.5753 18.1956 24.8443 18.6163 23.862C19.4561 21.9009 20 19.1221 20 16.0002C20 12.8783 19.4561 10.0995 18.6163 8.13841C18.1956 7.15609 17.7203 6.42507 17.2435 5.95417C16.771 5.4875 16.3519 5.3252 16 5.3252C15.6481 5.3252 15.229 5.4875 14.7565 5.95417C14.2797 6.42507 13.8044 7.15609 13.3837 8.13841ZM13.3511 4.53118C14.075 3.81627 14.9712 3.3252 16 3.3252C17.0288 3.3252 17.9251 3.81627 18.6489 4.53118C19.3685 5.24186 19.9707 6.2206 20.4548 7.35104C21.4246 9.61551 22 12.6741 22 16.0002C22 19.3263 21.4246 22.3849 20.4548 24.6493C19.9707 25.7798 19.3685 26.7585 18.6489 27.4692C17.925 28.1841 17.0288 28.6752 16 28.6752C14.9712 28.6752 14.075 28.1841 13.3511 27.4692C12.6315 26.7585 12.0293 25.7798 11.5452 24.6493C10.5754 22.3849 10 19.3263 10 16.0002C10 12.6741 10.5754 9.61551 11.5452 7.35104C12.0293 6.2206 12.6315 5.24186 13.3511 4.53118Z"
                fill="#858584"
              />
            </svg>
            <span>Lifetime account available</span>
          </div>
          <div className="flex flex-row space-x-10 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z"
                fill="#858584"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.6875 12C3.6875 11.4477 4.13522 11 4.6875 11H27.3125C27.8648 11 28.3125 11.4477 28.3125 12C28.3125 12.5523 27.8648 13 27.3125 13H4.6875C4.13522 13 3.6875 12.5523 3.6875 12Z"
                fill="#858584"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.6875 20C3.6875 19.4477 4.13522 19 4.6875 19H27.3125C27.8648 19 28.3125 19.4477 28.3125 20C28.3125 20.5523 27.8648 21 27.3125 21H4.6875C4.13522 21 3.6875 20.5523 3.6875 20Z"
                fill="#858584"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.3837 8.13841C12.5439 10.0995 12 12.8783 12 16.0002C12 19.1221 12.5439 21.9009 13.3837 23.862C13.8044 24.8443 14.2797 25.5753 14.7565 26.0462C15.229 26.5129 15.6481 26.6752 16 26.6752C16.3519 26.6752 16.771 26.5129 17.2435 26.0462C17.7203 25.5753 18.1956 24.8443 18.6163 23.862C19.4561 21.9009 20 19.1221 20 16.0002C20 12.8783 19.4561 10.0995 18.6163 8.13841C18.1956 7.15609 17.7203 6.42507 17.2435 5.95417C16.771 5.4875 16.3519 5.3252 16 5.3252C15.6481 5.3252 15.229 5.4875 14.7565 5.95417C14.2797 6.42507 13.8044 7.15609 13.3837 8.13841ZM13.3511 4.53118C14.075 3.81627 14.9712 3.3252 16 3.3252C17.0288 3.3252 17.9251 3.81627 18.6489 4.53118C19.3685 5.24186 19.9707 6.2206 20.4548 7.35104C21.4246 9.61551 22 12.6741 22 16.0002C22 19.3263 21.4246 22.3849 20.4548 24.6493C19.9707 25.7798 19.3685 26.7585 18.6489 27.4692C17.925 28.1841 17.0288 28.6752 16 28.6752C14.9712 28.6752 14.075 28.1841 13.3511 27.4692C12.6315 26.7585 12.0293 25.7798 11.5452 24.6493C10.5754 22.3849 10 19.3263 10 16.0002C10 12.6741 10.5754 9.61551 11.5452 7.35104C12.0293 6.2206 12.6315 5.24186 13.3511 4.53118Z"
                fill="#858584"
              />
            </svg>
            <span>6 months account available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
