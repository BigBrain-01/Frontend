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
      <div className='w-[50%] h-[100vh] bg-[url(/image.jpg)] bg-cover bg-center bg-no-repeat'></div>
      <div className='w-[50%] h-[100vh] overflow-y-auto py-10 flex flex-col items-center bg-[url(/login-bg.png)] bg-cover bg-center bg-no-repeat'>
        <div className='flex gap-3 justify-center pt-5 pb-8'>
          <h1 className='text-4xl font-semibold text-[#043133] leading-normal'>Welcome To</h1>
          <h1 className='text-4xl font-semibold text-[#317B74] leading-normal'>StudyTitans</h1>
        </div>
        <div className='w-[64%]'>
          <div className='flex flex-col w-full pb-3'>
            <span className='font-[500] text-[#4D5959] leading-[30px] pb-0.2'>Username</span>
            <input type="text" placeholder="Enter your email here" className=' w-full bg-[#EFF0F2] px-6 py-3  placeholder:text-[#838383] placeholder:leading-normal' style={{ outline: 'none', border: 'none' }} />
            <p className='h-[20px] text-red-500 text-[15px]'>&#9888; name not valid</p>
          </div>
          <div className='flex flex-col w-full pb-7'>
            <span className='font-[500] text-[#4D5959] leading-[30px] pb-0.2'>Password</span>
            <div className='relative'>
              <input type={show ? "password" : "text"} placeholder="Enter your password" className='px-6 py-3 w-[100%] placeholder:text-[#838383] placeholder:leading-normal bg-[#EFF0F2]' style={{ outline: 'none', border: 'none'}} />
              <div className='cursor-pointer absolute top-2.5 right-4' onClick={()=>{setShow(!show)}}>{!show?<Visibility sx={{color:'#4D5959'}}/>:<VisibilityOff sx={{color:'#4D5959'}}/>}</div>
            </div>
            <p className='h-[20px] text-red-500 text-[15px]'>&#9888; name not valid</p>
            <div className='text-[#317B74] w-full font-[500] text-right pt-1'>forget Password?</div>
          </div>
          <div className='flex flex-col items-center pb-12'>
            <button className='w-max px-24 py-2 bg-[#007074] mb-4 text-[#FFFFFF] text-[18px] font-medium  leading-normal' >Login</button>
            <div className='text-[#4D5959] flex justify-center text-sm gap-1'>
              Don't have an account?
              <Link className='text-[#007074] font-medium' href={'/register'}>Sign up</Link>
            </div>
          </div>
          <div className='flex flex-col items-center gap-3 pt-12'>
            <span className='text-[16px] text-[#043133]  leading-normal font-medium'>OR</span>
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