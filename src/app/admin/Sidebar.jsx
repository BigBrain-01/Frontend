'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Sidebar = () => {
    const [openchallenge, setOpenchallenge] = useState(false)
    const [opencourse, setOpencourse] = useState(false)
    return (
        <div className='bg-[#171717] h-screen w-[15%] flex flex-col gap-[1px] sticky top-0 left-0'>
            <div className='bg-[#262626] p-3'>
                <div className='flex justify-between '>
                    <div className='flex gap-2 items-center'>
                        <Image src="/challenge.png" alt='' width={18} height={18} />
                        <span className='text-[16px] text-white font-[500] font-poppins'>Challenges</span>
                    </div>
                    <div onClick={() => setOpenchallenge(!openchallenge)} className='cursor-pointer'>
                        {!openchallenge ? <KeyboardArrowDownIcon sx={{ color: '#FFF' }} /> : <KeyboardArrowUpIcon sx={{ color: '#FFF' }} />}
                    </div>
                </div>
                {openchallenge &&
                    <div className='flex flex-col px-6 gap-3 text-[16px] text-white font-[500] font-poppins mt-2 cursor-pointer'>
                        <Link href={'/admin/addsubjects'}>
                            <span>Add Subjects</span>
                        </Link>
                        <Link href={'/admin/createtest'}>
                            <span>Create New Test</span>
                        </Link>
                        <Link href={'/admin/viewtest'}>
                            <span>View Test</span>
                        </Link>
                    </div>
                }
            </div>
            <div className='bg-[#262626] p-3'>
                <div className='flex justify-between '>
                    <div className='flex gap-2 items-center'>
                        <Image src="/challenge.png" alt='' width={18} height={18} />
                        <span className='text-[16px] text-white font-[500] font-poppins'>Courses</span>
                    </div>
                    <div onClick={() => setOpencourse(!opencourse)} className='cursor-pointer'>
                        {!opencourse ? <KeyboardArrowDownIcon sx={{ color: '#FFF' }} /> : <KeyboardArrowUpIcon sx={{ color: '#FFF' }} />}
                    </div>
                </div>
                {opencourse &&
                    <div className='flex flex-col px-6 gap-3 text-[16px] text-white font-[500] font-poppins mt-2 cursor-pointer'>
                        <Link href={'/admin/createcourse'}>
                            <span>Create Course</span>
                        </Link>
                        <span>Create New Test</span>
                        <span>View Test</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Sidebar