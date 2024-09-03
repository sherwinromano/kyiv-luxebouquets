import heroImage from "../assets/home-page/hero-image.jpg";
import productImageOne from "../assets/home-page/card-image-1.jpg";
import productImageTwo from "../assets/home-page/card-image-2.jpg";
import productImageThree from "../assets/home-page/card-image-3.jpg";
import productImageFour from "../assets/home-page/card-image-4.jpg";
import productImageFive from "../assets/home-page/card-image-5.jpg";
import storeImage from "../assets/home-page/store-image.jpg";
import serviceImageOne from "../assets/home-page/service-image-1.jpg";

type Items = {
  name: string;
  image: string;
  itemStyle: string;
  iconStyle: string;
  imageStyle: string;
};

type Item = {
  item: Items[];
};

type ChooseUs = {
  title: string;
  body: string;
};

type Product = {
  item: Items;
  index: number;
  borderStyle: boolean;
};

const Home = () => {
  const items: Items[] = [
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
      name: "Aroma Candels",
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

  const chooseUs: ChooseUs[] = [
    {
      title: "Stylish bouquets by florists",
      body: "At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.",
    },
    {
      title: "On-time delivery",
      body: "Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.",
    },
    {
      title: "Safe payment",
      body: "You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.",
    },
    {
      title: "Subscription by your needs",
      body: "With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.",
    },
  ];

  return (
    <>
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
                Experience the joy of giving with our modern floral studio.
                Order online and send fresh flowers, plants and gifts today.
              </h3>
            </div>
          </div>
        </div>
        <ItemHighlights item={items} />
      </div>
      <div className="flex border-b border-black">
        <div className="w-1/2 border-r border-black p-[4.5rem]">
          <h2 className="font-[semibold] text-[3rem]">About Us</h2>
        </div>
        <div className="w-1/2 p-[4.5rem] flex flex-col gap-4">
          <h4 className="font-[medium] text-base">Our Story</h4>
          <div>
            <h3 className="font-[medium] text-[2rem]">Kyiv LuxeBouquets</h3>
            <p className="font-[regular] text-base mt-2">
              We are a modern local floral studio, which specializes in the
              design and delivery of unique bouquets. We have the best florists
              who carefully select each look, our studio cooperates directly
              with farms for growing different flowers, so we always have fresh
              flowers, which are collected by our florists in exquisite
              bouquets. We have a collection of fresh bouquets, collections of
              dried bouquets, house plants, as well as fragrant candles from
              luxury brands to create the perfect atmosphere. Make someone's day
              amazing by sending flowers, plants and gifts the same or next day.
              Ordering flowers online has never been easier.
            </p>
          </div>
          <button className="text-base font-[medium] uppercase self-start border border-black p-3 w-[30%] mt-[2rem]">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex border-b border-black">
        <div className="h-screen sticky top-[3rem] w-1/2 border-r border-black p-[4.5rem]">
          <h2 className="font-[semibold] text-[3rem]">Why choose us ?</h2>
        </div>
        <div className="w-1/2">
          {chooseUs.map((item, index) => {
            return (
              <div
                className={
                  item.title.includes("Subscription")
                    ? "p-[4.5rem] flex flex-col gap-4"
                    : "p-[4.5rem] flex flex-col gap-4 border-b border-black"
                }
                key={index}
              >
                <h3 className="font-medium text-[1.8rem]">{item.title}</h3>
                <p className="font-regular text-base">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-auto flex border-b border-black">
        <div className="w-1/2 flex flex-col border-r border-black">
          <div className="flex flex-col gap-4 p-[4.5rem] w-full h-1/2">
            <h2 className="font-[semibold] text-[3rem]">To Contact Us</h2>
            <div className="flex flex-col gap-2">
              <p className="font-[medium] text-base">We will call you back</p>
              <form className="flex gap-2">
                <input
                  className="p-4 outline-none border border-[#d2d2d7] font-[medium] w-1/2"
                  placeholder="+380 XX XXX XX XX"
                  type="text"
                />
                <input
                  className="bg-black uppercase text-white font-[medium] w-1/2 cursor-pointer"
                  type="submit"
                  value="Book a Call"
                />
              </form>
            </div>
          </div>
          <div className="w-full h-1/2 border-t border-black flex">
            <div className="w-1/2 flex flex-col h-full border-r border-black">
              <div className="border-b border-black p-4">
                <h3 className="font-[medium] text-center text-[1.5rem]">
                  Phone
                </h3>
              </div>
              <div className="h-full flex flex-col gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.621 15.604 6.81267 14.3373 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.479334 5.29567 0 3.2 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.72933 4.74567 6.688 4.937C6.646 5.129 6.55 5.3 6.4 5.45L3.975 7.9C4.675 9.1 5.55433 10.225 6.613 11.275C7.671 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3873 13.038 11.312C13.2793 11.2373 13.5167 11.2167 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1123 17.775 12.287C17.925 12.4623 18 12.6667 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18ZM3.025 6L4.675 4.35L4.25 2H2.025C2.10833 2.68333 2.225 3.35833 2.375 4.025C2.525 4.69167 2.74167 5.35 3.025 6ZM11.975 14.95C12.625 15.2333 13.2877 15.4583 13.963 15.625C14.6377 15.7917 15.3167 15.9 16 15.95V13.75L13.65 13.275L11.975 14.95Z"
                      fill="black"
                    />
                  </svg>
                  <p className="font-[semibold] text-base">+380980099777</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.621 15.604 6.81267 14.3373 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.479334 5.29567 0 3.2 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.72933 4.74567 6.688 4.937C6.646 5.129 6.55 5.3 6.4 5.45L3.975 7.9C4.675 9.1 5.55433 10.225 6.613 11.275C7.671 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3873 13.038 11.312C13.2793 11.2373 13.5167 11.2167 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1123 17.775 12.287C17.925 12.4623 18 12.6667 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18ZM3.025 6L4.675 4.35L4.25 2H2.025C2.10833 2.68333 2.225 3.35833 2.375 4.025C2.525 4.69167 2.74167 5.35 3.025 6ZM11.975 14.95C12.625 15.2333 13.2877 15.4583 13.963 15.625C14.6377 15.7917 15.3167 15.9 16 15.95V13.75L13.65 13.275L11.975 14.95Z"
                      fill="black"
                    />
                  </svg>
                  <p className="font-[semibold] text-base">+380980099111</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2 h-full">
              <div className="border-b border-black p-4">
                <h3 className="font-[medium] text-center text-[1.5rem]">
                  Address
                </h3>
              </div>
              <div className="h-full gap-4 flex flex-col justify-center items-center">
                <p className="font-[medium] uppercase">
                  Opening Hours: 8 to 11 P.M.
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    width="15"
                    height="21"
                    viewBox="0 0 15 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 14.975C9.15 13.6417 10.396 12.3583 11.238 11.125C12.0793 9.89167 12.5 8.73333 12.5 7.65C12.5 6.71667 12.3293 5.92067 11.988 5.262C11.646 4.604 11.225 4.07067 10.725 3.662C10.225 3.254 9.68333 2.95833 9.1 2.775C8.51667 2.59167 7.98333 2.5 7.5 2.5C7.01667 2.5 6.48333 2.59167 5.9 2.775C5.31667 2.95833 4.775 3.254 4.275 3.662C3.775 4.07067 3.35433 4.604 3.013 5.262C2.671 5.92067 2.5 6.71667 2.5 7.65C2.5 8.73333 2.92067 9.89167 3.762 11.125C4.604 12.3583 5.85 13.6417 7.5 14.975ZM7.5 17.5C5.15 15.7667 3.39567 14.0833 2.237 12.45C1.079 10.8167 0.5 9.21667 0.5 7.65C0.5 6.46667 0.712667 5.429 1.138 4.537C1.56267 3.64567 2.10833 2.9 2.775 2.3C3.44167 1.7 4.19167 1.25 5.025 0.95C5.85833 0.65 6.68333 0.5 7.5 0.5C8.31667 0.5 9.14167 0.65 9.975 0.95C10.8083 1.25 11.5583 1.7 12.225 2.3C12.8917 2.9 13.4377 3.64567 13.863 4.537C14.2877 5.429 14.5 6.46667 14.5 7.65C14.5 9.21667 13.9207 10.8167 12.762 12.45C11.604 14.0833 9.85 15.7667 7.5 17.5ZM7.5 9.5C8.05 9.5 8.521 9.304 8.913 8.912C9.30433 8.52067 9.5 8.05 9.5 7.5C9.5 6.95 9.30433 6.479 8.913 6.087C8.521 5.69567 8.05 5.5 7.5 5.5C6.95 5.5 6.47933 5.69567 6.088 6.087C5.696 6.479 5.5 6.95 5.5 7.5C5.5 8.05 5.696 8.52067 6.088 8.912C6.47933 9.304 6.95 9.5 7.5 9.5ZM0.5 20.5V18.5H14.5V20.5H0.5Z"
                      fill="black"
                    />
                  </svg>

                  <p className="font-[semibold] text-base">
                    15/4 Khreshchatyk Street, Kyiv{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-between flex-col h-full">
          <div className="bg-center">
            <img
              className="h-full w-full"
              src={storeImage}
              alt="Kyiv Luxebouquets store"
            />
          </div>
          <div className="flex h-[4rem] border-t border-black">
            <div className="w-1/2 border-r border-black flex justify-center items-center">
              <h3 className="font-[medium] text-[1.5rem]">Follow us</h3>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <div className="flex justify-between w-[65%]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0007 5.00005C14.0007 4.44776 14.4484 4.00005 15.0007 4.00005C15.553 4.00005 16.0007 4.44776 16.0007 5.00005C16.0007 5.55233 15.553 6.00005 15.0007 6.00005C14.4484 6.00005 14.0007 5.55233 14.0007 5.00005Z"
                    fill="#121212"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0007 5.25005C7.37732 5.25005 5.25067 7.37669 5.25067 10C5.25067 12.6234 7.37732 14.75 10.0007 14.75C12.624 14.75 14.7507 12.6234 14.7507 10C14.7507 7.37669 12.624 5.25005 10.0007 5.25005ZM6.75067 10C6.75067 8.20512 8.20575 6.75005 10.0007 6.75005C11.7956 6.75005 13.2507 8.20512 13.2507 10C13.2507 11.795 11.7956 13.25 10.0007 13.25C8.20575 13.25 6.75067 11.795 6.75067 10Z"
                    fill="#121212"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.2589 0.833061C11.7924 0.44562 8.20902 0.44562 4.74244 0.833061C2.73038 1.05794 1.10605 2.64295 0.869497 4.66548C0.454959 8.20978 0.454959 11.7903 0.869497 15.3346C1.10605 17.3571 2.73038 18.9422 4.74244 19.167C8.20902 19.5545 11.7924 19.5545 15.2589 19.167C17.271 18.9422 18.8953 17.3571 19.1319 15.3346C19.5464 11.7903 19.5464 8.20978 19.1319 4.66548C18.8953 2.64295 17.271 1.05794 15.2589 0.833061ZM4.90905 2.32378C8.2649 1.94871 11.7365 1.94871 15.0923 2.32378C16.4224 2.47244 17.4879 3.52205 17.642 4.83973C18.043 8.26825 18.043 11.7318 17.642 15.1604C17.4879 16.478 16.4224 17.5277 15.0923 17.6763C11.7365 18.0514 8.2649 18.0514 4.90905 17.6763C3.57894 17.5277 2.51346 16.478 2.35934 15.1604C1.95834 11.7318 1.95834 8.26825 2.35934 4.83973C2.51346 3.52205 3.57894 2.47244 4.90905 2.32378Z"
                    fill="#121212"
                  />
                </svg>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C15.3848 19.75 19.75 15.3848 19.75 10C19.75 4.61522 15.3848 0.25 10 0.25ZM1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C14.5563 1.75 18.25 5.44365 18.25 10C18.25 14.5563 14.5563 18.25 10 18.25C9.14272 18.25 8.31599 18.1192 7.53865 17.8766C7.96125 17.213 8.29734 16.498 8.53871 15.7491L9.05527 13.7719C9.26869 14.0765 9.55482 14.3229 9.88766 14.4888C10.2205 14.6547 10.5895 14.7348 10.9612 14.7219C13.4965 14.7219 15.2778 12.4181 15.2778 9.55626C15.2778 6.80719 13.0334 4.75282 10.1537 4.75282C6.56746 4.75282 4.66152 7.16344 4.66152 9.78188C4.66152 11.005 5.30871 12.5191 6.34777 13.0059C6.50214 13.0772 6.60308 13.0059 6.62683 12.8931C6.65057 12.7804 6.79292 12.211 6.85828 11.9495C6.86853 11.9081 6.8686 11.8643 6.85825 11.8229C6.8479 11.7815 6.82756 11.7433 6.79902 11.7116C6.40647 11.1585 6.19867 10.4957 6.20527 9.81751C6.20321 9.33072 6.29996 8.84858 6.48964 8.40026C6.67932 7.95195 6.958 7.54679 7.30881 7.2093C7.65962 6.87181 8.07527 6.60902 8.53058 6.43682C8.9859 6.26463 9.47143 6.18662 9.95777 6.20751C10.4133 6.18086 10.8694 6.24946 11.2969 6.40892C11.7245 6.56838 12.1141 6.8152 12.4409 7.13365C12.7677 7.45209 13.0246 7.83516 13.1951 8.25841C13.3656 8.68166 13.446 9.13581 13.4312 9.59188C13.4312 11.8363 12.2912 13.3978 10.8187 13.3978C10.6285 13.4124 10.4375 13.381 10.262 13.3062C10.0865 13.2313 9.93165 13.1153 9.81049 12.9679C9.68933 12.8206 9.60546 12.6462 9.56599 12.4595C9.52651 12.2729 9.53259 12.0794 9.58371 11.8956C9.6681 11.5454 9.77947 11.1847 9.888 10.8332C10.0849 10.1955 10.2725 9.58809 10.2725 9.12876C10.293 8.97956 10.2811 8.82769 10.2375 8.68353C10.1939 8.53938 10.1196 8.40636 10.0198 8.29358C9.91998 8.1808 9.79697 8.09093 9.65919 8.03011C9.52141 7.9693 9.37211 7.93899 9.22152 7.94126C8.39027 7.94126 7.71933 8.80813 7.71933 9.96001C7.71315 10.3671 7.78992 10.7711 7.94496 11.1475L6.96527 15.3038C6.84525 16.0891 6.84499 16.8882 6.96449 17.6736C6.31392 17.4161 5.70391 17.0782 5.14671 16.6722C4.16962 15.9584 3.35317 15.0348 2.76292 13.9593C2.53071 13.5362 2.33712 13.0962 2.18299 12.6446C1.90223 11.8144 1.75 10.925 1.75 10Z"
                    fill="#121212"
                  />
                </svg>
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.48769 1.78769C5.47225 0.803123 6.80761 0.25 8.2 0.25H10.9C11.3142 0.25 11.65 0.585786 11.65 1V4.6C11.65 5.01421 11.3142 5.35 10.9 5.35H8.2C8.16022 5.35 8.12206 5.3658 8.09393 5.39393C8.0658 5.42206 8.05 5.46022 8.05 5.5V7.45H10.9C11.131 7.45 11.349 7.5564 11.4912 7.73844C11.6333 7.92048 11.6836 8.15785 11.6276 8.3819L10.7276 11.9819C10.6441 12.3158 10.3442 12.55 10 12.55H8.05V19C8.05 19.4142 7.71421 19.75 7.3 19.75H3.7C3.28579 19.75 2.95 19.4142 2.95 19V12.55H1C0.585786 12.55 0.25 12.2142 0.25 11.8V8.2C0.25 7.78579 0.585786 7.45 1 7.45H2.95V5.5C2.95 4.10761 3.50312 2.77226 4.48769 1.78769ZM8.2 1.75C7.20544 1.75 6.25161 2.14509 5.54835 2.84835C4.84509 3.55161 4.45 4.50544 4.45 5.5V8.2C4.45 8.61421 4.11421 8.95 3.7 8.95H1.75V11.05H3.7C4.11421 11.05 4.45 11.3858 4.45 11.8V18.25H6.55V11.8C6.55 11.3858 6.88579 11.05 7.3 11.05H9.41442L9.93942 8.95H7.3C6.88579 8.95 6.55 8.61421 6.55 8.2V5.5C6.55 5.06239 6.72384 4.64271 7.03327 4.33327C7.34271 4.02384 7.76239 3.85 8.2 3.85H10.15V1.75H8.2Z"
                    fill="#121212"
                  />
                </svg>
                <svg
                  width="22"
                  height="19"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.0215 0.343645C14.5299 0.256563 15.0992 0.227487 15.635 0.318129C16.5918 0.480012 17.4757 0.924741 18.1744 1.5915C18.6311 1.60183 19.0799 1.51186 19.477 1.38359C19.8131 1.27504 20.097 1.14397 20.296 1.04033C20.3949 0.988803 20.4713 0.944845 20.521 0.915085C20.5458 0.900229 20.5638 0.888984 20.5745 0.882193L20.5841 0.876132C20.8809 0.678404 21.2761 0.716887 21.529 0.968393C21.7819 1.21996 21.8226 1.61488 21.6264 1.91278C21.4187 2.22807 21.1303 2.79015 20.8073 3.4199C20.7565 3.51892 20.7048 3.61962 20.6525 3.72129C20.4672 4.08125 20.2772 4.44507 20.1001 4.7572C19.9889 4.95318 19.87 5.15216 19.7501 5.3241V5.59788C19.7577 6.6035 19.6424 7.60389 19.4083 8.57711C19.261 9.18945 19.0667 9.79104 18.8265 10.3764C18.2041 11.8931 17.2857 13.2705 16.1249 14.4283C14.9642 15.586 13.5844 16.5009 12.0662 17.1194C10.5492 17.7374 8.9245 18.0472 7.28665 18.0308C4.91234 18.0328 2.58798 17.3488 0.593255 16.0608C0.299454 15.8711 0.175755 15.5036 0.295092 15.1748C0.414428 14.8461 0.745121 14.6435 1.09219 14.6864C1.39255 14.7236 1.69496 14.7418 1.99762 14.7408C3.08507 14.7377 4.15181 14.4975 5.12567 14.0448C4.81612 13.9039 4.52058 13.7301 4.24443 13.5254C3.43271 12.9235 2.8288 12.0835 2.51673 11.1224C2.43564 10.8726 2.49108 10.5986 2.66289 10.4001C2.66597 10.3965 2.66908 10.393 2.67221 10.3895C2.48869 10.2258 2.31696 10.0477 2.15886 9.85602C1.44754 8.99382 1.05587 7.91239 1.05009 6.79465L1.05007 6.79077L1.05008 6.74077C1.05008 6.47491 1.19083 6.22891 1.42003 6.09419C1.47813 6.06004 1.53972 6.03433 1.60307 6.01709C1.26473 5.34201 1.08879 4.59656 1.09007 3.84031C1.08968 2.98354 1.31347 2.14157 1.73923 1.39807C1.86214 1.18343 2.08297 1.0432 2.3295 1.02322C2.57603 1.00324 2.81656 1.1061 2.97242 1.29814C3.93498 2.48416 5.13626 3.45441 6.49825 4.14588C7.19839 4.50134 7.93294 4.77903 8.68874 4.97547C9.11247 5.0856 9.54288 5.17018 9.97765 5.22861C9.9585 4.50535 10.1013 3.78248 10.4011 3.11455C10.8407 2.13473 11.5932 1.32855 12.5404 0.822456C12.9416 0.608128 13.4741 0.437416 14.0215 0.343645ZM2.74335 7.89114C2.873 8.25603 3.06586 8.59835 3.31592 8.90145C3.80724 9.49699 4.48919 9.90455 5.24641 10.0552C5.58369 10.1223 5.83213 10.4102 5.84916 10.7536C5.86618 11.0971 5.64743 11.4082 5.31843 11.5083C5.04594 11.5912 4.76676 11.649 4.48441 11.6811C4.67099 11.9216 4.89047 12.137 5.13787 12.3205C5.69906 12.7366 6.376 12.9675 7.07451 12.9809C7.39143 12.987 7.6703 13.1917 7.77112 13.4922C7.87195 13.7927 7.77296 14.1242 7.52386 14.3202C6.47469 15.1457 5.26149 15.7214 3.97594 16.0153C5.04142 16.3565 6.15887 16.5321 7.28916 16.5308L7.29786 16.5308C8.73792 16.5457 10.1665 16.2736 11.5002 15.7303C12.8339 15.1869 14.046 14.3833 15.0656 13.3663C16.0853 12.3492 16.892 11.1392 17.4388 9.80693C17.6498 9.2927 17.8205 8.76424 17.9499 8.22633C18.1557 7.37057 18.257 6.4909 18.2501 5.60663L18.2501 5.60077V5.07077C18.2501 4.88892 18.3161 4.71326 18.436 4.57649C18.5053 4.49744 18.6264 4.31489 18.7955 4.01699C18.9561 3.73386 19.1339 3.39395 19.3188 3.03477C19.33 3.01305 19.3412 2.99121 19.3525 2.96928C18.8729 3.07342 18.3293 3.12801 17.7595 3.06643C17.579 3.04692 17.4118 2.96264 17.2887 2.8292C16.7858 2.28386 16.1162 1.92085 15.3848 1.79711C15.0602 1.74221 14.6679 1.75478 14.2748 1.82211C13.8477 1.89527 13.476 2.02329 13.2473 2.14546C12.593 2.49503 12.0733 3.05188 11.7696 3.72866C11.4659 4.40545 11.3954 5.16389 11.5692 5.88505C11.6246 6.11496 11.5683 6.35754 11.4174 6.53957C11.2664 6.7216 11.0384 6.82176 10.8022 6.80981C9.95877 6.76715 9.12429 6.6385 8.31142 6.42723C7.45152 6.20374 6.61579 5.8878 5.81921 5.48338C4.64643 4.88797 3.57838 4.11088 2.65354 3.18319C2.61135 3.3988 2.58993 3.61883 2.59008 3.84027L2.59007 3.84219C2.58903 4.39291 2.72418 4.93534 2.98349 5.42119C3.2428 5.90704 3.61822 6.32123 4.07633 6.62689C4.35436 6.81239 4.47608 7.15947 4.37483 7.47798C4.27358 7.7965 3.97378 8.00958 3.63968 8.00049C3.33708 7.99226 3.03702 7.95546 2.74335 7.89114Z"
                    fill="#121212"
                  />
                </svg>
                <svg
                  width="21"
                  height="19"
                  viewBox="0 0 21 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.7868 11.0196C4.83058 11.0344 4.87476 11.0448 4.9189 11.0512C4.96703 11.1644 5.02923 11.3107 5.10179 11.4818C5.27886 11.8994 5.51745 12.4643 5.76373 13.0535C6.26597 14.2552 6.77259 15.4939 6.88447 15.8485C7.02298 16.2868 7.16939 16.5848 7.32923 16.7883C7.41187 16.8935 7.50745 16.9853 7.6193 17.0549C7.6756 17.0899 7.73507 17.1186 7.79715 17.14C7.79988 17.141 7.80262 17.1419 7.80535 17.1428C8.12536 17.2636 8.41712 17.2133 8.59979 17.1518C8.69754 17.1188 8.77662 17.0791 8.83267 17.0469C8.86124 17.0304 8.88539 17.0151 8.90465 17.0021L8.90919 16.9991L11.7354 15.2366L14.9999 17.7394C15.0481 17.7763 15.1006 17.8073 15.1563 17.8316C15.5485 18.0027 15.9282 18.0624 16.2855 18.0136C16.6421 17.9649 16.9253 17.8151 17.1361 17.6464C17.3425 17.4813 17.4824 17.2963 17.5696 17.1589C17.6141 17.0887 17.6475 17.0266 17.671 16.9791C17.6829 16.9552 17.6924 16.9346 17.6998 16.9181L17.7092 16.8963L17.7127 16.8877L17.7142 16.8841L17.7149 16.8824L17.7155 16.8808C17.7327 16.8379 17.7458 16.7935 17.7548 16.7482L20.7351 1.72274C20.7446 1.67469 20.7494 1.62581 20.7494 1.57682C20.7494 1.13681 20.5836 0.718409 20.1938 0.464515C19.8606 0.247518 19.4894 0.238177 19.2548 0.255982C19.0018 0.275189 18.7681 0.337656 18.6112 0.387572C18.5296 0.41355 18.4612 0.438614 18.4119 0.457735C18.3871 0.467345 18.3668 0.47559 18.3516 0.481878L18.3402 0.486665L1.62652 7.04321L1.62436 7.04399C1.6137 7.04786 1.60003 7.05297 1.58378 7.05929C1.55141 7.07189 1.50805 7.08965 1.4574 7.1126C1.35861 7.15738 1.22003 7.22734 1.07783 7.32473C0.850639 7.48031 0.328148 7.90641 0.416129 8.60971C0.486318 9.17078 0.870699 9.51537 1.10489 9.68107C1.23348 9.77206 1.35565 9.83713 1.44462 9.87949C1.48589 9.89913 1.57159 9.93395 1.60877 9.94905L1.61815 9.95287L4.7868 11.0196ZM18.9252 1.86786L18.9228 1.86888C18.9145 1.8725 18.9061 1.87596 18.8977 1.87928L2.16367 8.44378C2.15493 8.44721 2.14613 8.45047 2.13727 8.45357L2.12795 8.4571C2.11725 8.46127 2.09923 8.46858 2.0766 8.47884C2.06378 8.48465 2.05039 8.49099 2.03674 8.4978C2.05549 8.50836 2.07344 8.51754 2.08939 8.52513C2.1047 8.53242 2.11637 8.5374 2.12277 8.54003L5.2654 9.59802C5.32292 9.61738 5.37654 9.64304 5.42576 9.67397L15.8025 3.59948L15.8122 3.59374C15.8198 3.58927 15.8297 3.58353 15.8416 3.5768C15.8652 3.56345 15.8977 3.54568 15.9363 3.52603C16.0083 3.48938 16.1235 3.43497 16.2533 3.39485C16.3437 3.36692 16.6102 3.28823 16.8983 3.38064C17.0761 3.43767 17.2602 3.56028 17.3799 3.76798C17.4394 3.87117 17.4711 3.97483 17.4865 4.06972C17.5272 4.2192 17.5208 4.36681 17.4889 4.49424C17.4201 4.76875 17.2272 4.98287 17.0517 5.14665C16.9014 5.28706 14.956 7.16292 13.0369 9.01468C12.0798 9.93813 11.1325 10.8525 10.4245 11.5359L9.95943 11.9849L15.8314 16.4867C15.966 16.5349 16.0456 16.5325 16.0825 16.5274C16.1264 16.5214 16.1623 16.5045 16.199 16.4752C16.24 16.4424 16.2759 16.398 16.3027 16.3557L16.3038 16.354L19.1943 1.78102C19.1514 1.79133 19.108 1.80361 19.0662 1.81691C19.0189 1.83198 18.9798 1.84634 18.9539 1.85637C18.9411 1.86134 18.9319 1.86511 18.9269 1.86719L18.9252 1.86786ZM10.4639 14.2618L9.29241 13.3636L9.00855 15.1693L10.4639 14.2618ZM8.21773 11.5814L9.3827 10.4567C10.0908 9.77321 11.0382 8.85879 11.9953 7.93524L12.9678 6.997L6.44779 10.8138L6.48278 10.8963C6.66048 11.3154 6.90013 11.8827 7.14772 12.4751C7.33284 12.918 7.52643 13.3844 7.70276 13.8162L7.98579 12.0158C8.01308 11.8422 8.09788 11.692 8.21773 11.5814Z"
                    fill="#121212"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto flex flex-col">
        <div className="flex justify-center items-center border-b border-black h-[10rem]">
          <h2 className="font-[semibold] text-[2.5rem]">Our Service</h2>
        </div>
        <div className="h-full flex">
          <div className="w-1/2 border-r border-black">
            <img
              className="h-full w-full"
              src={serviceImageOne}
              alt="A picture of a girl with flowers"
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
                    deliveries with our flexible subscription service - up to
                    30% more profitable than one-time purchases.
                  </p>
                </div>
              </div>
              <button className="font-[medium] uppercase border-black border py-4 self-center w-[35%]">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ItemHighlights = ({ item }: Item) => {
  return (
    <div className="w-1/2 flex flex-col">
      {item.map((item, index) => {
        return item.itemStyle.includes("even-wrapper") ? (
          <Item key={index} item={item} index={index} borderStyle={true} />
        ) : (
          <Item key={index} item={item} index={index} borderStyle={false} />
        );
      })}
    </div>
  );
};

const Item = ({ item, index, borderStyle }: Product) => {
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

export default Home;
