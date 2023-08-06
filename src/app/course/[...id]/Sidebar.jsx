import React, { useState } from 'react'
import { Paper, Select } from '@mui/material'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image'
import { KeyboardArrowDown } from '@mui/icons-material';

const Sidebar = () => {
    const data = [
        { id: 1, name: "Exercise 1" },
        { id: 2, name: "Exercise 2" },
        { id: 3, name: "Exercise 3" },
        { id: 4, name: "Exercise 4" },
        { id: 5, name: "Exercise 5" },
        { id: 6, name: "Exercise 6" },
        { id: 7, name: "Exercise 6" },
        { id: 8, name: "Exercise 6" },
        { id: 9, name: "Exercise 6" },
        { id: 10, name: "Exercise 6" },
        { id: 11, name: "Exercise 6" },
        { id: 12, name: "Exercise 6" },
        { id: 13, name: "Exercise 6" },
    ]
    const [item, setItem] = useState('');

    const handleChange = (event) => {
        setItem(event.target.value);
    };
    return (
        <div className=' h-screen drop-shadow-[4px_4px_40px_rgba(0, 0, 0, 0.06)] overflow-x-hidden sticky z-1 top-0 left-0 w-[330px]'>
            <div className=' bg-[#010033] p-3 gap-[5rem] flex flex-col pb-14'>
                <div className='flex items-center gap-4'>
                    <div><KeyboardArrowLeftRoundedIcon sx={{ width: '34px', height: '34px', color: 'white', cursor: 'pointer' }} /></div>
                    <div className='flex gap-1 items-center'>
                        <Image src={"/logo.png"} alt='logo' width={'30'} height={'22'} />
                        <span className='text-[22px] text-[#FFF] font-semibold leading-[20px] font-poppins'>StudyTitans</span>
                    </div>
                </div>
                <div className='flex flex-col ml-5 gap-4'>
                    <div className='flex items-center text-[#FFF] text-[20px] font-semibold leading-normal font-poppins '>
                        <span>Class 4-</span>
                        <span>Mathematics</span>
                    </div>
                    <div className='flex flex-col'>
                        <Paper className='bg-[rgb(255,255,255)] flex justify-between items-center'>
                            <Select onChange={handleChange} value={item} sx={{ width: '100%', '.MuiSvgIcon-root ': { fill: "black !important" }, color: 'black', fontWeight: 600, fontSize: '18px', lineHeight: '21px' }} IconComponent={KeyboardArrowDown} >
                                <MenuItem value={'HELLO'}>Chapter 1 - Rational Numbers</MenuItem>
                                <MenuItem value={'hEY'}>Chapter 2 - Alzebra</MenuItem>
                                <MenuItem value={'HII'}>Chapter 3 - Polynomial</MenuItem>
                                <MenuItem value={'byee'}>Chapter 4 - Mensuration</MenuItem>
                            </Select>
                        </Paper>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center pt-10 '>
                <div className='flex flex-col w-[237px]'>
                    <div className='flex justify-between'>
                        <span className='text-[#262626] text-[18px] font-semibold font-poppins leading-[21px] pl-[1rem]'>S.no.</span>
                        <span className='text-[#262626] text-[18px] font-semibold font-poppins leading-[21px] pr-[3rem]'>Name</span>
                    </div>
                    <div className=' overflow-y-scroll flex flex-col h-screen'>
                        {data.map((value, index) => (
                            <ul className='flex justify-between p-3 text-[18px] text-[#BDBDBD] font-poppins cursor-pointer'>
                                <li className='pl-[1rem]'>{index + 1}</li>
                                <li className='pr-[1.5rem]'>{value.name}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar