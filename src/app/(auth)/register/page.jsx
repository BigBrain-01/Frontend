'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import validator from 'validator'
import { Alert } from '@mui/material'
const Register = () => {
    const [seepassword, setSeePassword] = useState(false)
    const [formData, setFormData] = useState({
        username: "",
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        emailError: false,
        passwordError: false,
        confirmPasswordError: false
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const isEmail = validator.isEmail(formData.email)
            const isStrongPassword = validator.isStrongPassword(formData.password, {
                minLength: 8,
                minLowercase: 1,
                minNumbers: 1,
                minSymbols: 1,
                minUppercase: 1,
            })
            const isConfirm = formData.password === formData.confirmPassword
            if (isEmail && isStrongPassword && isConfirm) {
                setFormData({ ...formData, emailError: false, passwordError: false })
                const res = await fetch("/api/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData),
                    cache: 'no-store'
                })
                const data = await res.json()
                console.log(data)
            } else {
                if (!isEmail) setFormData({ ...formData, emailError: true })
                if (!isStrongPassword) setFormData({ ...formData, passwordError: true })
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='flex'>
            <div className="w-[50%] h-[100vh] bg-[url('/image.jpg')] bg-cover bg-center bg-no-repeat">
            </div>
            <div className='flex flex-col h-[100vh] overflow-y-auto py-10 w-[50%] items-center bg-[url(/login-bg.png)] bg-cover bg-center bg-no-repeat'>
                <div className='flex gap-3 justify-center pt-5 pb-8'>
                    <h1 className='text-4xl font-semibold text-[#043133] leading-normal'>Welcome To</h1>
                    <h1 className='text-4xl font-semibold text-[#317B74] leading-normal'>StudyTitans</h1>
                </div>
                <form onSubmit={handleSubmit} className='w-[64%]'>
                    <div className='flex flex-col w-full pb-3'>
                        <span className='font-[500] text-[#4D5959] leading-[30px] pb-0.2'>Full Name</span>
                        <input type="text" placeholder='John Doe' className='w-full bg-[#EFF0F2] px-6 py-3  placeholder:text-[#838383] placeholder:leading-normal' style={{ outline: 'none', border: 'none' }}/>
                        <p className='h-[20px] text-red-500 text-[15px]'>&#9888; name not valid</p>
                    </div>
                    <div className='flex flex-col w-full pb-3'>
                        <span className='font-[500] text-[#4D5959] leading-[30px] pb-0.2'>Email</span>
                        <input type="text" placeholder='Enter your Email here' className=' w-full bg-[#EFF0F2] px-6 py-3  placeholder:text-[#838383] placeholder:leading-normal' style={{ outline: 'none', border: 'none' }}/>
                        <p className='h-[20px] text-green-500 text-[15px]'>&#10003;</p>
                    </div>
                    <div className='flex flex-col w-full pb-3'>
                        <span className='font-[500] text-[#4D5959] leading-[30px] pb-0.2'>Password</span>
                        <div className='relative'>
                            <input type={seepassword ? "text" : "password"} placeholder='Enter you Password' className='px-6 py-3 w-[100%] placeholder:text-[#838383] placeholder:leading-normal bg-[#EFF0F2]' style={{ outline: 'none', border: 'none'}}/>
                            <div onClick={() => setSeePassword(!seepassword)}>
                                {seepassword ? <Visibility fontSize='small' sx={{ color: "#4D5959" }} className='absolute cursor-pointer top-3 right-5' /> :
                                    <VisibilityOff fontSize='small' sx={{ color: "#4D5959" }} className='absolute cursor-pointer top-3 right-5' />}
                            </div>
                            {formData.passwordError && <span className="text-red-500 text-sm">Please choose a strong password</span>}
                        </div>
                        <p className='h-[20px] text-green-500 text-[15px]'>&#10003;</p>
                    </div>
                    <div className='flex flex-col w-full pb-7'>
                        <span className='font-[500] text-[#4D5959] leading-[30px] pb-0.2'>Confirm Password</span>
                        <input type={seepassword ? "text" : "password"} placeholder='Enter you Password' className='px-6 py-3 w-[100%] placeholder:text-[#838383] placeholder:leading-normal bg-[#EFF0F2]' style={{ outline: 'none', border: 'none'}}/>
                        <p className='h-[20px] text-green-500 text-[15px]'>&#10003;</p>
                    </div>
                    <div className='flex flex-col items-center pb-10'>
                        <button className='w-max px-24 py-2 bg-[#007074] mb-4 text-[#FFFFFF] text-[18px] font-medium  leading-normal' >Register</button>
                        <div className='text-[#4D5959] flex justify-center text-sm gap-1'>
                        Already have an account?
                        <Link className='text-[#007074] font-medium' href={'/login'}>Login</Link>
                        </div>
                    </div>
                </form>
                <div className='flex flex-col items-center gap-3'>
                    <span className='text-[16px] text-[#043133]  leading-normal font-medium'>OR</span>
                    <button onClick={() => signIn("google")} className='flex gap-2 px-4 py-2 items-center justify-center border-[1.4px] border-[#D2D2D2] text-[#043133] text-sm leading-normal font-medium'>
                    <Image src={'/google.png'} alt='' width={30} height={30} />
                    Login with Google
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Register