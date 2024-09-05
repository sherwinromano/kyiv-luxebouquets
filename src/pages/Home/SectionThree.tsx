type ChooseUs = {
  title: string;
  body: string;
};

const SectionThree = () => {
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
  );
};

export default SectionThree;
