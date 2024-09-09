import heroImage from "../../assets/subscription-page/hero-image-1.jpg";
import Button from "../../components/Button";

type HeroMessages = {
  title: string;
  subtitle: string;
};

const HeroSection = () => {
  const heroMessages: HeroMessages[] = [
    {
      title: "For Yourself",
      subtitle:
        "The perfect way to keep your home fresh and beautiful. Get a regular delivery of stunning bouquets straight to your doorstep without lifting a finger. Enjoy the beauty and fragrance of fresh flowers hassle-free!",
    },
    {
      title: "As a Gift",
      subtitle:
        "Simply provide us with their address and let us take care of the rest, delivering beautiful blooms straight to their doorstep at the frequency and duration of your choosing.",
    },
    {
      title: "For Business",
      subtitle:
        "Is a great way to create a pleasant atmosphere and leave a good impression on your guests and customers. Fresh floral arrangements will improve the aesthetic image of your business, and our service guarantees timely replacement without extra care or effort on your part.",
    },
  ];

  return (
    <section className="flex border-b border-black">
      <div className="w-1/2 border-r border-black">
        <img src={heroImage} alt="Hero image" />
      </div>
      <div className="w-1/2 flex flex-col justify-between p-[3.5rem] gap-2">
        <h2 className="font-[semibold] text-[3rem]">Flower Subscription</h2>
        <div className="h-full flex flex-col gap-4">
          {heroMessages.map((messages, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <h6 className="font-[medium] text-base">{messages.title}</h6>
                <ul className="list-disc">
                  <li className="font-[regular] text-base ml-4">
                    {messages.subtitle}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <Button
          buttonLabel="Explore Plans"
          buttonStyle="font-[medium] text-base w-[30%] self-start uppercase border border-black p-4"
        />
      </div>
    </section>
  );
};

export default HeroSection;
