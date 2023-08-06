"use client";
import React from "react";
import Card from "@/components/Card";
import Link from "next/link";

const page = () => {
  // map card component here
  const card = [
    {
      title: "class 4 Mathematics",
      image: "/image 2.png",
      status: "Active",
      statusColor: "linear-gradient(270deg, #CEFA7D 0%, #A0E99A 100%)",
      button1: "Browse",
      button2: "Buy Now",
    },
    {
      title: "class 4 Mathematics",
      image: "/image 2.png",
      status: "Active",
      statusColor: "linear-gradient(270deg, #CEFA7D 0%, #A0E99A 100%)",
      button1: "Browse",
      button2: "Buy Now",
    },
    {
      title: "class 4 Mathematics",
      image: "/image 2.png",
      status: "Active",
      statusColor: "linear-gradient(270deg, #CEFA7D 0%, #A0E99A 100%)",
      button1: "Browse",
      button2: "Buy Now",
    },
    {
      title: "class 4 Mathematics",
      image: "/image 2.png",
      status: "Active",
      statusColor: "linear-gradient(270deg, #CEFA7D 0%, #A0E99A 100%)",
      button1: "Browse",
      button2: "Buy Now",
    },
  ];
  return (
    <div className="flex flex-col">
      {/* courses tab */}
      <div className="flex flex-col mt-8  px-5 ">
        <div className="font-semibold">Classroom for 4 & 5</div>
        <div className="mt-5 flex justify-between relative">
          <div className="absolute right-0 bg-gradient-to-l from-black w-max px-2 h-full flex items-center text-white">
            <Link href={'/dashboard/classroom-for-4-and-5'}>See More</Link>
          </div>
          {card.map((item) => (
            <Card
              title={item.title}
              image={item.image}
              status={item.status}
              statusColor={item.statusColor}
              button1={item.button1}
              button2={item.button2}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-8  px-5 ">
        <div className="font-semibold">Classroom for 6 & 8</div>
        <div className="mt-5 flex justify-between relative">
          <div className="absolute right-0 bg-gradient-to-l from-black w-max px-2 h-full flex items-center text-white">
            <Link href={'/dashboard/classroom-for-6-and-8'}>See More</Link>
          </div>
          {card.map((item) => (
            <Card
              title={item.title}
              image={item.image}
              status={item.status}
              statusColor={item.statusColor}
              button1={item.button1}
              button2={item.button2}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-8  px-5 ">
        <div className="font-semibold">Classroom for 9 & 10</div>
        <div className="mt-5 flex justify-between relative">
          <div className="absolute right-0 bg-gradient-to-l from-black w-max px-2 h-full flex items-center text-white">
            <Link href={'/dashboard/classroom-for-9-and-10'}>See More</Link>
          </div>
          {card.map((item) => (
            <Card
              title={item.title}
              image={item.image}
              status={item.status}
              statusColor={item.statusColor}
              button1={item.button1}
              button2={item.button2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
