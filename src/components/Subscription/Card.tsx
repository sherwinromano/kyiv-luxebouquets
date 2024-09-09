import Button from "../Button";
import imageOne from "../../assets/subscription-page/bundle-1.jpg";
import imageTwo from "../../assets/subscription-page/bundle-2.jpg";
import imageThree from "../../assets/subscription-page/bundle-3.jpg";

type CardPlans = {
  image: string;
  title: string;
  highlights: string[];
};
const Card = () => {
  const cardPlans: CardPlans[] = [
    {
      image: imageOne,
      title: "Classic",
      highlights: [
        "Price $45",
        "Free Delivery",
        "Best for a budget",
        "Glass vase with first delivery",
        "Save up to 25%",
      ],
    },
    {
      image: imageTwo,
      title: "Seasonal",
      highlights: [
        "Price $65",
        "Free Delivery",
        "Best seasonal selections",
        "Glass vase with first delivery",
        "Luxury candle with your first delivery",
        "Save up to 28%",
      ],
    },
    {
      image: imageThree,
      title: "Luxe",
      highlights: [
        "Price $95",
        "Free Delivery",
        "Premium arrangement",
        "Premium vase with first delivery",
        "Luxury candle with your first delivery",
        "Save up to 30%",
      ],
    },
  ];

  return cardPlans.map((card, index) => {
    return (
      <div className="flex flex-col h-auto" key={index}>
        <div className="flex border border-[#D2D2D7]">
          <div className="w-1/2 border-r border-[#D2D2D7]">
            <img src={card.image} alt="Product image" />
          </div>
          <div className="w-1/2 p-4 flex flex-col gap-4">
            <h4 className="font-[medium] text-[1.1rem]">{card.title}</h4>
            <ul className="list-disc">
              {card.highlights.map((feature, index) => {
                return (
                  <li className="ml-8 font-[regular] text-base" key={index}>
                    {feature}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Button
          buttonLabel="Select"
          buttonStyle="bg-black text-white uppercase font-[medium] text-base p-4"
        />
      </div>
    );
  });
};

export default Card;
