import { useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="border border-black self-start w-[25%] flex">
      <div className="flex items-center justify-between gap-2 w-full">
        <button
          className="border-r border-black p-2"
          onClick={() => setQuantity((prev) => (prev != 1 ? prev - 1 : 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 cursor-pointer"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
        <div className="px-4">
          <span className="font-[regular] text-base">{quantity}</span>
        </div>
        <button
          className="p-2 border-l border-black"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Quantity;
