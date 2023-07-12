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
        <div className='flex justify-between'>
            <div className="w-[450px] h-[100vh] bg-[url('/image.png')] bg-origin-border bg-[length:100%] bg-no-repeat">
            </div>
            <div className='flex flex-col w-[70%] font-poppins items-center justify-center gap-1.5'>
                <h1 className='text-[#043133] font-semibold text-[40px] leading-normal'>Welcome to <span className='text-[#317B74]'>StudyTitans</span></h1>
                <form onSubmit={handleSubmit} className='flex flex-col w-[55%] gap-1.5'>
                    <div className='flex flex-col w-full text-sm'>
                        <label className='text-[#4D5959] leading-normal' htmlFor="fullName">Username</label>
                        <input type="text" onChange={(e) => setFormData({
                            ...formData,
                            username: e.target.value
                        })} placeholder='John Doe' className='outline-none bg-[#EFF0F2] p-2.5 w-full placeholder:leading-normal' />
                    </div>
                    <div className='flex flex-col w-full text-sm' >
                        <label className='text-[#4D5959] leading-normal' htmlFor="fullName">Full Name</label>
                        <input type="text" onChange={(e) => setFormData({
                            ...formData,
                            fullname: e.target.value
                        })} placeholder='John Doe' className='outline-none  bg-[#EFF0F2] p-2.5 w-full' />
                    </div>
                    <div className='flex flex-col w-full text-sm'>
                        <label className='text-[#4D5959] leading' htmlFor="fullName">Email</label>
                        <input type="text" onChange={(e) => setFormData({
                            ...formData,
                            email: e.target.value
                        })} placeholder='Enter your Email here' className='outline-none bg-[#EFF0F2] p-2.5 w-full' />
                        {formData.emailError && <span className="text-red-500 text-sm">Please enter valid email</span>}
                    </div>
                    <div className='flex flex-col w-full text-sm'>
                        <label className='text-[#4D5959]' htmlFor="fullName">Password</label>
                        <div className='relative'>
                            <input type={seepassword ? "text" : "password"} onChange={(e) => setFormData({
                                ...formData,
                                password: e.target.value
                            })} placeholder='Enter you Password' className='outline-none bg-[#EFF0F2] p-2.5 w-full' />
                            <div onClick={() => setSeePassword(!seepassword)}>
                                {seepassword ? <Visibility fontSize='small' sx={{ color: "#4D5959" }} className='absolute cursor-pointer top-3 right-5' /> :
                                    <VisibilityOff fontSize='small' sx={{ color: "#4D5959" }} className='absolute cursor-pointer top-3 right-5' />}
                            </div>
                            {formData.passwordError && <span className="text-red-500 text-sm">Please choose a strong password</span>}
                        </div>
                    </div>
                    <div className='flex flex-col w-full text-sm'>
                        <label className='text-[#4D5959]' htmlFor="fullName">Confirm Password</label>
                        <input type={seepassword ? "text" : "password"} onChange={(e) => setFormData({
                            ...formData,
                            confirmPassword: e.target.value
                        })} placeholder='Enter you Password' className='outline-none bg-[#EFF0F2] p-2.5 w-full' />
                        {formData.confirmPasswordError && <span className="text-red-500 text-sm">Password and Confirm password should be same!</span>}
                    </div>
                    <div className='flex w-full justify-center pt-5'>
                        <button type="submit" className='bg-[#007074] px-10 text-base py-2 font-medium leading-normal w-max text-white'>Create Account</button>
                    </div>
                </form>
                <div className='text-[#4D5959] flex justify-center text-sm gap-1'>
                    Already have an account?
                    <Link className='text-[#007074] font-medium' href={'/login'}>Log In</Link>
                </div>
                <p className='text-[#043133] text-[16px] font-medium'>OR</p>
                <button onClick={() => signIn("google")} className='flex gap-2 px-4 py-1.5 items-center justify-center border-[1.4px] border-[#D2D2D2] text-[#043133] text-sm leading-normal font-medium'>
                    <Image src={'/google.png'} alt='' width={30} height={30} />
                    Sign up with Google
                </button>
            </div>
        </div>
    )
}

export default Register