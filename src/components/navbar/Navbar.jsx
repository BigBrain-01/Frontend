import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='shadow-[0px_1px_0px_0px_#E5E9F2] h-14 flex items-center justify-between px-32 font-inter z-10'>
            <div className='flex'>
                <Image src={'/logo.png'} alt="" width={30} height={22} />
                <Link className='text-[18px] flex font-semibold leading-3 items-center' href={'/'}><span className='text-[#2F3192]'>Study</span>Titans</Link>
            </div>
            <div className='flex gap-8 font-medium text-sm'>
                <Link href={'#about'}>About</Link>
                <Link href={'#about'}>Features</Link>
                <Link href={'#about'}>Pricing</Link>
                <Link href={'#about'}>Videos</Link>
                <Link className='text-[#00E967]' href={'#about'}>Contact us</Link>
            </div>
            <div className='flex gap-4'>
                <Link href={'/login'}>
                    <button className='bg-[#83FFC9] rounded-md text-[#00693B] text-sm font-normal py-[8px] px-5'>
                        Login
                    </button>
                </Link>
                <Link href={'/register'}>
                    <button className='bg-[#00693B] rounded-md text-white text-sm font-normal py-[8px] px-5'>
                        Register
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar