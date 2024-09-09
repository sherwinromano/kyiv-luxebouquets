import Cards from "../../components/Cards";

type CardData = {
  title: string;
  body: string;
};

const HowItWorks = () => {
  const cardMessages: CardData[] = [
    {
      title: "Choose a plan",
      body: "Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle to enhance the ambiance.",
    },
    {
      title: "Frequency and Duration",
      body: "Choose delivery frequency: once a week, every two weeks, or once a month. Then, select your subscription duration from 3 to 12 months. Enjoy savings with a longer subscription. We understand that every customer has different needs, and we aim to provide flexible subscription options that cater to your specific preferences.",
    },
    {
      title: "Pay once",
      body: "After entering your contact and delivery information and paying for your subscription, you can sit back and relax, knowing that you have secured a regular supply of fresh, stunning flowers for yourself or your loved ones",
    },
  ];

  return (
    <section className="flex h-auto border-b border-black">
      <div className="h-screen sticky top-[3rem] w-1/2 border-r border-black p-[3rem]">
        <h2 className="font-[semibold] text-[3rem]">How does it work?</h2>
      </div>
      <div className="w-1/2 flex flex-col">
        {cardMessages.map((card, index) => {
          return (
            <Cards
              cardData={card}
              cardStyle={
                index == cardMessages.length - 1
                  ? "p-[4.5rem] flex flex-col gap-4"
                  : "p-[4.5rem] flex flex-col gap-4 border-b border-black"
              }
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
