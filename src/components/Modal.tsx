import { Link } from "react-router-dom";
import googleLogo from "../assets/icons/google.png";
import appleLogo from "../assets/icons/apple-logo.png";
import { createPortal } from "react-dom";
import { MouseEventHandler } from "react";

type ModalProp = {
  openModal: boolean;
  setOpenModal: MouseEventHandler<HTMLDivElement>;
};

const Modal = ({ openModal, setOpenModal }: ModalProp) => {
  if (!openModal) {
    document.body.style.overflow = "auto";
    return null;
  } else {
    document.body.style.overflow = "hidden";
  }

  return createPortal(
    <div
      onClick={setOpenModal}
      className="fixed flex justify-center items-center top-0 right-0 bottom-0 left-0 backdrop-blur-[2px] bg-[#d2d2d730] z-50"
    >
      <div className="wrapper-modal bg-white flex flex-col gap-8 justify-between w-1/2 h-auto border border-black px-[5rem] py-[4rem] z-[99]">
        <h2 className="font-[semibold] text-[3rem] leading-tight">
          Greetings! Welcome to luxury gift shop.
        </h2>
        <form className="flex flex-col pb-8 gap-2 border-b border-[#d2d2d7]">
          <h6 className="font-[medium]">
            Use your mobile number to sign up or log in
          </h6>
          <input
            className="border-[#D2D2D7] border outline-none p-4"
            type="text"
          />
          <input
            className="bg-black text-white font-[medium] text-base uppercase p-4 cursor-pointer"
            type="submit"
            value="Continue"
          />
        </form>
        <div className="flex flex-col gap-2">
          <h6 className="font-[medium] text-base">
            Instantly login or sign up via Google
          </h6>
          <div className="flex gap-2">
            <div className="border border-black p-4 w-1/2 flex justify-center items-center gap-2">
              <img src={googleLogo} alt="Google logo" />
              <span className="font-[medium] uppercase text-[14px]">
                Continue with Google
              </span>
            </div>
            <div className="border border-black p-4 w-1/2 flex justify-center items-center gap-2">
              <img src={appleLogo} alt="Apple logo" />
              <span className="font-[medium] uppercase text-[14px]">
                Continue with Apple
              </span>
            </div>
          </div>
        </div>
        <div className="flex self-center mt-4">
          <Link className="px-4 border-r border-black underline" to="/">
            Privacy Policy
          </Link>
          <Link className="px-4 underline" to="/">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>,
    document.querySelector(".modal") as HTMLElement
  );
};

export default Modal;
