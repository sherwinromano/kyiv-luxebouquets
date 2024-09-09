import Button from "../../components/Button";
import googleLogo from "../../assets/icons/google-logo.png";

const SectionSix = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 h-[65%] w-4/5 overflow-hidden">
        <div className="flex flex-col items-center gap-2">
          <img className="h-auto" src={googleLogo} alt="Google log" />
          <h3 className="font-[medium] text-base uppercase">Reviews</h3>
        </div>
        <div className="flex flex-col gap-4 h-full">
          <h2 className="font-[semibold] text-[3rem] self-center">
            Our Clients say
          </h2>
          <div>carousel diri</div>
        </div>
      </div>
      <Button
        buttonStyle={
          "text-base font-[medium] uppercase self-start border border-black p-3 w-[15%] mt-[2rem] self-center"
        }
        buttonLabel={"Read Reviews"}
      />
    </div>
  );
};

export default SectionSix;
