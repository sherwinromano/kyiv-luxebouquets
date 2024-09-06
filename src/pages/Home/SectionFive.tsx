import serviceImageOne from "../../assets/home-page/service-image-1.jpg";
import ServiceMessage from "../../components/Home/ServiceMessage";

const SectionFive = () => {
  return (
    <div className="h-auto flex flex-col">
      <div className="flex justify-center items-center border-b border-black h-[10rem]">
        <h2 className="font-[semibold] text-[2.5rem]">Our Service</h2>
      </div>
      <div className="h-full flex border-b border-black">
        <div className="w-1/2 border-r border-black">
          <img
            className="h-full w-full"
            src={serviceImageOne}
            alt="Hero image"
          />
        </div>
        <div className="w-1/2 flex justify-center items-center ">
          <ServiceMessage
            wrapperStyle={"w-[80%] flex flex-col gap-[5rem]"}
            title={"Flower Subscriptions"}
            subtitle={
              "Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases."
            }
            buttonStyle={
              "font-[medium] uppercase border-black border py-4 self-center w-[35%]"
            }
            buttonLabel={"Subscribe Now"}
          />
        </div>
      </div>
      <div className="service-image flex justify-center items-center">
        <ServiceMessage
          wrapperStyle={"w-[45%] flex flex-col gap-[5rem] text-white"}
          title={"Wedding & Event Decor"}
          subtitle={
            "Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life."
          }
          textWrapperStyle={"flex flex-col gap-4 text-white"}
          buttonStyle={
            "font-[medium] uppercase border-white border py-4 self-center w-[35%]"
          }
          buttonLabel={"Inquire Now"}
        />
      </div>
    </div>
  );
};

export default SectionFive;
