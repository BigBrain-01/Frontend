'use client'
import Navbar from '@/components/navbar/Navbar'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
  const session = useSession()
  console.log(session)
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
      <div className='px-32 flex flex-col justify-center py-20' id='about'>
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
    </div>
  )
}
