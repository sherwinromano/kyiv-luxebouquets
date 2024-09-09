type CardData = {
  title: string;
  body: string;
};

type CardProps = {
  cardData: CardData;
  cardStyle: string;
  index: number;
};

const Cards = ({ cardData, cardStyle, index }: CardProps) => {
  return (
    <div className={cardStyle} key={index}>
      <h3 className="font-medium text-[1.8rem]">{cardData.title}</h3>
      <p className="font-regular text-base">{cardData.body}</p>
    </div>
  );
};

export default Cards;
