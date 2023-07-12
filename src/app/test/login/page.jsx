'use client'
import { VisibilityOff } from '@mui/icons-material'
import { TextField } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='flex w-full justify-center'>
            <div className='flex flex-col h-[100vh] w-1/2 gap-14 justify-center items-center'>
                <div className='flex'>
                    <Image src={'/logo.png'} alt="" width={32} height={30} />
                    <div className='text-[24px] flex font-semibold leading-3 items-center' ><span className='text-[#2F3192]'>Study</span>Titans</div>
                </div>
                <div className='w-[70%] flex flex-col items-center'>
                    <div className=' flex flex-col w-full h-[400px] relative items-center justify-around gap-5 py-4' style={{ boxShadow: '0px 8px 53px 0px rgba(0, 120, 240, 0.25), 0px 4px 9px 0px rgba(0, 0, 0, 0.10)' }}>
                        <Image className='absolute -top-7' src={'/user.png'} alt='' width={60} height={30} />
                        <h2 className='text-xl text-[#00693B8A]'>Test Login</h2>
                        <div className='flex flex-col gap-4 items-center'>
                            <p className='text-[#00000099] text-sm'> Por favor preencha o dados abaixo para começar!</p>
                            <TextField className='w-[80%]' variant='standard' size='small' label='User or Email' InputProps={{
                                endAdornment: <Image src={'/person.svg'} alt='' width={20} height={20} />
                            }} />
                            <TextField className='w-[80%]' variant='standard' size='small' label='Test Id' InputProps={{
                                endAdornment: <VisibilityOff sx={{ color: '#00693B', width: '20px' }} />
                            }} />
                        </div>
                        <button variant='filled' className='bg-[#00693B17] border border-[#00693B] rounded-md py-2 px-12 text-[#00693B]'>Take Test</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page