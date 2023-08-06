'use client'
import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import moment from "moment";

const page = () => {
    const [general, setGeneral] = useState(true)
    const [security, setSecurity] = useState(false);
    return (
        <div className='flex'>
            <Sidebar />
            <div className='bg-[#EAECFE] flex flex-col w-full px-5 gap-7'>
                <div className="flex  py-5 gap-5 bg-[#EAECFE]  items-center justify-between w-full h-14">
                    <div className="flex gap-5 items-center">
                        <div className="flex flex-col text-xs">
                            <div className="text-lg font-semibold truncate w-[194px]">
                                Welcome Darpan Bahadur
                            </div>
                            {moment().format("hh:mm a DD MMM YYYY")}
                        </div>

                        <div className="flex  px-2  bg-white w-[627px] items-center rounded-md gap-3 h-[48px] ">
                            <SearchIcon sx={{ width: "24px", height: '24px', color: "#AEB6CF", }} />
                            <input
                                className="rounded-md w-full h-8 outline-none "
                                type="Search"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 ">
                        <div className="bg-white  cursor-pointer p-3 rounded-md">
                            <Image src="/bell.svg" alt="" width={24} height={24} />
                        </div>
                        <div className='truncate'>Darpan Bahadur</div>
                        <div className="cursor-pointer">
                            <Image src="/profile pic.png" alt="" width={48} height={48} className="rounded-full" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-[#00261C] text-[25px] font-semibold font-poppins leading-normal'>Settings</h1>
                    <div className='flex gap-3'>
                        <span style={{ color: general ? "#00693B" : "#828282", textDecoration: general ? "underline" : '', cursor: 'pointer' }} onClick={() => { setGeneral(true); setSecurity(false) }}>General</span>
                        <span onClick={() => { setSecurity(true); setGeneral(false) }} style={{ color: security ? "#00693B" : "#828282", textDecoration: security ? "underline" : '', cursor: 'pointer' }}>Security</span>
                    </div>
                </div>
                <div>
                    {general &&
                        <div className='flex w-full gap-5 max-h'>
                            <div className='bg-[#FFF] p-3 rounded-md flex flex-col gap-5 h-[960px]'>
                                <div className='flex justify-between items-center'>
                                    <span className='text-[#00261C] text-[20px] font-poppins font-semibold leading-normal'>Profile</span>
                                    <div className='flex gap-[2px] items-center'>
                                        <span className='text-[#00261C] text-[14px] font-[400] font-poppins'>Edit</span>
                                        <EditIcon sx={{ width: "16px", height: '16px' }} />
                                    </div>
                                </div>
                                <p className='text-[14px] text-[#828282] font-[500] font-poppins'>Reference site about Lorem Ipsum, giving information on its origins, as well as a .</p>
                                <div className='flex gap-3'>
                                    <div>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>First Name</span>
                                        <div className='border-[#EAEAEA] w-[360px] border-[2px] rounded-md p-2'>
                                            <input type="text" placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                    <div>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Last Name</span>
                                        <div className='border-[#EAEAEA] w-[360px] border-[2px] rounded-md p-2'>
                                            <input type="text" placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>School</span>
                                    <div className='border-[#EAEAEA] border-[2px] rounded-md p-2'>
                                        <input type="text" placeholder='Student' style={{ border: 'none', outline: "none" }} className='w-full' />
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <div>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Class</span>
                                        <div className='border-[#EAEAEA] w-[360px] border-[2px] rounded-md p-2'>
                                            <input type="text" placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                    <div>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Board</span>
                                        <div className='border-[#EAEAEA] w-[360px] border-[2px] rounded-md p-2'>
                                            <input type="text" placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Address</span>
                                    <div className='border-[#EAEAEA] border-[2px] rounded-md p-2'>
                                        <textarea type="text" placeholder='Student' style={{ border: 'none', outline: "none" }} className='w-full' />
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <div>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>District</span>
                                        <div className='border-[#EAEAEA] w-[360px] border-[2px] rounded-md p-2'>
                                            <input type="text" placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                    <div>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>State</span>
                                        <div className='border-[#EAEAEA] w-[360px] border-[2px] rounded-md p-2'>
                                            <input type="text" placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <div>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Postal Code</span>
                                        <div className='border-[#EAEAEA] w-[360px] border-[2px] rounded-md p-2'>
                                            <input type="number" placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                    <div>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Country</span>
                                        <div className='border-[#EAEAEA] w-[360px] border-[2px] rounded-md p-2'>
                                            <input type="text" placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <div>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Father Mobile Number</span>
                                        <div className='border-[#EAEAEA] w-[360px] border-[2px] rounded-md p-2'>
                                            <input type="tel" placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                    <div>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Mother Mobile Number</span>
                                        <div className='border-[#EAEAEA] w-[360px] border-[2px] rounded-md p-2'>
                                            <input type="tel" placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Bio</span>
                                    <div className='border-[#EAEAEA] border-[2px] rounded-md p-2'>
                                        <textarea type="text" placeholder='Bio' style={{ border: 'none', outline: "none" }} className='w-full' />
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <Button variant='contained' type='none' sx={{ textTransform: 'capitalize', padding: "9px 35px", fontSize: '16px' }}>Update</Button>
                                </div>
                            </div>
                            <div className='w-[298px] h-[435px]  bg-[#FFF]'>
                                <div>
                                    <Image src='/profile.png' width={'100'} height={'100'} className='rounded-[50%]' />

                                </div>

                            </div>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default page