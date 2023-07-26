import React from "react";
import Image from "next/image";
const Card = () => {
  return (
    <div className="flex flex-col w-[240px] bg-white border rounded-lg ">
      <div className="w-full">
        <Image src="/image 2.png" alt="" quality={100} className="object-cover" width={240} height={240} />
      </div>
      <div className="flex flex-col p-2">
        <div
          style={{
            background: "linear-gradient(270deg, #CEFA7D 0%, #A0E99A 100%)",
          }}
          className="rounded-lg w-20 p-1  font-medium flex justify-center"
        >
          <button className="text-xs">Active</button>
        </div>
      </div>
      <div className="text-sm px-3">
        class 4 Mathematics
      </div>
      <div className="flex gap-2 p-3">
        <button className="bg-[#00693B] text-sm p-1 text-white rounded-md px-2">Browse</button>
        <button className="bg-[#83FFC9] text-sm p-1 text-[#00693B] rounded-md px-2">Buy Now</button>
      </div>
    </div>
  );
};

export default Card;
