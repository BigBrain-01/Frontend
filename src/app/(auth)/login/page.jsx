'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const login = () => {
  const [show, setShow] = useState(true);
  return (
    <div className='flex '>
      <div className='w-[450px] h-[100vh] bg-[url(/image.png)] bg-cover bg-center bg-no-repeat '></div>
      <div className='w-[70%] items-center justify-center flex flex-col gap-3'>
        <div className='flex w-full h-[72px] font-poppins gap-3 justify-center'>
          <h1 className='text-4xl font-semibold text-[#043133] leading-normal'>Welcome To</h1>
          <h1 className='text-4xl font-semibold text-[#317B74] leading-normal'>StudyTitans</h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-8 w-1/2'>
          <div className='flex flex-col w-full'>
            <span className='font-[500] text-[#4D5959] font-poppins leading-normal'>Email</span>
            <input type="text" placeholder="Enter your email here" className=' w-full bg-[#EFF0F2] p-3  placeholder:text-[#838383] placeholder:leading-normal' style={{ outline: 'none', border: 'none' }} />
          </div>
          <div className='flex flex-col w-full'>
            <span className='font-[500] text-[#4D5959] font-poppins leading-[30px]'>Password</span>
            <div className='w-full bg-[#EFF0F2] p-3 flex justify-between'>
              <input type={show ? "password" : "text"} placeholder="Enter your password" className=' placeholder:text-[#838383] placeholder:leading-normal bg-[#EFF0F2]' style={{ outline: 'none', border: 'none',width:'90%' }} />
              <div className='cursor-pointer' onClick={()=>{setShow(!show)}}>{!show?<Visibility sx={{color:'#4D5959'}}/>:<VisibilityOff sx={{color:'#4D5959'}}/>}</div>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <button className='w-max px-24 py-2 bg-[#007074] text-[#FFFFFF] text-[20px] font-medium font-poppins leading-normal' >Login</button>
            <div className='text-[#4D5959] flex justify-center text-sm gap-1'>
              Don't have an account?
              <Link className='text-[#007074] font-medium' href={'/register'}>Sign up</Link>
            </div>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <span className='text-[16px] text-[#043133] font-poppins leading-normal font-medium'>OR</span>
            <button onClick={() => signIn("google")} className='flex gap-2 px-4 py-2 items-center justify-center border-[1.4px] border-[#D2D2D2] text-[#043133] text-sm leading-normal font-medium'>
              <Image src={'/google.png'} alt='' width={30} height={30} />
              Login with Google
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default login