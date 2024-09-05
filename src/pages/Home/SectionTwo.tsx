import Button from "../../components/Button";

const SectionTwo = () => {
  return (
    <div className="flex border-b border-black">
      <div className="w-1/2 border-r border-black p-[4.5rem]">
        <h2 className="font-[semibold] text-[3rem]">About Us</h2>
      </div>
      <div className="w-1/2 p-[4.5rem] flex flex-col gap-4">
        <h4 className="font-[medium] text-base">Our Story</h4>
        <div>
          <h3 className="font-[medium] text-[2rem]">Kyiv LuxeBouquets</h3>
          <p className="font-[regular] text-base mt-2">
            We are a modern local floral studio, which specializes in the design
            and delivery of unique bouquets. We have the best florists who
            carefully select each look, our studio cooperates directly with
            farms for growing different flowers, so we always have fresh
            flowers, which are collected by our florists in exquisite bouquets.
            We have a collection of fresh bouquets, collections of dried
            bouquets, house plants, as well as fragrant candles from luxury
            brands to create the perfect atmosphere. Make someone's day amazing
            by sending flowers, plants and gifts the same or next day. Ordering
            flowers online has never been easier.
          </p>
        </div>
        <Button
          buttonStyle={
            "text-base font-[medium] uppercase self-start border border-black p-3 w-[30%] mt-[2rem]"
          }
          buttonLabel={"Learn More"}
        />
      </div>
    </div>
  );
};

export default SectionTwo;
