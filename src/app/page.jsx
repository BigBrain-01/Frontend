'use client'
import { Paper } from '@mui/material'
import Navbar from '@/components/navbar/Navbar'
import { useSession } from 'next-auth/react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Image from 'next/image'
import Footer from '../components/Footer/Footer'
import Featuredvideos from '@/components/Landing/Featuredvideos'
import { useState } from 'react'
import axios from 'axios'
import { Banner1, Banner2 ,Banner3 } from '../components/Banner/Banner'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function Home() {

  const plan = [
    {
      id: 1,
      img: '/plan.png',
      class: 'Class 4-5',
      cost: '$50 USD',
      feature: {
        fe1: 'Easy download',
        fe2: 'Unlimited doubt Clearance',
        fe3: 'Easy download',
        fe4: 'Unlimited doubt Clearance',
      },
    },
    {
      id: 2,
      img: '/plan.png',
      class: 'Class 6-8',
      cost: '$50 USD',
      feature: {
        fe1: 'Easy download',
        fe2: 'Unlimited doubt Clearance',
        fe3: 'Easy download',
        fe4: 'Unlimited doubt Clearance',
      },
    },
    {
      id: 3,
      img: '/plan.png',
      class: 'Class 9-10',
      cost: '$50 USD',
      feature: {
        fe1: 'Easy download',
        fe2: 'Unlimited doubt Clearance',
        fe3: 'Easy download',
        fe4: 'Unlimited doubt Clearance',
      },
    },
  ]
  const question = [
    {
      id: 1,
      question: 'What is Study Titans ?',
      ans:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
    },
    {
      id: 2,
      question: 'What is Study Titans ?',
      ans:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
    },
    {
      id: 3,
      question: 'What is Study Titans ?',
      ans:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
    },
  ]
  const banners = [
    { id: 0, banner: <Banner1 /> },
    { id: 1, banner: <Banner2 /> },
    { id: 1, banner: <Banner3 /> },
  ]
  const session = useSession()
  const [showans, setShowans] = useState(false)
  const [quesid, setQuesid] = useState(null)
  const [current, setCurrent] = useState(0);
  return (
    // main div
    <div className="flex flex-col gap-[9rem]">
      <div className='h-[100vh] flex flex-col'>
        <Navbar />
        <div className='w-full overflow-hidden relative'>
          <div className='bg-[#FFF] px-3 py-5 rounded-md absolute left-0 z-10 top-1/2 cursor-pointer' onClick={() => setCurrent(current - 1)}>
            <KeyboardArrowLeftIcon sx={{ width: '40px', height: '40px' }} />
          </div>
          <div className='bg-[#FFF] px-3 py-5 rounded-md absolute right-0 z-10 top-1/2 cursor-pointer' onClick={() => setCurrent(current + 1)}>
            <KeyboardArrowRightIcon sx={{ width: '40px', height: '40px' }} />
          </div>
          <div className=' w-full transition duration-[1000] ease h-screen ' style={{ transform: `translate3d(${-current * 100}%, 0, 0)` }}>
            {
              banners.map((value, i) => (
                <div className='inline-block w-full '>
                  {value.banner}
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {/* about section */}
      <div className="px-32 flex flex-col justify-center" id="about">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-[20px] text-[#0015C8] font-bold font-inter leading-normal">
              About Us
            </span>
            <div className="text-4xl font-inter text-[#18191F] font-[800] leading-normal">
              An{' '}
              <span className="relative">
                Easier
                <Image
                  className="absolute -bottom-4 left-0"
                  src={'/underline.png'}
                  alt=""
                  width={200}
                  height={44}
                />
              </span>{' '}
              Way to be
              <br /> Sub and Find Sub
            </div>
          </div>
          <div className="flex relative ">
            <p className="w-[546px] text-[20px] text-[#757575] font-inter font-semibold leading-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also
            </p>
            <Image
              src={'/arrow.png'}
              alt=""
              width={'150'}
              quality={100}
              height={'120'}
              className="absolute right-[34rem] -bottom-[3.5rem]"
            ></Image>
          </div>
        </div>
      </div>
      {/* Why choose us */}
      <div className="flex py-5">
        <div className="relative w-[50%] ">
          <Image
            src={'/choose2.png'}
            width={'130'}
            height={'200'}
            className="absolute left-[12rem] top-[2rem]"
          />
          <Image
            src={'/choose1.png'}
            width={'130'}
            height={'200'}
            className="absolute left-[2rem] top-[10rem]"
          />
          <Image
            src={'/choose3.png'}
            width={'130'}
            height={'200'}
            className="absolute left-[22rem] top-[8rem]"
          />
          <Image
            src={'/Ellipse2.png'}
            width={'25'}
            height={'30'}
            className="absolute left-[8rem] top-[6rem]"
          />
          <Image
            src={'/Ellipse3.png'}
            width={'25'}
            height={'30'}
            className="absolute left-[10rem] top-[23rem]"
          />
          <Image
            src={'/Ellipse4.png'}
            width={'25'}
            height={'30'}
            className="absolute left-[19rem] top-[16rem]"
          />
        </div>
        <div className="flex flex-col gap-3 mt-[2.5rem]">
          <div className="flex items-center gap-2">
            <div className='bg-[url("/Ellipse1.png")] bg-contain w-[11px] h-[11px] '></div>
            <h1 className="text-[#757575] text-[17px] font-semibold font-inter leading-normal">
              Why Choose Us
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-[#18191F] text-[35px] font-inter font-semibold leading-normal">
              We deliver great service
              <br /> with outstanding value
            </span>
            <div className="flex gap-3">
              <div className="bg-[#DDFBF8] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                <Image src={'/rocket.png'} width={'18'} height={'18'} />
              </div>
              <div>
                <h1 className="text-[#18191F] text-[18px] font-inter leading-normal font-semibold">
                  Fast working process
                </h1>
                <span className="text-[16px] text-[#757575] font-semibold font-inter">
                  At studytitans provide fast placed development, <br />
                  with flexible collaboration & payments
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-[#E3E2FD] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                <Image src={'/teams.png'} width={'18'} height={'18'} />
              </div>
              <div>
                <h1 className="text-[#18191F] text-[18px] font-inter leading-normal font-semibold">
                  Dedicated team
                </h1>
                <span className="text-[16px] text-[#757575] font-semibold font-inter">
                  At studytitans provide fast placed development, <br />
                  with flexible collaboration & payments
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-[#FFE1E9] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                <Image src={'/time.png'} width={'18'} height={'18'} />
              </div>
              <div>
                <h1 className="text-[#18191F] text-[18px] font-inter leading-normal font-semibold">
                  24/7 hours support
                </h1>
                <span className="text-[16px] text-[#757575] font-semibold font-inter">
                  At studytitans provide fast placed development, <br />
                  with flexible collaboration & payments
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Videos */}
      <div>
        <Featuredvideos />
      </div>
      {/* achievements */}
      <div className="flex flex-col">
        <div className="bg-[#00693B] w-full flex items-center justify-center p-10">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[40px] text-[#FFFFFF] font-inter font-bold">
                Some count that matters
              </h1>
              <span className="text-[#FFFFFF] text-[18px] font-inter font-medium">
                Our achievement in the journey depicted in numbers
              </span>
            </div>
            <div className="flex gap-10">
              <div className="flex flex-col items-center">
                <h1 className="text-[48px] text-[#FFFFFF] font-inter font-bold">
                  5
                </h1>
                <span className="text-[18px] text-[#FFFFFF] font-inter font-medium">
                  Service Geographics
                </span>
              </div>
              <hr className="bg-[#FFFFFF] h-[6rem] w-[1px]" />
              <div className="flex flex-col items-center">
                <h1 className="text-[48px] text-[#FFFFFF] font-inter font-bold">
                  30
                </h1>
                <span className="text-[18px] text-[#FFFFFF] font-inter font-medium">
                  Fortune 500 Clients
                </span>
              </div>
              <hr className="bg-[#FFFFFF] h-[6rem] w-[1px]" />
              <div className="flex flex-col items-center">
                <h1 className="text-[48px] text-[#FFFFFF] font-inter font-bold">
                  300
                </h1>
                <span className="text-[18px] text-[#FFFFFF] font-inter font-medium">
                  Dedicated Members
                </span>
              </div>
              <hr className="bg-[#FFFFFF] h-[6rem] w-[1px]" />
              <div className="flex flex-col items-center">
                <h1 className="text-[48px] text-[#FFFFFF] font-inter font-bold">
                  8
                </h1>
                <span className="text-[18px] text-[#FFFFFF] font-inter font-medium">
                  Years of Journey
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* plans */}
        <div className="flex flex-col px-32 gap-5 bg-[#EAECFE] py-10">
          <div className="flex flex-col items-center">
            <h1 className="text-[43px] text-[#000000] font-inter font-bold mt-[2rem] ">
              Subscription Plans
            </h1>
            <span className="text-[14px] text-[#000000] font-inter font-semibold">
              Our achievement in the journey depicted in numbers
            </span>
          </div>
          <div className="flex justify-evenly">
            {plan.map((value, i) => (
              <Paper
                elevation={3}
                key={i}
                className="flex flex-col items-center w-[300px]  py-1 px-1 gap-3 hover:scale-[108%]"
                sx={{ borderRadius: '12px' }}
              >
                <Image src={value.img} width={'300'} height={'165'} />
                <h1 className="text-[30px] font-inter font-bold text-[#FFD600]">
                  {value.class}
                </h1>
                <span className="text-[30px] text-[#000000] font-inter font-bold leading-normal">
                  $50 USD
                </span>
                <div className="flex flex-col text-[12px] text-[#3B3B3B] font-inter font-semibold leading-[14.5px] items-center gap-2">
                  <span>{value.feature.fe1}</span>
                  <span>{value.feature.fe2}</span>
                  <span>{value.feature.fe3}</span>
                  <span>{value.feature.fe4}</span>
                  <span>{value.feature.fe1}</span>
                </div>
                <button className="bg-[#00693B] p-3 rounded-md text-[14px] text-[#FFFFFF] font-inter mt-10 px-5">
                  Buy Now
                </button>
                <div className="bg-[#F4F4F4] w-full p-[3px] h-[47px] items-center flex justify-center font-inter text-[12px] text-[#3B3B3B] rounded-xl">
                  1 month subscription
                </div>
              </Paper>
            ))}
          </div>
        </div>
      </div>
      {/* questions */}
      <div className="flex flex-col items-center gap-3 h-max pb-16 ">
        <div className="mb-10">
          <h1 className="text-[43px] text-[#000000] font-inter leading-normal font-bold ">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="shadow-md">
          {question.map((value, i) => (
            <div className="flex flex-col w-[1182px] " key={i}>
              <Paper
                elevation={0}
                className="flex justify-between  p-3 items-center"
              >
                <span className="text-[18px] font-inter font-bold text-[#000000] leading-normal px-5">
                  {value.question}
                </span>
                <div
                  onClick={() => {
                    setShowans(!showans)
                    setQuesid(value.id)
                  }}
                >
                  {!(showans && value.id === quesid) ? (
                    <KeyboardArrowDownIcon
                      sx={{ color: '#000000', cursor: 'pointer' }}
                    />
                  ) : (
                    <KeyboardArrowUpIcon
                      sx={{ color: '#000000', cursor: 'pointer' }}
                    />
                  )}
                </div>
              </Paper>
              {showans && value.id === quesid && (
                <div className="bg-[#ECECEC] p-3 px-8 ">
                  <span className="text-[16px] text-[#757575] font-inter font-semibold leading-normal ">
                    {value.ans}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
