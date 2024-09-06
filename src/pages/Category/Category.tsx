import productImageOne from "../../assets/category-page/card-item-1.jpg";
import productImageTwo from "../../assets/category-page/card-item-2.jpg";
import productImageThree from "../../assets/category-page/card-item-3.jpg";
import productImageFour from "../../assets/category-page/card-item-4.jpg";
import productImageFive from "../../assets/category-page/card-item-5.jpg";
import productImageSix from "../../assets/category-page/card-item-6.jpg";
import productImageSeven from "../../assets/category-page/card-item-7.jpg";
import productImageEight from "../../assets/category-page/card-item-8.jpg";
import productImageNine from "../../assets/category-page/card-item-9.jpg";
import productImageTen from "../../assets/category-page/card-item-10.jpg";
import useScrollToTop from "../../hooks/useScrollToTop";

type CategoryItems = {
  image: string;
  name: string;
  price: number;
};

const Category = () => {
  const categoryItems: CategoryItems[] = [
    {
      image: productImageOne,
      name: "Snowfall",
      price: 70,
    },
    {
      image: productImageTwo,
      name: "Dawn's Delight",
      price: 70,
    },
    {
      image: productImageThree,
      name: "Pink Elegance",
      price: 70,
    },
    {
      image: productImageFour,
      name: "Rustic Charm",
      price: 70,
    },
    {
      image: productImageFive,
      name: "Autumn Symphony",
      price: 70,
    },
    {
      image: productImageSix,
      name: "Rosy Delight",
      price: 70,
    },
    {
      image: productImageSeven,
      name: "Serenity",
      price: 70,
    },
    {
      image: productImageEight,
      name: "Blue Harmony",
      price: 70,
    },
    {
      image: productImageNine,
      name: "Mystical Majesty",
      price: 70,
    },
    {
      image: productImageTen,
      name: "Blazing Blossoms",
      price: 70,
    },
  ];

  useScrollToTop();

  return (
    <div className="flex">
      <div className="sticky top-0 hero-category w-1/2 h-screen flex justify-center items-center border-r border-black">
        <h1 className="text-white font-[semibold] text-[4rem]">
          Fresh Flowers
        </h1>
      </div>
      <div className="w-1/2 grid grid-cols-2">
        {categoryItems.map((item, index) => {
          return (
            <div
              className={
                !item.name.includes("Mystical Majesty") &&
                !item.name.includes("Blazing Blossoms")
                  ? "category-item flex flex-col relative cursor-pointer overflow-hidden border-b border-black"
                  : "category-item flex flex-col relative cursor-pointer overflow-hidden "
              }
              key={index}
            >
              <img src={item.image} alt="Product image" />
              <div className="absolute bottom-4 w-full flex flex-col items-center">
                <h6 className="font-[medium] text-base text-black">
                  {item.name}
                </h6>
                <p className="font-[medium] text-base text-[gray]">
                  price {item.price}$
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
