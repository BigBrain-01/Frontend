import React, { useState } from 'react';
import Image from 'next/image';

const Banner2 = ({className}) => {
    return (
        <div className={`bg-[#FAF8F4] h-[100vh] flex w-full justify-between px-32 items-center ${className}`} >

                <div className='flex justify-center w-full ml-36'>
                    <div className='w-[550px] h-[550px] bg-gradient-to-t from-[#F0F0F0] to-[#D9D9D9] rounded-full relative flex'>
                        <Image src='/banner21.png' width={'63'} height={'85'} className='absolute right-3 ' />
                        <Image src='/banner2.png' width={'450'} height={'600'} className='absolute -top-5 right-10 object-contain' />
                        <div className='flex flex-col justify-center z-20 absolute top-10 -left-60 '>
                            <span className='text-[#B2B2B2] font-semibold text-[18px] font-poppins' >summer camp in miami</span>
                            <span className='text-[#18191F] font-semibold text-[60px] font-poppins  ' >The <br /> Creative <br />Tech Club <br />of Miami</span>
                            <button className="bg-[#00693B] rounded-md text-white w-max text-[14px] font-[500] py-[10px] px-8 mt-14">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center gap-5 ml-[4rem]'>
                    <div className='flex flex-col'>
                        <span className='text-[#000000] text-[28px] font-bold leading-normal font-poppins'>+750</span>
                        <span className='text-[18px] text-[#B2B2B2] font-semibold font-poppins'>Various Categories</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[#000000] text-[28px] font-bold leading-normal font-poppins'>117</span>
                        <span className='text-[18px] text-[#B2B2B2] font-semibold font-poppins'>Unique Programs</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[#000000] text-[28px] font-bold leading-normal font-poppins'>1238</span>
                        <span className='text-[18px] text-[#B2B2B2] font-semibold font-poppins'>Satisfied Children's</span>
                    </div>

                </div>
        </div>
    )
}

const Banner1 = ({className}) => {
    return (
        <div className={`'bg-[#FAF8F4] h-[100vh] w-full flex justify-between px-32 items-center ${className}`}>
            < div className="max-w-[580px] flex flex-col gap-4 " >
                <h1 className="text-[60px] font-extrabold leading-normal">
                    Getting Best<br /> Quality Education<br /> Is Now More{' '}
                    <span className="relative text-[#2F3192]">
                        Easier
                        <Image
                            className="absolute right-0 -bottom-6"
                            src={'/underline.png'}
                            alt=""
                            width={236}
                            height={44}
                        />
                    </span>
                </h1>
                <p className="w-[420px] text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc<br /> odio
                    in et, lectus sit lorem id integer.
                </p>
                <button className="bg-[#00693B] rounded-md text-white w-max text-[14px] font-[500] py-[10px] px-8">
                    Get Started
                </button>
            </div >
            <div className="relative w-[500px] h-full bg-[url('/julia.png')] bg-cover bg-center bg-no-repeat">
                <Image
                    src={'/dancingBook.png'}
                    alt=""
                    width={'90'}
                    quality={100}
                    className="absolute top-20 left-40"
                    height={'120'}
                />
                <Image
                    src={'/u.png'}
                    alt=""
                    width={'80'}
                    quality={100}
                    className="absolute top-20 -right-10"
                    height={'120'}
                />
                <Image
                    src={'/greenArrow.png'}
                    alt=""
                    width={'80'}
                    quality={100}
                    className="absolute bottom-20 -right-20"
                    height={'120'}
                />
                <Image
                    src={'/graph.png'}
                    alt=""
                    width={'80'}
                    quality={100}
                    className="absolute bottom-28 left-28"
                    height={'120'}
                />
            </div>
        </div>

    )
}
const Banner3 = ({className}) => {
    return (
        <div className={`bg-[url(/Hero.jpg)] bg-no-repeat bg-cover h-[100vh] w-full min-w-0 flex justify-center ${className}`} >
            <div className='flex flex-col py-[10rem] items-center gap-7'>
                <h1 className='text-[70px] font-semibold font-poppins leading-[85px] text-center text-white'>The Creative Tech<br/> Club of Miami</h1>
                <span className='text-[20px] font-[500] leading-[30px] font-poppins text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Nunc odio in et, lectus sit lorem id integer.</span>
                <button className="bg-[#00693B] rounded-md text-white w-max text-[14px] font-[500] py-[10px] px-8 mt-5">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export { Banner2, Banner1, Banner3 };