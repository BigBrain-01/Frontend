"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-[20%] max-h-[100vh] flex flex-col px-8 py-2.5 gap-12 sticky left-0 top-0">
      <div className="flex  items-center font-semibold text-xl">
        <Image src="/logo.png" alt="" width={30} height={50} />
        <h1><span className="text-[#2F3192]">Study</span>Titans</h1>
      </div>
      <div className="flex flex-col gap-10 justify-center text-sm">
        <div className="flex gap-2 items-center text-[#00693B] font-bold">
          <Image src="/classroom.svg" alt="" quality={100} width={20} height={20} />
          <h1>Classroom</h1>

        </div>
        <div className="flex gap-2 items-center">
          <Image src="/courses.svg" alt="" quality={100} width={20} height={24} />
          <h1>Courses</h1>
        </div>
        <div className="flex gap-2 items-center">
          <Image src="/doubts.svg" alt="" quality={100} width={20} height={24} />
          <h1>Doubts</h1>
        </div>
        <div className="flex  gap-2 items-center">
          <Image src="/help.svg" alt="" quality={100} width={20} height={24} />
          <h1>Help</h1>
        </div>
        <div className="flex  gap-2 items-center">
          <Image src="/billing.svg" alt="" quality={100} width={20} height={24} />
          <h1>Billing</h1>
        </div>
        <Link href={'../../app/profile'}>
          <div className="flex gap-2 items-center">
            <Image src="/settings.svg" alt="" quality={100} width={20} height={24} />
            <h1>Settings</h1>
          </div>
        </Link>
      </div>
    </div>

  );
};

export default Sidebar;
