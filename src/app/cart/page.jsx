'use client'
import React from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import moment from "moment";
import { Button } from '@mui/material';

const page = () => {
  const data = [
    { id: 1, image: "/image3.png", class: "Class 4 Mathematics", desc: "Videos, tutorials, assignments and many more", actualprice: '$28,180', discounted: '$25,180', offer: "30% off" },
    { id: 2, image: "/image3.png", class: "Class 5 Science", desc: "Videos, tutorials, assignments and many more", actualprice: '$30,180', discounted: '$25,180', offer: "30% off" },
    { id: 3, image: "/image3.png", class: "Class 6 Mathematics", desc: "Videos, tutorials, assignments and many more", actualprice: '$35,180', discounted: '$32,180', offer: "30% off" },
    { id: 4, image: "/image3.png", class: "Class 7 English", desc: "Videos, tutorials, assignments and many more", actualprice: '$24,180', discounted: '$20,180', offer: "30% off" },
    { id: 5, image: "/image3.png", class: "Class 8 Mathematics", desc: "Videos, tutorials, assignments and many more", actualprice: '$36,180', discounted: '$30,180', offer: "30% off" },
    { id: 6, image: "/image3.png", class: "Class 9 Social Science", desc: "Videos, tutorials, assignments and many more", actualprice: '$28,180', discounted: '$25,180', offer: "30% off" },
  ]
  return (
    <div className="flex">
      <Sidebar />
      {/* Dashboard right */}
      <div className="flex flex-col px-7 w-full bg-[#EFF3FD] gap-5">
        {/* navbar */}
        <div className="flex py-5 gap-5 bg-[#EFF3FD]  items-center justify-between w-full h-14">
          <div className="flex gap-5 items-center">
            <div className="flex flex-col text-xs">
              <div className="text-lg font-semibold">
                Welcome Darpan Bahadur
              </div>
              {moment().format("hh:mm a DD MMM YYYY")}
            </div>
            <div className="flex  px-2  bg-white w-[400px] items-center rounded-md gap-3 h-[48px] ">
              <SearchIcon sx={{ width: "24px", height: '24px', color: "#AEB6CF", }} />
              <input
                className="rounded-md w-full h-8 outline-none "
                type="Search"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex items-center gap-5 ">
            <div className="bg-white  cursor-pointer p-3 rounded-md">
              <Image src="/bell.svg" alt="" width={20} height={10} />
            </div>
            <div>Darpan Bahadur</div>
            <div className="cursor-pointer">
              <Image src="/profile pic.png" alt="" width={40} height={40} className="rounded-full" />
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='bg-white w-[60%] p-3 rounded-md flex flex-col gap-7 h-[100vh] overflow-scroll'>
            <h1 className='text-[#00261C] text-[23px] font-semibold font-poppins leading-normal'>Cart</h1>
            {data.map((value, i) => (
              <div className='flex gap-3'>
                <Image src={value.image} width={180} height={99} />
                <div className='flex flex-col gap-1'>
                  <span className='text-[14px] text-[#00140E] font-[500] font-poppins leading-[21px]'>{value.class}</span>
                  <span className='text-[12px] text-[#ADADAD] font-[500] font-poppins leading-[18px]'>{value.desc}</span>
                  <div className='flex gap-2'>
                    <div className='relative'>
                    <span className='text-[12px] text-[#C6C6C6] font-semibold font-poppins leading-[24px]'>{value.actualprice}</span>
                    <hr className='absolute top-1/2 w-full ' style={{color:'#C6C6C6'}} /> 
                    </div>
                    <span className='text-[16px] text-[#515151] font-semibold font-poppins leading-[24px]'>{value.discounted}</span>
                    <span className='text-[12px] text-[#4F9B53] font-semibold font-poppins leading-[24px]'>{value.offer}</span>
                  </div>
                  <Button variant='text' type='none' sx={{ width: '60px', color: '#000' }} disableRipple >Remove</Button>
                </div>
              </div>
            ))}
          </div>
          <div className='bg-white w-[30%] h-max rounded-md'>
            <h1 className='text-[18px] text-[#8A8A8A] font-semibold font-poppins leading-normal p-3'>Price Details</h1>
            <hr style={{ color: '#F7F7F7' }} />
            <div className='p-3 flex flex-col gap-2'>
              <div className='flex justify-between'>
                <span className='text-[14px] text-[#515151] font-semibold font-poppins leading-[24px]'>Price(2 items)</span>
                <span className='text-[14px] text-[#515151] font-semibold font-poppins leading-[24px]'>$28,180</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-[14px] text-[#515151] font-semibold font-poppins leading-[24px]'>Discount</span>
                <span className='text-[14px] text-[#4F9B53] font-semibold font-poppins leading-[24px]'>-$28,180</span>
              </div>
              <hr className='mt-7'/>  
              <div className='flex justify-between items-center mt-3 mb-3'>
                <span className='text-[18px] text-[#515151] font-semibold font-poppins leading-[24px]'>Total Amount</span>
                <span className='text-[18px] text-[#515151] font-semibold font-poppins leading-[24px]'>$20,000</span>
              </div>
              <hr />  
              <span className='text-[14px] text-[#4F9B53] font-semibold leading-[24px] font-poppins flex justify-center'>You will save $8000 on this course</span>
              <Button variant='contained' type='none' sx={{backgroundColor:'#00693B',textTransform:'capitalize',padding:'10px 0px ',"&:hover":{backgroundColor:'#00693B'}}}>Buy Now</Button>

            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default page