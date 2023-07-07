'use-client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const login = () => {
  return (
    <div className='flex '>
      <div className='w-[40%] h-[700px]'>
        <Image src='/image.png' width={658} height={1024} />
      </div>
      <div className='w-[60%] items-center justify-center flex flex-col gap-10'>
        <div className='flex w-[509px] h-[72px] font-poppins gap-3'>
          <h1 className='text-[48px] font-semibold text-[#043133] leading-[72px]'>Welcome To</h1>
          <h1 className='text-[48px] font-semibold text-[#317B74] leading-[72px]'>BigBrain</h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-8'>
          <div className='flex flex-col'>
            <span className='text-[20px] font-[500] text-[#4D5959] font-poppins leading-[30px]'>Username</span>
            <input type="text" placeholder="Enter your username here" className='w-[600px] h-[65px] bg-[#EFF0F2] p-5 text-[20px] placeholder:text-[
#838383] placeholder:text-[20px] placeholder:leading-[30px]' style={{ outline: 'none', border: 'none' }} />
          </div>
          <div className='flex flex-col'>
            <span className='text-[20px] font-[500] text-[#4D5959] font-poppins leading-[30px]'>Password</span>
            <input type="password" placeholder="Enter your password" className='w-[600px] h-[65px] bg-[#EFF0F2] p-5 text-[20px] placeholder:text-[
#838383] placeholder:text-[20px] placeholder:leading-[30px]' style={{ outline: 'none', border: 'none' }} />
          </div>
          <div className='flex flex-col gap-3'>
            <button className='w-[280px] h-[60px] bg-[#007074] text-[#FFFFFF] text-[26px] font-[500] font-poppins leading-[36px]' >Login</button>
            <div className='flex items-center justify-center'>
              <span className='text-[#4D5959] text-[18px] font-[500] leading-[27px]'>Don't have an account?</span>
              <Link href="/register">
                <span className='text-[#007074] text-[18px] font-[500] leading-[27px] cursor-pointer'>Sign up</span>
              </Link>
            </div>
          </div>
          <div>
            <span className='text-[26px] text-[#043133] font-poppins leading-[39px] font-[500]'>OR</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default login