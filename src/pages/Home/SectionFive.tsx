import serviceImageOne from "../../assets/home-page/service-image-1.jpg";
import Button from "../../components/Button";

const SectionFive = () => {
  return (
    <div className="h-auto flex flex-col">
      <div className="flex justify-center items-center border-b border-black h-[10rem]">
        <h2 className="font-[semibold] text-[2.5rem]">Our Service</h2>
      </div>
      <div className="h-full flex">
        <div className="w-1/2 border-r border-black">
          <img
            className="h-full w-full"
            src={serviceImageOne}
            alt="Hero image"
          />
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="w-[80%] flex flex-col gap-[5rem]">
            <div className="flex flex-col items-center gap-4">
              <h4 className="font-[medium] uppercase">Service</h4>
              <div className="flex flex-col gap-4">
                <h3 className="font-[semibold] text-[3rem] text-center">
                  Flower Subscriptions
                </h3>
                <p className="text-center font-[medium] text-base">
                  Experience the convenience and savings of regular flower
                  deliveries with our flexible subscription service - up to 30%
                  more profitable than one-time purchases.
                </p>
              </div>
            </div>
            <Button
              buttonStyle={
                "font-[medium] uppercase border-black border py-4 self-center w-[35%]"
              }
              buttonLabel={"Subscribe Now"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
