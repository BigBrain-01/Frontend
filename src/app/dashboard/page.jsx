"use client";

import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";

import moment from "moment";
import Card from "@/components/Card";

const page = () => {
  // map card component here
  const card = [
    {
      title: "Class 4 Mathematics",
      image: "/image 2.png",
      status: "Active",
      statusColor: "linear-gradient(270deg, #CEFA7D 0%, #A0E99A 100%)",
      button1: "Browse",
      button2: "Buy Now",
    },
    {
      title: "Class 5 Mathematics",
      image: "/image 2.png",
      status: "Active",
      statusColor: "linear-gradient(270deg, #CEFA7D 0%, #A0E99A 100%)",
      button1: "Browse",
      button2: "Buy Now",
    },
    {
      title: "class 6 Mathematics",
      image: "/image 2.png",
      status: "Active",
      statusColor: "linear-gradient(270deg, #CEFA7D 0%, #A0E99A 100%)",
      button1: "Browse",
      button2: "Buy Now",
    },
    {
      title: "class 8 Mathematics",
      image: "/image 2.png",
      status: "Active",
      statusColor: "linear-gradient(270deg, #CEFA7D 0%, #A0E99A 100%)",
      button1: "Browse",
      button2: "Buy Now",
    },
  ];
  return (
    <div className="flex">
      <Sidebar />
      {/* Dashboard right */}
      <div className="flex flex-col w-full bg-[#EFF3FD] px-5">
        {/* navbar */}
        <div className="flex px-5 py-5 gap-5 bg-[#EFF3FD]  items-center justify-between w-full h-14">
          <div className="flex gap-5 items-center">
            <div className="flex flex-col text-xs">
              <div className="text-lg font-semibold truncate w-[194px]">
                Welcome Darpan Bahadur
              </div>
              {moment().format("hh:mm a DD MMM YYYY")}
            </div>

            <div className="flex  px-2  bg-white w-[627px] items-center rounded-md gap-3 h-[48px] ">
              <SearchIcon sx={{width:"24px",height:'24px',color:"#AEB6CF",}}/>
              <input
                className="rounded-md w-full h-8 outline-none "
                type="Search"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex items-center gap-5 ">
            <div className="bg-white  cursor-pointer p-3 rounded-md">
              <Image src="/bell.svg" alt="" width={24} height={24} />
            </div>
            <div className="truncate">Darpan Bahadur</div>
            <div className="cursor-pointer">
              <Image src="/profile pic.png" alt="" width={48} height={48}  className="rounded-full"/>
            </div>
          </div>
        </div>
        {/* courses tab */}
        <div className="flex flex-col mt-8  px-5 ">
          <div className="font-semibold">Classroom for 4 & 5</div>
          <div className="mt-5 flex justify-between ">
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
          <div className="mt-5 flex justify-between ">
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
          <div className="mt-5 flex justify-between ">
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
    </div>
  );
};

export default page;
