"use client"
import React from 'react'
import Sidebar from './Sidebar'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Image from 'next/image';

const page = () => {
  return (
    <div className='flex gap-10 bg-[#EAECFE]'>
      <div className='w-[23%]'>
        <Sidebar />
      </div>
      <div className='w-[73%] pt-3 flex justify-around '>
        <div className='min-w-[694px] p-2 gap-5 flex items-center shadow-md rounded-md bg-[#FFF] h-[48px]'>
          <SearchIcon sx={{ width: "24px", height: "24px", color: '#AEB6CF' }} />
          <input type="text" placeholder='Search' style={{ border: 'none', outline: 'none' }} className='w-full placeholder:text-[#AEB6CF] placeholder:text-[14px] placeholder:font-[400]' />
        </div>
        <div className='flex gap-5 '>
          <div className='w-[48px] h-[48px] bg-[#FFF] items-center flex justify-center rounded-md'>
            <NotificationsOutlinedIcon sx={{ width: "24px", height: '24px' }} />
          </div>
          <div className='flex h-[48px] items-center gap-1 w-[140px] justify-between'>
            <span className='max-w-[90px] text-[16px] text-[#00261C] font-poppins font-[500] leading-[24px] overflow-ellipsis'>Darpan Bahadur</span>
            <Image src={"/profile.png"} width={'48'} height={'48'} className='rounded-full' />
          </div>
        </div>
      </div>
      </div>
  )
}
export default page
