import featureOne from "../../assets/about-page/hero-image-2.jpg";
import featureTwo from "../../assets/about-page/hero-image-3.jpg";
import featureThree from "../../assets/about-page/hero-image-4.jpg";

type Features = {
  image: string;
  title: string;
  subtitle: string;
  style: string;
  imageStyle: string;
};

const Feature = () => {
  const features: Features[] = [
    {
      image: featureOne,
      title: "Expertly Crafted Bouquets",
      subtitle:
        "At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who carefully select each bloom, ensuring that only the freshest and most stunning flowers make it into our bouquets. We work directly with farms to source the highest quality flowers, and our skilled florists expertly craft each bouquet to perfection.",
      style: "flex border-b border-black",
      imageStyle: "border-r border-black",
    },
    {
      image: featureTwo,
      title: "Bouquets, Gifts & Ambiance",
      subtitle:
        "In addition to our stunning bouquets, we also offer a collection of dried bouquets, house plants, and fragrant candles from luxury brands to create the perfect ambiance. We believe that sending flowers, plants, and gifts should be easy and stress-free, which is why we offer same or next-day delivery throughout Kyiv.",
      style: "flex flex-row-reverse border-b border-black",
      imageStyle: "border-l border-black",
    },
    {
      image: featureThree,
      title: "Making Every Day Special",
      subtitle:
        "Our mission is simple: to make every day special and memorable for our customers. We are dedicated to providing the highest quality flowers, exceptional customer service, and a seamless online experience that will make you feel confident and satisfied with your purchase.Thank you for choosing Kyiv LuxeBouquets. We look forward to bringing joy and happiness to your life with our beautiful bouquets and gifts.",
      style: "flex",
      imageStyle: "border-r border-black",
    },
  ];

  return (
    <div className="flex flex-col">
      {features.map((feature, index) => {
        return (
          <div className={feature.style} key={index}>
            <div className="w-1/2">
              <img
                className={feature.imageStyle}
                src={feature.image}
                alt="Feature image"
              />
            </div>
            <div className="w-1/2 p-[3rem] flex flex-col gap-4">
              <h3 className="text-[2.3rem] text-black font-[medium]">
                {feature.title}
              </h3>
              <p className="text-base text-black font-[regular]">
                {feature.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feature;
