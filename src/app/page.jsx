'use client'
import { Button, Paper } from '@mui/material'
import Navbar from '@/components/navbar/Navbar'
import { useSession } from 'next-auth/react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Image from 'next/image';
import Footer from '../components/Footer'
import { useState } from 'react';


export default function Home() {
  const data = [
    { id: 1, img: '/sliderimg.png', class: 'Class 10-Demo', author: 'Alita Yadav' },
    { id: 2, img: '/sliderimg.png', class: 'Class 10-Demo', author: 'Alita Yadav' },
    { id: 3, img: '/sliderimg.png', class: 'Class 10-Demo', author: 'Alita Yadav' },
    { id: 4, img: '/sliderimg.png', class: 'Class 10-Demo', author: 'Alita Yadav' },
    { id: 5, img: '/sliderimg.png', class: 'Class 10-Demo', author: 'Alita Yadav' },
    { id: 6, img: '/sliderimg.png', class: 'Class 10-Demo', author: 'Alita Yadav' }
  ]
  const plan = [
    {
      id: 1, img: '/plan.png', class: 'Class 4-5', cost: '$50 USD', feature: {
        fe1: 'Easy download', fe2: 'Unlimited doubt Clearance', fe3: 'Easy download', fe4: 'Unlimited doubt Clearance'
      }
    },
    {
      id: 2, img: '/plan.png', class: 'Class 6-8', cost: '$50 USD', feature: {
        fe1: 'Easy download', fe2: 'Unlimited doubt Clearance', fe3: 'Easy download', fe4: 'Unlimited doubt Clearance'
      }
    },
    {
      id: 3, img: '/plan.png', class: 'Class 9-10', cost: '$50 USD', feature: {
        fe1: 'Easy download', fe2: 'Unlimited doubt Clearance', fe3: 'Easy download', fe4: 'Unlimited doubt Clearance'
      }
    },
  ]
  const question = [
    {
      id: 1, question: 'What is Study Titans ?', ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also"
    },
    {
      id: 2, question: 'What is Study Titans ?', ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also"
    },
    {
      id: 3, question: 'What is Study Titans ?', ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also"
    },
  ]
  const session = useSession()
  // console.log(session)
  const [play, setPlay] = useState(false);
  const [slideIndex, setSlideindex] = useState(0);
  const [showans, setShowans] = useState(false);
  const [quesid, setQuesid] = useState(null);
  const [playid, setPlayid] = useState(null);

  const handleSlide = (direction) => {
    if (direction === "left") {
      setSlideindex(slideIndex > 0 ? slideIndex - 1 : slideIndex)
      console.log("clickedR")
    } else {
      setSlideindex(slideIndex < 1 ? slideIndex + 1 : slideIndex);
      console.log("clickedL")
    }

  }
  return (
    
    // main div
    <div className='flex flex-col font-inter overflow-y-hidden'>
      {/* navbar */}
      <Navbar />
      {/* Get Started */}
      <div className='bg-[#FAF8F4] flex justify-between px-32 items-center'>
        <div className='max-w-[580px] flex flex-col gap-4'>

          <h1 className='text-[60px] font-extrabold leading-normal'>Getting Best Quality Education Is Now More <span className='relative text-[#2F3192]'>
            Easier
            <Image className='absolute right-0 -bottom-6' src={'/underline.png'} alt='' width={236} height={44} />
          </span></h1>
          <p className='w-[420px] text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
          <button className='bg-[#00693B] rounded-md text-white w-max text-sm font-normal py-[10px] px-8'>Get Started</button>
        </div>
        <div className="relative w-[500px] -mt-10 h-[556px] bg-[url('/julia.png')] bg-[length:450px] bg-center bg-no-repeat">
          <Image src={'/dancingBook.png'} alt='' width={'90'} quality={100} className='absolute top-20 left-40' height={'120'} />
          <Image src={'/u.png'} alt='' width={'80'} quality={100} className='absolute top-20 -right-10' height={'120'} />
          <Image src={'/greenArrow.png'} alt='' width={'80'} quality={100} className='absolute bottom-20 -right-20' height={'120'} />
          <Image src={'/graph.png'} alt='' width={'80'} quality={100} className='absolute bottom-28 left-28' height={'120'} />
        </div>
      </div>
      {/* about section */}
      <div className='px-32 flex flex-col justify-center' id='about'>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <span className='text-[20px] text-[#0015C8] font-bold font-inter leading-normal'>About Us</span>
            <div className='text-4xl font-inter text-[#18191F] font-[800] leading-normal'>An <span className='relative' >Easier
              <Image className='absolute -bottom-4 left-0' src={'/underline.png'} alt='' width={200} height={44} />
            </span> Way to be<br /> Sub and Find Sub
            </div>
          </div>
          <div className='flex relative '>
            <p className='w-[546px] text-[20px] text-[#757575] font-inter font-semibold leading-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also</p>
            <Image src={'/arrow.png'} alt='' width={'150'} quality={100} height={'120'} className='absolute right-[34rem] -bottom-[3.5rem]'></Image>
          </div>
        </div>
      </div>
      {/* Why choose us */}
      <div className='flex py-5'>
        <div className='relative w-[50%] '>
          <Image src={'/choose2.png'} width={'130'} height={'200'} className='absolute left-[12rem] top-[1rem]' />
          <Image src={'/choose1.png'} width={'130'} height={'200'} className='absolute left-[2rem] top-[10rem]' />
          <Image src={'/choose3.png'} width={'130'} height={'200'} className='absolute left-[22rem] top-[8rem]' />
          <Image src={'/Ellipse2.png'} width={'25'} height={'30'} className='absolute left-[8rem] top-[6rem]' />
          <Image src={'/Ellipse3.png'} width={'25'} height={'30'} className='absolute left-[10rem] top-[23rem]' />
          <Image src={'/Ellipse4.png'} width={'25'} height={'30'} className='absolute left-[19rem] top-[16rem]' />
        </div>
        <div className='flex flex-col gap-3 '>
          <div className='flex items-center gap-2'>
            <div className='bg-[url("/Ellipse1.png")] bg-contain w-[11px] h-[11px] '></div>
            <h1 className='text-[#757575] text-[17px] font-semibold font-inter leading-normal'>Why Choose Us</h1>
          </div>
          <div className='flex flex-col gap-5'>
            <span className='text-[#18191F] text-[35px] font-inter font-semibold leading-normal'>We deliver great service<br /> with  outstanding value</span>
            <div className='flex gap-3'>
              <div className='bg-[#DDFBF8] w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                <Image src={"/rocket.png"} width={'18'} height={'18'} />
              </div>
              <div>
                <h1 className='text-[#18191F] text-[18px] font-inter leading-normal font-semibold'>Fast working process</h1>
                <span className='text-[16px] text-[#757575] font-semibold font-inter'>At studytitans provide fast placed development, <br />with flexible collaboration & payments</span>
              </div>
            </div>
            <div className='flex gap-3'>
              <div className='bg-[#E3E2FD] w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                <Image src={"/teams.png"} width={'18'} height={'18'} />
              </div>
              <div>
                <h1 className='text-[#18191F] text-[18px] font-inter leading-normal font-semibold'>Dedicated team</h1>
                <span className='text-[16px] text-[#757575] font-semibold font-inter'>At studytitans provide fast placed development, <br />with flexible collaboration & payments</span>
              </div>
            </div>
            <div className='flex gap-3'>
              <div className='bg-[#FFE1E9] w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                <Image src={"/time.png"} width={'18'} height={'18'} />
              </div>
              <div>
                <h1 className='text-[#18191F] text-[18px] font-inter leading-normal font-semibold'>24/7 hours support</h1>
                <span className='text-[16px] text-[#757575] font-semibold font-inter'>At studytitans provide fast placed development, <br />with flexible collaboration & payments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Videos */}
      <div className='px-32 flex flex-col gap-10 relative'>
        <div className='flex flex-col'>
          <span className='text-[20px] text-[#0015C8] font-bold font-inter leading-normal'>Featured Videos</span>
          <span className='text-4xl font-inter text-[#18191F] font-[800]'>Community Programs</span>
        </div>
        <div className='w-full overflow-hidden'>
          <div className='flex whitespace-nowrap gap-7 items-center transition duration-[1000] ease' style={{ transform: `translate3d(${-slideIndex * 100}%, 0, 0)` }}>
            {data.map((value, i) => (
              <Paper elevation={1} key={i} sx={{ display: 'inline-block', gap: '5px', flexDirection: 'column' }} className={`min-w-[400px] `}>
                <div className='flex items-center justify-center'>
                  <Image src={value.img} alt='' width={'383'} height={'237'}></Image>
                </div>
                <div className='flex justify-between px-3'>
                  <div className='flex flex-col '>
                    <span className='text-[20px] text-[#000000] font-bold font-inter'>{value.class}</span>
                    <span className='text-[14px] text-[#696969] font-medium '>{value.author}</span>
                  </div>
                  <div onClick={() => { setPlay(!play); setPlayid(value.id) }}>{!(play && (value.id === playid)) ? <PlayArrowIcon sx={{ width: '49px', height: '49px ', cursor: 'pointer', color: '#EE0000' }} /> : <PauseIcon color='error' sx={{ width: '45px', height: '45px ', cursor: 'pointer' }} />}</div>
                </div>
              </Paper>
            ))}
          </div>
        </div>
        <Paper elevation={3} onClick={() => { handleSlide("left") }} className='w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center absolute top-1/2 left-28  z-20 cursor-pointer'>
          <KeyboardArrowLeftRoundedIcon color={slideIndex == 0 ? 'disabled' : ""} />
        </Paper>
        <Paper elevation={3} onClick={() => { handleSlide("right") }} className='w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center absolute top-1/2 right-[8.3rem] z-20 cursor-pointer'>
          <ChevronRightRoundedIcon color={slideIndex > 0 ? 'disabled' : ""} />
        </Paper>
      </div>
      <div className='flex flex-col'>
        {/* achievements */}
        <div className='bg-[#00693B] w-full flex items-center justify-center p-10'>
          <div className='flex flex-col gap-9'>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-[40px] text-[#FFFFFF] font-inter font-bold'>Some count that matters</h1>
              <span className='text-[#FFFFFF] text-[18px] font-inter font-medium'>Our achievement in the journey depicted in numbers</span>
            </div>
            <div className='flex gap-10'>
              <div className='flex flex-col items-center'>
                <h1 className='text-[48px] text-[#FFFFFF] font-inter font-bold'>5</h1>
                <span className='text-[18px] text-[#FFFFFF] font-inter font-medium'>Service Geographics</span>
              </div>
              <hr className='bg-[#FFFFFF] h-[6rem] w-[1px]' />
              <div className='flex flex-col items-center'>
                <h1 className='text-[48px] text-[#FFFFFF] font-inter font-bold'>30</h1>
                <span className='text-[18px] text-[#FFFFFF] font-inter font-medium'>Fortune 500 Clients</span>
              </div>
              <hr className='bg-[#FFFFFF] h-[6rem] w-[1px]' />
              <div className='flex flex-col items-center'>
                <h1 className='text-[48px] text-[#FFFFFF] font-inter font-bold'>300</h1>
                <span className='text-[18px] text-[#FFFFFF] font-inter font-medium'>Dedicated Members</span>
              </div>
              <hr className='bg-[#FFFFFF] h-[6rem] w-[1px]' />
              <div className='flex flex-col items-center'>
                <h1 className='text-[48px] text-[#FFFFFF] font-inter font-bold'>8</h1>
                <span className='text-[18px] text-[#FFFFFF] font-inter font-medium'>Years of Journey</span>
              </div>
            </div>
          </div>
        </div>
        {/* plans */}
        <div className='flex flex-col px-32 gap-5 bg-[#EAECFE] py-10'>
          <div className='flex flex-col items-center'>
            <h1 className='text-[43px] text-[#000000] font-inter font-bold mt-[2rem] '>Subscription Plans</h1>
            <span className='text-[14px] text-[#000000] font-inter font-semibold'>Our achievement in the journey depicted in numbers</span>
          </div>
          <div className='flex justify-evenly'>
            {plan.map((value, i) => (
              <Paper elevation={3} key={i} className='flex flex-col items-center w-[300px]  py-1 px-1 gap-3' sx={{ borderRadius: "12px" }}>
                <Image src={value.img} width={'300'} height={'165'} />
                <h1 className='text-[30px] font-inter font-bold text-[#FFD600]'>{value.class}</h1>
                <span className='text-[30px] text-[#000000] font-inter font-bold leading-normal'>$50 USD</span>
                <div className='flex flex-col text-[12px] text-[#3B3B3B] font-inter font-semibold leading-[14.5px] items-center gap-2'>
                  <span>{value.feature.fe1}</span>
                  <span>{value.feature.fe2}</span>
                  <span>{value.feature.fe3}</span>
                  <span>{value.feature.fe4}</span>
                  <span>{value.feature.fe1}</span>
                </div>
                <button className='bg-[#00693B] p-3 rounded-md text-[14px] text-[#FFFFFF] font-inter mt-10 px-5'>Buy Now</button>
                <div className='bg-[#F4F4F4] w-full p-[3px] h-[47px] items-center flex justify-center font-inter text-[12px] text-[#3B3B3B] rounded-xl'>
                  1 month subscription
                </div>
              </Paper>
            ))}
          </div>
        </div>
      </div>
      {/* questions */}
      <div className='flex flex-col items-center gap-3 h-max pb-16 '>
        <div className='mb-10'>
          <h1 className='text-[43px] text-[#000000] font-inter leading-normal font-bold '>Frequently Asked Questions</h1>
        </div>
        <div className='shadow-md'>
          {question.map((value, i) => (
            <div className='flex flex-col w-[1182px] ' key={i}>
              <Paper elevation={0} className='flex justify-between  p-3 items-center'>
                <span className='text-[18px] font-inter font-bold text-[#000000] leading-normal px-5'>{value.question}</span>
                <div onClick={() => { setShowans(!showans); setQuesid(value.id) }}>{!(showans && (value.id === quesid)) ? <KeyboardArrowDownIcon sx={{ color: '#000000', cursor: 'pointer' }} /> : <KeyboardArrowUpIcon sx={{ color: '#000000', cursor: 'pointer' }} />}</div>
              </Paper>
              {showans && (value.id === quesid) &&
                <div className='bg-[#ECECEC] p-3 px-8 '>
                  <span className='text-[16px] text-[#757575] font-inter font-semibold leading-normal '>{value.ans}</span>
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
