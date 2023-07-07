'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
  const session = useSession()
  console.log(session)
  return (
    <div className='flex flex-col font-inter overflow-y-hidden'>
      <div className='bg-[#FAF8F4] flex justify-between px-32 items-center'>
        <div className='max-w-[580px] flex flex-col gap-4'>
          <h1 className='text-[60px] font-extrabold leading-normal'>Getting Best Quality Education Is Now More <span className='relative text-[#2F3192]'>
            Easier
            <Image className='absolute right-0 -bottom-6' src={'/underline.png'} alt='' width={236} height={44} />
          </span></h1>
          <p className='w-[420px] text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
          <button className='bg-[#00693B] rounded-md text-white w-max text-sm font-normal py-[10px] px-8'>Get Started</button>
        </div>
        <div className="relative w-[500px] -mt-10 h-[556px]  bg-[url('/julia.png')] bg-[length:450px] bg-center bg-no-repeat">
          <Image src={'/dancingBook.png'} alt='' width={'90'} quality={100} className='absolute top-20 left-40' height={'120'} />
          <Image src={'/u.png'} alt='' width={'80'} quality={100} className='absolute top-20 -right-10' height={'120'} />
          <Image src={'/greenArrow.png'} alt='' width={'80'} quality={100} className='absolute bottom-20 -right-20' height={'120'} />
          <Image src={'/graph.png'} alt='' width={'80'} quality={100} className='absolute bottom-28 left-28' height={'120'} />

        </div>
      </div>
    </div>
  )
}
