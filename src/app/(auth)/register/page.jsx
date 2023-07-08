'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const Register = () => {
    const [seepassword, setSeePassword] = useState(false)
    const handleSubmit = () => {

    }
    return (
        <div className='flex justify-between'>
            <div className="w-[450px] h-[100vh] bg-[url('/image.png')] bg-cover bg-center bg-no-repeat">
            </div>
            <div className='flex flex-col w-[70%] font-poppins items-center justify-center gap-5'>
                <h1 className='text-[#043133] font-semibold text-4xl leading-normal'>Welcome to <span className='text-[#317B74]'>StudyTitans</span></h1>
                <form onSubmit={handleSubmit} className='flex flex-col w-[50%] gap-5'>
                    <div className='flex flex-col w-full'>
                        <label className='text-[#4D5959] leading-normal' htmlFor="fullName">Full Name</label>
                        <input type="text" placeholder='John Doe' className='outline-none bg-[#EFF0F2] p-3 w-full placeholder:leading-normal' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='text-[#4D5959] leading-normal' htmlFor="fullName">Email</label>
                        <input type="text" placeholder='Enter your Email here' className='outline-none bg-[#EFF0F2] p-3 w-full' />
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label className='text-[#4D5959]' htmlFor="fullName">Password</label>
                        <div className='relative'>
                            <input type={seepassword ? "text" : "password"} placeholder='Enter you Password' className='outline-none bg-[#EFF0F2] p-3 w-full' />
                            <div onClick={() => setSeePassword(!seepassword)}>
                                {seepassword ? <Visibility sx={{ color: "#4D5959" }} className='absolute cursor-pointer top-3 right-5' /> :
                                    <VisibilityOff sx={{ color: "#4D5959" }} className='absolute cursor-pointer top-3 right-5' />}
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full justify-center'>
                        <button type="submit" className='bg-[#007074] px-10 py-2 text-[18px] font-medium leading-normal w-max text-white'>Create Account</button>
                    </div>
                </form>
                <div className='text-[#4D5959] flex justify-center text-sm gap-1'>
                    Already have an account?
                    <Link className='text-[#007074] font-medium' href={'/login'}>Log In</Link>
                </div>
                <p className='text-[#043133] text-[16px] font-medium'>OR</p>
                <button onClick={() => signIn("google")} className='flex gap-2 px-4 py-2 items-center justify-center border-[1.4px] border-[#D2D2D2] text-[#043133] text-sm leading-normal font-medium'>
                    <Image src={'/google.png'} alt='' width={30} height={30} />
                    Sign up with Google
                </button>
            </div>
        </div>
    )
}

export default Register