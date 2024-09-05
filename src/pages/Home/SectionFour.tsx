import storeImage from "../../assets/home-page/store-image.jpg";
import ContactForm from "../../components/Home/ContactForm";
import SocialLinks from "../../components/Home/SocialLinks";

const SectionFour = () => {
  return (
    <div className="h-auto flex border-b border-black">
      <div className="w-1/2 flex flex-col border-r border-black">
        <div className="flex flex-col gap-4 p-[4.5rem] w-full h-1/2">
          <h2 className="font-[semibold] text-[3rem]">To Contact Us</h2>
          <div className="flex flex-col gap-2">
            <p className="font-[medium] text-base">We will call you back</p>
            <ContactForm
              formStyle={"flex gap-2 bg-red-50"}
              inputStyle={
                "p-4 outline-none border border-[#d2d2d7] font-[medium] w-1/2"
              }
              buttonStyle={
                "bg-black uppercase text-white font-[medium] w-1/2 cursor-pointer"
              }
              inputPlaceholder={"+380 XX XXX XX XX"}
              buttonValue={"Book a Call"}
            />
          </div>
        </div>
        <div className="w-full h-1/2 border-t border-black flex">
          <div className="w-1/2 flex flex-col h-full border-r border-black">
            <div className="border-b border-black p-4">
              <h3 className="font-[medium] text-center text-[1.5rem]">Phone</h3>
            </div>
            <div className="h-full flex flex-col gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.621 15.604 6.81267 14.3373 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.479334 5.29567 0 3.2 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.72933 4.74567 6.688 4.937C6.646 5.129 6.55 5.3 6.4 5.45L3.975 7.9C4.675 9.1 5.55433 10.225 6.613 11.275C7.671 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3873 13.038 11.312C13.2793 11.2373 13.5167 11.2167 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1123 17.775 12.287C17.925 12.4623 18 12.6667 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18ZM3.025 6L4.675 4.35L4.25 2H2.025C2.10833 2.68333 2.225 3.35833 2.375 4.025C2.525 4.69167 2.74167 5.35 3.025 6ZM11.975 14.95C12.625 15.2333 13.2877 15.4583 13.963 15.625C14.6377 15.7917 15.3167 15.9 16 15.95V13.75L13.65 13.275L11.975 14.95Z"
                    fill="black"
                  />
                </svg>
                <p className="font-[semibold] text-base">+380980099777</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.621 15.604 6.81267 14.3373 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.479334 5.29567 0 3.2 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.72933 4.74567 6.688 4.937C6.646 5.129 6.55 5.3 6.4 5.45L3.975 7.9C4.675 9.1 5.55433 10.225 6.613 11.275C7.671 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3873 13.038 11.312C13.2793 11.2373 13.5167 11.2167 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1123 17.775 12.287C17.925 12.4623 18 12.6667 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18ZM3.025 6L4.675 4.35L4.25 2H2.025C2.10833 2.68333 2.225 3.35833 2.375 4.025C2.525 4.69167 2.74167 5.35 3.025 6ZM11.975 14.95C12.625 15.2333 13.2877 15.4583 13.963 15.625C14.6377 15.7917 15.3167 15.9 16 15.95V13.75L13.65 13.275L11.975 14.95Z"
                    fill="black"
                  />
                </svg>
                <p className="font-[semibold] text-base">+380980099111</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 h-full">
            <div className="border-b border-black p-4">
              <h3 className="font-[medium] text-center text-[1.5rem]">
                Address
              </h3>
            </div>
            <div className="h-full gap-4 flex flex-col justify-center items-center">
              <p className="font-[medium] uppercase">
                Opening Hours: 8 to 11 P.M.
              </p>
              <div className="flex items-center gap-2">
                <svg
                  width="15"
                  height="21"
                  viewBox="0 0 15 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 14.975C9.15 13.6417 10.396 12.3583 11.238 11.125C12.0793 9.89167 12.5 8.73333 12.5 7.65C12.5 6.71667 12.3293 5.92067 11.988 5.262C11.646 4.604 11.225 4.07067 10.725 3.662C10.225 3.254 9.68333 2.95833 9.1 2.775C8.51667 2.59167 7.98333 2.5 7.5 2.5C7.01667 2.5 6.48333 2.59167 5.9 2.775C5.31667 2.95833 4.775 3.254 4.275 3.662C3.775 4.07067 3.35433 4.604 3.013 5.262C2.671 5.92067 2.5 6.71667 2.5 7.65C2.5 8.73333 2.92067 9.89167 3.762 11.125C4.604 12.3583 5.85 13.6417 7.5 14.975ZM7.5 17.5C5.15 15.7667 3.39567 14.0833 2.237 12.45C1.079 10.8167 0.5 9.21667 0.5 7.65C0.5 6.46667 0.712667 5.429 1.138 4.537C1.56267 3.64567 2.10833 2.9 2.775 2.3C3.44167 1.7 4.19167 1.25 5.025 0.95C5.85833 0.65 6.68333 0.5 7.5 0.5C8.31667 0.5 9.14167 0.65 9.975 0.95C10.8083 1.25 11.5583 1.7 12.225 2.3C12.8917 2.9 13.4377 3.64567 13.863 4.537C14.2877 5.429 14.5 6.46667 14.5 7.65C14.5 9.21667 13.9207 10.8167 12.762 12.45C11.604 14.0833 9.85 15.7667 7.5 17.5ZM7.5 9.5C8.05 9.5 8.521 9.304 8.913 8.912C9.30433 8.52067 9.5 8.05 9.5 7.5C9.5 6.95 9.30433 6.479 8.913 6.087C8.521 5.69567 8.05 5.5 7.5 5.5C6.95 5.5 6.47933 5.69567 6.088 6.087C5.696 6.479 5.5 6.95 5.5 7.5C5.5 8.05 5.696 8.52067 6.088 8.912C6.47933 9.304 6.95 9.5 7.5 9.5ZM0.5 20.5V18.5H14.5V20.5H0.5Z"
                    fill="black"
                  />
                </svg>

                <p className="font-[semibold] text-base">
                  15/4 Khreshchatyk Street, Kyiv{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-between flex-col h-full">
        <div className="bg-center">
          <img
            className="h-full w-full"
            src={storeImage}
            alt="Kyiv Luxebouquets store"
          />
        </div>
        <div className="flex h-[4rem] border-t border-black">
          <div className="w-1/2 border-r border-black flex justify-center items-center">
            <h3 className="font-[medium] text-[1.5rem]">Follow us</h3>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <SocialLinks wrapperStyle={"flex justify-between w-[65%]"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
