import Button from "../../components/Button";

const AboutFooter = () => {
  return (
    <div className="border-t border-black flex flex-col items-center justify-center py-[5rem]">
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-[semibold] text-black text-[3rem]">
          Discover Our Beautiful Bouquets
        </h2>
        <h3 className="font-[medium] text-black text-base text-center w-[60%]">
          Explore our collection of exquisite bouquets and surprise your loved
          ones with the perfect gift. Click the button below to start shopping
        </h3>
      </div>
      <Button
        buttonLabel="Shop Now"
        buttonStyle={
          "bg-black text-white uppercase mt-[3.5rem] p-4 w-[20%] font-[medium] text-base"
        }
      />
    </div>
  );
};

export default AboutFooter;
