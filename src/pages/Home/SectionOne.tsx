import heroImage from "../../assets/home-page/hero-image.jpg";
import productImageOne from "../../assets/home-page/card-image-1.jpg";
import productImageTwo from "../../assets/home-page/card-image-2.jpg";
import productImageThree from "../../assets/home-page/card-image-3.jpg";
import productImageFour from "../../assets/home-page/card-image-4.jpg";
import productImageFive from "../../assets/home-page/card-image-5.jpg";
import useScrollToTop from "../../hooks/useScrollToTop";

type ProductItems = {
  name: string;
  image: string;
  itemStyle: string;
  iconStyle: string;
  imageStyle: string;
};

type ProductItem = {
  item: ProductItems[];
};

type Product = {
  item: ProductItems;
  index: number;
  borderStyle: boolean;
};

const SectionOne = () => {
  const items: ProductItems[] = [
    {
      name: "Fresh Flowers",
      image: productImageOne,
      itemStyle: "odd-wrapper flex cursor-pointer border-b border-black",
      iconStyle: "odd-arrow absolute -right-[1.5rem]",
      imageStyle: "odd-image",
    },
    {
      name: "Dried Flowers",
      image: productImageTwo,
      itemStyle:
        "even-wrapper flex flex-row-reverse cursor-pointer border-b border-black",
      iconStyle: "even-arrow absolute -left-[1.5rem]",
      imageStyle: "even-image",
    },
    {
      name: "Live Plants",
      image: productImageThree,
      itemStyle: "odd-wrapper flex cursor-pointer border-b border-black",
      iconStyle: "odd-arrow absolute -right-[1.5rem]",
      imageStyle: "odd-image",
    },
    {
      name: "Aroma Candles",
      image: productImageFour,
      itemStyle:
        "even-wrapper flex flex-row-reverse cursor-pointer border-b border-black",
      iconStyle: "even-arrow absolute -left-[1.5rem]",
      imageStyle: "even-image",
    },
    {
      name: "Fresheners",
      image: productImageFive,
      itemStyle: "odd-wrapper flex cursor-pointer border-black",
      iconStyle: "odd-arrow absolute -right-[1.5rem]",
      imageStyle: "odd-image",
    },
  ];

  useScrollToTop();
  return (
    <div className="flex border-b border-black">
      <div className="h-screen sticky top-[3rem] border-r border-black p-[4.5rem] w-1/2 flex flex-col gap-[1.5rem]">
        <div className="border-b border-black pb-[3rem] flex flex-col gap-4">
          <h1 className="font-[bold] text-[3rem] w-[20%] relative leading-tight">
            Kyiv LuxeBouquets
            <span className="text-[2rem] absolute bottom-[1.5rem] -right-[14.3rem]">
              ®
            </span>
          </h1>
          <h2 className="font-[regular] text-[1.1rem]">
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
            Spread Joy with Our{" "}
            <span className="italic">Online Flower Delivery Service</span>
          </h2>
        </div>
        <div className="flex gap-[1.5rem]">
          <div className="w-1/2 h-full">
            <img className="h-full w-full" src={heroImage} alt="Hero image" />
          </div>
          <div className="w-1/2 border-l border-black flex flex-col justify-end">
            <h3 className="font-[regular] text-base self-end text-start w-[13.5rem] leading-tight">
              Experience the joy of giving with our modern floral studio. Order
              online and send fresh flowers, plants and gifts today.
            </h3>
          </div>
        </div>
      </div>
      <ProductHighlights item={items} />
    </div>
  );
};

const ProductHighlights = ({ item }: ProductItem) => {
  return (
    <div className="w-1/2 flex flex-col">
      {item.map((item, index) => {
        return item.itemStyle.includes("even-wrapper") ? (
          <Product key={index} item={item} index={index} borderStyle={true} />
        ) : (
          <Product key={index} item={item} index={index} borderStyle={false} />
        );
      })}
    </div>
  );
};

const Product = ({ item, index, borderStyle }: Product) => {
  return (
    <div className={item.itemStyle} key={index}>
      <div
        className={`w-1/2 flex flex-col justify-center items-center ${
          borderStyle && "border-l border-black"
        }`}
      >
        <div className="h-full w-full flex justify-center items-center">
          <h3 className="font-[bold] text-[2rem]">{item.name}</h3>
        </div>
        <div className="flex items-center pb-5 relative">
          <h4 className="font-[semibold] text-base">Shop Now</h4>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={item.iconStyle}
          >
            <path
              d="M12.1397 0L10.6815 1.50351L14 5H0V7H14L10.702 10.5035L12.167 12L18 5.98597L12.1397 0Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div
        className={`w-[50%] overflow-hidden ${
          !borderStyle && "border-l border-black"
        }`}
      >
        <img
          className={item.imageStyle}
          src={item.image}
          alt="An image of a flower"
        />
      </div>
    </div>
  );
};

export default SectionOne;
