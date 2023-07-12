import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-[#0B0D17] flex flex-col py-[5rem] h-[500px]'>
            <div className=' flex justify-center'>
                <div className='flex gap-3'>
                    <div className='flex flex-col w-[255px] gap-5'>
                        <div className='flex gap-1 '>
                            <Image src={"/logo.png"} alt='logo' width={'30'} height={'22'} />
                            <h1 className='text-[20px] text-[#FFFFFF] font-inter font-semibold leading-normal'>StudyTitans</h1>
                        </div>
                        <p className='text-[#D9DBE1] text-[14px] font-inter font-[400] leading-[24px]'>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.</p>
                        <div className='flex gap-3'>
                            <div className='bg-[#000] rounded-full w-[30px] h-[30px]  flex items-center justify-center'>
                                <Image src={"/Path.png"} alt='path' width={'14'} height={'14'} />
                            </div>
                            <div className='bg-[#000] rounded-full w-[30px] h-[30px]  flex items-center justify-center'>
                                <Image src={"/web.png"} alt='path' width={'14'} height={'14'} />
                            </div>
                            <div className='bg-[#000] rounded-full w-[30px] h-[30px] flex items-center justify-center'>
                                <Image src={"/tweet.png"} alt='path' width={'14'} height={'14'} />
                            </div>
                            <div className='bg-[#000] rounded-full w-[30px] h-[30px]  flex items-center justify-center'>
                                <Image src={"/tube.png"} alt='path' width={'14'} height={'14'} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 w-[255px]'>
                        <h1 className='text-[20px] text-[#FFF] font-inter leading-normal font-semibold'>Quick Links</h1>
                        <div className='flex flex-col gap-3'>
                            <Link href={'/'} className='text-[14px] font-inter text-[#D9DBE1] font-[400]'>Portfolio</Link>
                            <Link href={'/'} className='text-[14px] font-inter text-[#D9DBE1] font-[400]'>Blogs</Link>
                            <Link href={'/'} className='text-[14px] font-inter text-[#D9DBE1] font-[400]'>About</Link>
                            <Link href={'/'} className='text-[14px] font-inter text-[#D9DBE1] font-[400]'>Press</Link>
                            <div className='flex gap-2 items-center'>
                                <Link href={'/'} className='text-[14px] font-inter text-[#D9DBE1] font-[400]'>Careers</Link>
                                <span className='text-[#2EC5CE] font-nanum'>we're hiring</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 w-[255px]'>
                    <h1 className='text-[20px] text-[#FFF] font-inter leading-normal font-semibold'>Services</h1>
                    <div className='flex flex-col gap-3'>
                        <span className='text-[14px] font-inter text-[#D9DBE1] font-[400]'>UX/UI Design</span>
                        <span className='text-[14px] font-inter text-[#D9DBE1] font-[400]'>App Development</span>
                        <span className='text-[14px] font-inter text-[#D9DBE1] font-[400]'>Web Development</span>
                        <span className='text-[14px] font-inter text-[#D9DBE1] font-[400]'>Quality Assurance</span>
                        <span className='text-[14px] font-inter text-[#D9DBE1] font-[400]'>Machine Learning</span>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-[20px] text-[#FFF] font-inter leading-normal font-semibold'>Reach Us</h1>
                    <div className='flex flex-col gap-3 w-max'>
                        <div className='flex items-center gap-2'>
                            <Image src={"/email-icon.png"} alt='email' width={'20'} height={'24'} />
                            <Link href={"mailto:ayushraj0607@gmail.com"} className='text-[14px] font-inter text-[#D9DBE1] font-[400]'>hello@landify.co</Link>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src={"/phone-icon.png"} alt='phone' width={'20'} height={'24'} />
                            <Link href={"tel:98765 43210"} className='text-[14px] font-inter text-[#D9DBE1] font-[400]'>+91 98765 43210</Link>
                        </div>
                        <div className='flex items-baseline gap-2 relative'>
                            <Image src={"/location-icon.png"} alt='location' width={'20'} height={'24'} />
                            <Link href={""} className='text-[14px] font-inter text-[#D9DBE1] font-[400] absolute left-7 w-[200px] '>772 Lyonwood Ave <br />Walnut, CA 91789</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between relative'>
                <span className='text-[14px] text-[400] text-[#D9DBE1] font-inter leading-[24px] absolute left-[10rem] top-[9.5rem]'>© 2020 Landify UI Kit. All rights reserved</span>
                <div className='flex gap-2 pr-12 absolute right-5 top-[10rem]'>
                    <span className='text-[14px] text-[400] text-[#D9DBE1] font-inter leading-[24px]'>Terms & Conditions</span>
                    <hr className='w-[1px] h-[24px] bg-[#D9DBE1]' />
                    <span className='text-[14px] text-[400] text-[#D9DBE1] font-inter leading-[24px]'>Privacy Policy</span>
                    <hr className='w-[1px] h-[24px] bg-[#D9DBE1]' />
                    <span className='text-[14px] text-[400] text-[#D9DBE1] font-inter leading-[24px]'>Sitemap</span>
                    <hr className='w-[1px] h-[24px] bg-[#D9DBE1]' />
                    <span className='text-[14px] text-[400] text-[#D9DBE1] font-inter leading-[24px]'>Disclaimer</span>
                </div>
            </div>
        </div>
    )
}

export default Footer