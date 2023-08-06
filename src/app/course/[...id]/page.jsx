"use client"
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Image from 'next/image';
import Notes from './Notes';
import Assignment from './Assignments'
import Practice from './Practice';
import VideoPlayer from '@/components/coursevideo/VideoPlayer';
import Reviews from '@/components/coursevideo/Reviews';

const page = () => {
  const [shownotes, setShownotes] = useState(false);
  const [showassign, setShowassign] = useState(false);
  const [showques, setShowques] = useState(false);
  const [showreviews, setShowreviews] = useState(true);
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-1 flex-col gap-5'>
        <div className='flex flex-col gap-14 bg-[#EFF3FD] px-10'>
          <div className='pt-3 flex justify-between '>
            <div className='p-2 w-[60%] gap-5 flex items-center bg-[#FFF] h-[48px] rounded-md'>
              <SearchIcon sx={{ width: "24px", height: "24px", color: '#AEB6CF' }} />
              <input type="Search" placeholder='Search' style={{ border: 'none', outline: 'none' }} className='w-full placeholder:text-[#AEB6CF] placeholder:text-[14px] placeholder:font-[400]' />
            </div>
            <div className='flex gap-5'>
              <div className='w-[48px] h-[48px] bg-[#FFF] items-center flex justify-center rounded-md'>
                <NotificationsOutlinedIcon sx={{ width: "24px", height: '24px' }} />
              </div>
              <div className='flex h-[48px] items-center gap-1 w-[140px] justify-between'>
                <span className='max-w-[90px] text-[16px] text-[#00261C] font-poppins font-[500] leading-[24px] '>Darpan Bahadur</span>
                <Image src={"/profile.png"} width={'48'} height={'48'} className='rounded-full' />
              </div>
            </div>
          </div>
          <div className='flex items-center h-[max]'>
            <VideoPlayer src={'/video1.mp4'} />
          </div>
          <div className='flex gap-9 pb-5 text-[20px] text-[#000] font-semibold font-poppins leading-[23px]'>
            <span className='cursor-pointer' style={{ textDecoration: shownotes ? "underline" : "" }} onClick={() => { setShownotes(!shownotes); setShowassign(false); setShowques(false); setShowreviews(false) }}>Notes</span>
            <span className='cursor-pointer' onClick={() => { setShowassign(!showassign); setShownotes(false); setShowques(false); setShowreviews(false) }} style={{ textDecoration: showassign ? "underline" : "" }} >Assignments</span>
            <span className='cursor-pointer' onClick={() => { setShowques(!showques); setShowassign(false); setShownotes(false); setShowreviews(false) }} style={{ textDecoration: showques ? "underline" : "" }} >Practice questions</span>
            <span className='cursor-pointer' onClick={() => { setShowreviews(true); setShowassign(false); setShownotes(false); setShowques(false) }} style={{ textDecoration: showreviews ? "underline" : "" }} >Reviews</span>
          </div>
        </div>
        {shownotes &&
          <div className='flex flex-col'>
            <Notes />
          </div>
        }
        {showassign &&
          <div>
            <Assignment />
          </div>
        }
        {showques &&
          <div>
            <Practice />
          </div>
        }
        {showreviews &&
          <div>
            <Reviews />
          </div>
        }
      </div>
    </div>
  )
}
export default page
