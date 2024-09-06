import founderImage from "../../assets/about-page/hero-image-1.jpg";
import SocialLinks from "../../components/SocialLinks";

const Founder = () => {
  return (
    <div className="flex flex-col h-auto">
      <div className="flex border-b border-black">
        <div className="w-1/2 border-r border-black flex flex-col gap-[4rem] justify-center items-center">
          <div className="w-[68%] flex flex-col gap-4">
            <div className="flex flex-col items-center self-center">
              <h2 className="font-[semibold] text-black text-[3rem]">
                Our Story
              </h2>
              <h3 className="font-[semibold] text-black text-[1.5rem]">
                About
              </h3>
              <h2 className="font-[semibold] text-black text-[3rem]">
                Kyiv LuxeBouquets
              </h2>
            </div>
            <p className="text-center text-base font-[regular]">
              Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
              Spread Joy with Our Online Flower Delivery Service
            </p>
          </div>
          <SocialLinks
            wrapperStyle={"w-[50%] flex justify-between"}
            iconStyle={
              "flex justify-center items-start border border-black p-3 w-[3rem] rounded-full"
            }
          />
        </div>
        <div className="w-1/2">
          <img src={founderImage} alt="Founder image" />
        </div>
      </div>
      <div className="flex justify-center items-center py-[4.5rem] border-b border-black">
        <div className="w-1/2 flex flex-col gap-4">
          <div className="flex flex-col items-center self-center gap-4">
            <h2 className="uppercase font-[medium] text-base">Our Story</h2>
            <h3 className="font-[medium] text-[2.3rem]">
              Our Founder's Passion
            </h3>
          </div>
          <p className="font-[regular] text-base text-center w-[95%] self-center">
            Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska with the
            goal of bringing unique and exquisite bouquets to the people of
            Kyiv. Natalia has always had a passion for flowers and design, and
            his vision was to create a local floral studio that would specialize
            in the creation and delivery of fresh, beautiful, and distinctive
            bouquets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
