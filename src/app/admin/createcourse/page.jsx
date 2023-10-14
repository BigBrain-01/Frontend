'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Select, MenuItem, Button } from '@mui/material';
import Link from 'next/link';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#D4D4D4",
        color: "#262626",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const page = () => {

    const rows = [
        { id: 1, name: 'Etiam purus in', class: 'Curabitur donec duis', date: 'Morbi pharetra, accumsan' },
        { id: 2, name: 'Etiam purus in', class: 'Curabitur donec duis', date: 'Morbi pharetra, accumsan' },
        { id: 3, name: 'Etiam purus in', class: 'Curabitur donec duis', date: 'Morbi pharetra, accumsan' },
        { id: 4, name: 'Etiam purus in', class: 'Curabitur donec duis', date: 'Morbi pharetra, accumsan' },
        { id: 5, name: 'Etiam purus in', class: 'Curabitur donec duis', date: 'Morbi pharetra, accumsan' },
        { id: 6, name: 'Etiam purus in', class: 'Curabitur donec duis', date: 'Morbi pharetra, accumsan' },
        { id: 7, name: 'Etiam purus in', class: 'Curabitur donec duis', date: 'Morbi pharetra, accumsan' },
        { id: 8, name: 'Etiam purus in', class: 'Curabitur donec duis', date: 'Morbi pharetra, accumsan' },
        { id: 9, name: 'Etiam purus in', class: 'Curabitur donec duis', date: 'Morbi pharetra, accumsan' },
    ];

    const classroom = [
        { id: 1, class: 'class 5', options: { id: 11, subject1: "English", subject2: "Mathematics", subject3: "SST", subject4: "Science" } },
        { id: 2, class: 'class 6', options: { id: 12, subject1: "English", subject2: "Mathematics", subject3: "SST", subject4: "Science" } },
        { id: 3, class: 'class 7', options: { id: 13, subject1: "English", subject2: "Mathematics", subject3: "SST", subject4: "Science" } },
        { id: 4, class: 'class 8', options: { id: 14, subject1: "English", subject2: "Mathematics", subject3: "SST", subject4: "Science" } },
        { id: 5, class: 'class 9', options: { id: 15, subject1: "English", subject2: "Mathematics", subject3: "SST", subject4: "Science" } },
    ];

    const courses = [
        { id: 1, course: "Mathematics", videos: { id: 11, video1: 'video1', video2: 'video2', video3: 'video3', video4: 'video4' } },
        { id: 2, course: "English", videos: { id: 12, video1: 'video1', video2: 'video2', video3: 'video3', video4: 'video4' } },
        { id: 3, course: "Science", videos: { id: 13, video1: 'video1', video2: 'video2', video3: 'video3', video4: 'video4' } },
        { id: 4, course: "History", videos: { id: 14, video1: 'video1', video2: 'video2', video3: 'video3', video4: 'video4' } },
        { id: 5, course: "Physical", videos: { id: 15, video1: 'video1', video2: 'video2', video3: 'video3', video4: 'video4' } },
    ];
    const [showclass, setShowclass] = useState(false);
    const [classs, setClasss] = useState('')
    const [videoclass, setVideoclass] = useState('')
    const [subject, setSubject] = useState('')
    const [level, setLevel] = useState('')
    const [course, setCourse] = useState('')
    const [matcourse, setMatcourse] = useState('')
    const [video, setVideo] = useState('')
    const videoinput = useRef();
    const fileinput = useRef();

    return (
        <div className='w-full flex flex-col gap-7 p-3  bg-[#F5F5F5] '>
            <div className='flex items-center justify-between bg-white p-3 rounded-md'>
                <div className='flex items-center gap-7'>
                    <h1 className='text-[22px] font-[600] text-[#262626] leading-[33px] font-poppins'>Courses</h1>
                    <Link href={'#course'} className='flex gap-1'>
                        <AddIcon sx={{ color: '#262626', width: '24px', height: '24px' }} />
                        <span className='text-[16px] font-[400] text-[#262626] leading-[24px] font-poppins'>Add Content</span>
                    </Link>
                    <div className='flex gap-1 '>
                        <SettingsOutlinedIcon sx={{ color: '#262626', width: '24px', height: '24px' }} />
                        <span className='text-[16px] font-[400] text-[#262626] leading-[24px] font-poppins'>Settings</span>
                    </div>
                </div>
                <div className='border-gray-300 border w-[350px] h-[44px] rounded-md flex items-center p-3 justify-between'>
                    <input type="text" style={{ border: "none", outline: 'none' }} placeholder='Search Content' className='placeholder:text-[#000] placeholder:text-[16px] placeholder:font-[400] placeholder:font-poppins' />
                    <Image src="/search.png" alt='' width={24} height={24} className='cursor-pointer' />
                </div>
            </div>
            <div className='flex flex-col gap-2 mt-3'>
                <h1 className='text-[22px] text-[#262626] font-[600] leading-[33px] font-poppins'>Create New Course</h1>
                <div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell className='text-[18px] font-[500] font-poppins leading-[27px]'>Test Name</StyledTableCell>
                                    <StyledTableCell align="left" className='text-[18px] font-[500] font-poppins leading-[27px]'>Class</StyledTableCell>
                                    <StyledTableCell align="left" className='text-[18px] font-[500] font-poppins leading-[27px]'>Date</StyledTableCell>
                                    <StyledTableCell align="left" className='text-[18px] font-[500] font-poppins leading-[27px]' sx={{ width: "25px" }}>Table title</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.class}</StyledTableCell>
                                        <StyledTableCell align="left">{row.date}</StyledTableCell>
                                        <StyledTableCell align="right">
                                            <div className='flex gap-2 '>
                                                <Link href={'/admin/createcourse/123'} className='bg-[#D97706] flex gap-1 p-1 px-2 rounded-md cursor-pointer' hre>
                                                    <InsertDriveFileOutlinedIcon sx={{ width: "15px", height: "15px", color: '#FFF' }} />
                                                    <span className='text-[12px] text-white font-[400] font-poppins leading-[18px]'>Edit</span>
                                                </Link>
                                                <div className='bg-[#E60000] flex p-1 px-5 rounded-md cursor-pointer'>
                                                    <InsertDriveFileOutlinedIcon sx={{ width: "15px", height: "15px", color: '#FFF' }} />
                                                    <span className='text-[12px] text-white font-[400] font-poppins leading-[18px]'>Delete</span>
                                                </div>
                                            </div>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <div className='p-5 bg-white rounded-lg' id='course'>
                <h1 className='text-[22px] text-[#262626] font-[600] leading-[33px] font-poppins'>Create New Course</h1>
                <span className='text-[16px] font-[300] leading-[24px] font-poppins text-[#262626]'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</span>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col w-full mt-3'>
                        <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Course Title</span>
                        <div className='border border-gray-300 p-2 rounded-md'>
                            <input type="text" style={{ border: 'none', outline: "none", width: '100%' }} placeholder='Advanced Java' />
                        </div>
                    </div>
                    <div className='flex gap-2 w-full'>
                        <div className='flex flex-col w-full'>
                            <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Class/Subject</span>
                            <Select onChange={(event) => setClasss(event.target.value)} value={classs} size='small' >
                                {classroom.map((values, i) => (
                                    <MenuItem value={i} onClick={() => setShowclass(!showclass)}>{values.class}</MenuItem>
                                ))}
                            </Select>
                            {/* {showclass &&
                                <Select onChange={(event) => setSubject(event.target.value)} value={subject} size='small' >
                                    {classroom.map((values, index) => (
                                        <MenuItem value={index} onClick={() => setShowclass(false)}>{values.class.options}</MenuItem>
                                    ))}
                                </Select>
                            } */}
                        </div>
                        <div className='flex flex-col w-full'>
                            <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Duration{"("}in hrs{")"}</span>
                            <div className='border border-gray-300 p-2 rounded-md'>
                                <input type="number" style={{ border: 'none', outline: "none", width: '100%' }} placeholder='26' />
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Level</span>
                            <Select className='hover:outline-none outline-none' onChange={(event) => setLevel(event.target.value)} value={level} size='small'>
                                <MenuItem value={"Easy"}>Easy</MenuItem>
                                <MenuItem value={"Medium"}>Medium</MenuItem>
                                <MenuItem value={"Hard"}>Hard</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div className='flex gap-2 w-full'>
                        <div className='flex flex-col w-full'>
                            <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Thumbnail</span>
                            <div className='border border-gray-300 p-2 rounded-md'>
                                <input type="text" style={{ border: 'none', outline: "none", width: '100%' }} placeholder='' />
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Instructor</span>
                            <div className='border border-gray-300 p-2 rounded-md'>
                                <input type="text" style={{ border: 'none', outline: "none", width: '100%' }} placeholder='Gaurav rai' />
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Pricing</span>
                            <div className='border border-gray-300 p-2 rounded-md'>
                                <input type="text" style={{ border: 'none', outline: "none", width: '100%' }} placeholder='10,000' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Prerequisites</span>
                        <div className='border border-gray-300 p-2 rounded-md'>
                            <input type="text" style={{ border: 'none', outline: "none", width: '100%' }} placeholder='Knowledge of basic math concepts' />
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Description</span>
                        <div className='border border-gray-300 p-2 rounded-md'>
                            <textarea name="" id="" cols="30" rows="4" style={{ width: '100%', border: 'none', outline: 'none', resize: 'none' }}></textarea>
                        </div>
                    </div>
                    <Button variant='contained' type='none' sx={{ textTransform: 'capitalize' }}>Create</Button>
                </div>
            </div>
        </div>
    )
}

export default page