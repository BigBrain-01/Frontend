'use client'
import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import 'intl-tel-input/build/css/intlTelInput.css'
import intlTelInput from 'intl-tel-input';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Select } from '@mui/material';
import moment from "moment";
import MenuItem from '@mui/material/MenuItem';
import { KeyboardArrowDown } from '@mui/icons-material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


const page = () => {
    const [general, setGeneral] = useState(true)
    const [security, setSecurity] = useState(false);
    const [item, setItem] = useState('')
    const [opencalendar, setOpenCalendar] = useState(false)
    const [value, setValue] = useState(dayjs('2022-04-17'))

    window.onload = () => {
        const phoneInputField = document.querySelector("#phone");
        const phoneInputField1 = document.querySelector("#phone1");
        intlTelInput(phoneInputField, {
            utilsScript: 'node_modules/intl-tel-input/build/js/utils.js'
        });
        intlTelInput(phoneInputField1, {
            utilsScript: 'node_modules/intl-tel-input/build/js/utils.js'
        });
    }

    const handleChange = (event) => {
        setItem(event.target.value);
    };
    return (
        <div className="flex">
            <Sidebar />
            {/* Dashboard right */}
            <div className="flex flex-col w-full bg-[#EFF3FD] px-10">
                {/* navbar */}
                <div className="flex py-5 gap-5 bg-[#EFF3FD]  items-center justify-between w-full h-14">
                    <div className="flex gap-5 items-center">
                        <div className="flex flex-col text-xs">
                            <div className="text-lg font-semibold">
                                Welcome Darpan Bahadur
                            </div>
                            {moment().format("hh:mm a DD MMM YYYY")}
                        </div>
                        <div className="flex  px-2  bg-white w-[400px] items-center rounded-md gap-3 h-[48px] ">
                            <SearchIcon sx={{ width: "24px", height: '24px', color: "#AEB6CF", }} />
                            <input
                                className="rounded-md w-full h-8 outline-none "
                                type="Search"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-5 ">
                        <div className="bg-white  cursor-pointer p-3 rounded-md">
                            <Image src="/bell.svg" alt="" width={20} height={10} />
                        </div>
                        <div>Darpan Bahadur</div>
                        <div className="cursor-pointer">
                            <Image src="/profile pic.png" alt="" width={30} height={30} className="rounded-full" />
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
                        <div className='flex w-full justify-between'>
                            <div className='bg-[#FFF] p-3 rounded-md w-[60%] flex flex-col gap-5'>
                                <div className='flex justify-between w-full items-center'>
                                    <span className='text-[#00261C] text-[20px] font-poppins font-semibold leading-normal'>Profile</span>
                                    <div className='flex gap-[2px] items-center'>
                                        <span className='text-[#00261C] text-[14px] font-[400] font-poppins'>Edit</span>
                                        <EditIcon sx={{ width: "16px", height: '16px' }} />
                                    </div>
                                </div>
                                <p className='text-[14px] text-[#828282] font-[500] font-poppins'>Reference site about Lorem Ipsum, giving information on its origins, as well as a</p>
                                <div className='flex w-full gap-3'>
                                    <div className='w-1/2'>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>First Name</span>
                                        <div className='border-[#EAEAEA] border-[2px] rounded-md p-2'>
                                            <input type="text" placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                    <div className='w-1/2'>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Last Name</span>
                                        <div className='border-[#EAEAEA] border-[2px] rounded-md p-2'>
                                            <input type="text" placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex w-full gap-3'>
                                    <div className='w-1/2'>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Gender</span>
                                        <div className='rounded-md w-full'>
                                            <Select onChange={handleChange} value={item} size='small' sx={{ width: '100%', '.MuiSvgIcon-root ': { fill: "black !important" }, color: 'black', border: 'none', outline: 'none' }} IconComponent={KeyboardArrowDown} >
                                                <MenuItem value={'HELLO'}>Male</MenuItem>
                                                <MenuItem value={'hEY'}>Female</MenuItem>
                                                <MenuItem value={'HII'}>I do not prefer to tell</MenuItem>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='w-1/2'>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Date Of Birth</span>
                                        <div className='border-[#EAEAEA] w-full border-[2px] rounded-md p-2 flex justify-between relative' onClick={() => setOpenCalendar(!opencalendar)}>
                                            <span>06/08/2023</span>
                                            <CalendarMonthIcon color='gray' sx={{ width: '20px', height: '20px', cursor: 'pointer' }} />
                                            <div className='z-20 absolute bg-[#FFF] top-12'>
                                                {opencalendar &&
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                                                            <DemoItem>
                                                                <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                                                            </DemoItem>
                                                        </DemoContainer>
                                                    </LocalizationProvider>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>School</span>
                                    <div className='border-[#EAEAEA] border-[2px] rounded-md p-2'>
                                        <input type="text" placeholder='Student' style={{ border: 'none', outline: "none" }} className='w-full' />
                                    </div>
                                </div>
                                <div className='flex gap-3 w-full'>
                                    <div className='w-1/2'>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Class</span>
                                        <div className='border-[#EAEAEA] w-full border-[2px] rounded-md p-2'>
                                            <input type="text" placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                    <div className='w-1/2'>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Board</span>
                                        <div className='border-[#EAEAEA] w-full border-[2px] rounded-md p-2'>
                                            <input type="text" placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Address</span>
                                    <div className='border-[#EAEAEA] border-[2px] rounded-md p-2'>
                                        <textarea type="text" placeholder='Student' style={{ border: 'none', resize: "none", outline: "none" }} className='w-full' />
                                    </div>
                                </div>
                                <div className='flex gap-3 w-full'>
                                    <div className='w-1/2'>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>District</span>
                                        <div className='border-[#EAEAEA] w-full border-[2px] rounded-md p-2'>
                                            <input type="text" placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                    <div className='w-1/2'>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>State</span>
                                        <div className='border-[#EAEAEA] w-full border-[2px] rounded-md p-2'>
                                            <input type="text" placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3 w-full'>
                                    <div className='w-1/2'>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Postal Code</span>
                                        <div className='border-[#EAEAEA] w-full border-[2px] rounded-md p-2'>
                                            <input type="number" placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                    <div className='w-1/2'>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Country</span>
                                        <div className='border-[#EAEAEA] w-full border-[2px] rounded-md p-2'>
                                            <input type="text" placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3 w-full'>
                                    <div className='w-1/2'>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Father Mobile Number</span>
                                        <div className='border-[#EAEAEA] w-full border-[2px] rounded-md p-2'>
                                            <input type="tel" id='phone' placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                    <div className='w-1/2'>
                                        <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Mother Mobile Number</span>
                                        <div className='border-[#EAEAEA] w-full border-[2px] rounded-md p-2'>
                                            <input type="tel" id='phone1' placeholder='John Doe' style={{ border: 'none', outline: "none" }} className='w-full' />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <span className='text-[#A0A0A0] font-semibold font-poppins leading-normal'>Bio</span>
                                    <div className='border-[#EAEAEA] border-[2px] rounded-md p-2'>
                                        <textarea type="text" placeholder='Bio' style={{ border: 'none', resize: "none", outline: "none" }} className='w-full' />
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <Button variant='contained' type='none' sx={{ textTransform: 'capitalize', padding: "9px 35px", fontSize: '16px' }}>Update</Button>
                                </div>
                            </div>
                            <div className='  bg-[#FFF] h-[435px]'>
                                <div className='flex flex-col justify-center px-3 py-7 gap-7'>
                                    <div className='relative flex justify-center'>
                                        <Image src='/profile.png' width={'80'} height={'80'} className='rounded-[50%]' />
                                        <span className='w-[30px] h-[30px] bg-[#FAFAFA] rounded-full absolute top-14 right-[7rem] flex justify-center items-center cursor-pointer'><EditIcon sx={{ width: '16px', height: '16px' }} /></span>
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex gap-2'>
                                            <span className='text-[16px] text-[#000] font-semibold font-poppins leading-[24px]'>Name :</span>
                                            <span className='text-[16px] text-[#A0A0A0] font-poppins leading-[24px] text-right'>darpan bahadur</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span className='text-[16px] text-[#000] font-semibold font-poppins leading-[24px] w-[135px]'>Registration No.:</span>
                                            <span className='text-[16px] text-[#A0A0A0] font-poppins leading-[24px]'>342</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span className='text-[16px] text-[#000] font-semibold font-poppins leading-[24px] '>Email:</span>
                                            <span className='text-[16px] text-[#A0A0A0] font-poppins leading-[24px]'>darpanbahadur123@gmail.com</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span className='text-[16px] text-[#000] font-semibold font-poppins leading-[24px] '>Phone:</span>
                                            <span className='text-[16px] text-[#A0A0A0] font-poppins leading-[24px]'>7894561230</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span className='text-[16px] text-[#000] font-semibold font-poppins leading-[24px] '>Gender:</span>
                                            <span className='text-[16px] text-[#A0A0A0] font-poppins leading-[24px]'>Male</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span className='text-[16px] text-[#000] font-semibold font-poppins leading-[24px] '>DOB:</span>
                                            <span className='text-[16px] text-[#A0A0A0] font-poppins leading-[24px]'>14/12/2023</span>
                                        </div>
                                    </div>
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