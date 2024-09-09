import heroImage from "../../assets/subscription-page/hero-image-2.jpg";
import Button from "../../components/Button";
import Quantity from "../../components/Quantity";
import Card from "../../components/Subscription/Card";

const SelectingPlan = () => {
  const buttonLabels: string[] = ["Monthly", "Bi-Weekly", "Weekly"];

  return (
    <section className="flex h-auto border-b border-black">
      <div className="w-1/2 flex flex-col gap-4 border-r border-black py-[3.5rem] px-[1.5rem]">
        <h6 className="font-[medium] text-base uppercase">
          Build Your Subscription
        </h6>
        <div className="flex flex-col">
          <div className="flex flex-col gap-4">
            <h3 className="font-[medium] text-[2.4rem]">Selecting a Plan</h3>
            <p className="font-[regular] text-base">
              Enjoy free shipping on every order and save up to 30%. Every
              bouquet we deliver is carefully curated to ensure it arrives fresh
              and stunning. To modify, pause, or cancel your subscription,
              simply log in to your account dashboard. You're in complete
              control of your flower delivery experience.
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-8">
          <Card />
        </div>
        <div className="flex flex-col gap-8 border-t border-b border-[#D2D2D7] py-8">
          <div className="flex flex-col gap-4">
            <h4 className="font-[regular] text-[1.8rem]">
              How often do you want flowers delivered?
            </h4>
            <p className="font-[regular] text-base">
              Select the delivery frequency
            </p>
          </div>
          <div className="flex justify-between">
            {buttonLabels.map((label, index) => {
              return (
                <Button
                  buttonLabel={label}
                  buttonStyle="border border-black font-[medium] text-base uppercase p-4 w-[30%]"
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-8 border-b border-[#D2D2D7] py-8">
          <div className="flex flex-col gap-4">
            <h4 className="font-[regular] text-[1.8rem]">
              How many deliveries would you like?
            </h4>
            <p className="font-[regular] text-base">
              Pay once and do not worry about flowers, our bouquets will be
              beautiful and on time, as many times as you need
            </p>
          </div>
          <Quantity />
        </div>
        <Button
          buttonLabel="Checkout"
          buttonStyle="bg-black text-white font-[medium] text-base p-4 uppercase mt-8"
        />
      </div>
      <div className="w-1/2 sticky top-[3rem] h-screen flex">
        <img className="h-full" src={heroImage} alt="Hero image" />
      </div>
    </section>
  );
};

export default SelectingPlan;
