'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { Select, MenuItem, Button, InputLabel, FormControl } from '@mui/material';


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

  const [item, setItem] = useState('');
  const [answer, setAnswer] = useState('');;
  const [subject, setSubject] = useState([]);
  const inputimage = useRef();
  const fileinput = useRef();

  const handleChange = (event) => {
    setItem(event.target.value)
  }

  return (
    <div className='w-[85%] flex flex-col gap-3 p-3 bg-[#F5F5F5] '>
      <div className='flex items-center justify-between bg-white p-3 rounded-md'>
        <div className='flex items-center gap-7'>
          <h1 className='text-[22px] font-[600] text-[#262626] leading-[33px] font-poppins'>Challenges</h1>
          <div className='flex gap-1 '>
            <AddIcon sx={{ color: '#262626', width: '24px', height: '24px' }} />
            <span className='text-[16px] font-[400] text-[#262626] leading-[24px] font-poppins'>Add Content</span>
          </div>
          <div className='flex gap-1 '>
            <SettingsOutlinedIcon sx={{ color: '#262626', width: '24px', height: '24px' }} />
            <span className='text-[16px] font-[400] text-[#262626] leading-[24px] font-poppins'>Settings</span>
          </div>
        </div>
        <div className='border-[#D4D4D4] border-2 w-[350px] h-[44px] rounded-md flex items-center p-3 justify-between'>
          <input type="text" style={{ border: "none", outline: 'none' }} placeholder='Search Content' className='placeholder:text-[#000] placeholder:text-[16px] placeholder:font-[400] placeholder:font-poppins' />
          <Image src="/search.png" alt='' width={24} height={24} className='cursor-pointer' />
        </div>
      </div>
      <div className='flex flex-col gap-2 mt-5'>
        <h1 className='text-[22px] text-[#262626] font-[600] leading-[33px] font-poppins'>Add New Subject</h1>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell className='text-[18px] font-[500] font-poppins leading-[27px]'>Subject Name</StyledTableCell>
                  <StyledTableCell align="left" className='text-[18px] font-[500] font-poppins leading-[27px]'>Type</StyledTableCell>
                  <StyledTableCell align="left" className='text-[18px] font-[500] font-poppins leading-[27px]'>Class</StyledTableCell>
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
                        <Link href={'/admin/addsubjects/123'}>
                          <div className='bg-[#1D4ED8] flex gap-1 p-1 px-2 rounded-md cursor-pointer'>
                            <InsertDriveFileOutlinedIcon sx={{ width: "15px", height: "15px", color: '#FFF' }} />
                            <span className='text-[12px] text-white font-[400] font-poppins leading-[18px]'>Edit</span>
                          </div>
                        </Link>
                        <div className='bg-[#D97706] flex p-1 px-5 rounded-md cursor-pointer'>
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
      <div className='p-3 bg-white rounded-lg'>
        <div className=' flex flex-col gap-2 '>
          <div className='flex flex-col '>
            <span className='text-[22px] text-[#262626] font-[600] leading-[33px] font-poppins'>Add New Subject</span>
            <span className='text-[16px] text-[#262626] font-[300] leading-[24px]'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Subject Name</span>
            <div className='border-2 border-[#D4D4D4] rounded-md p-2'>
              <input type="text" style={{ border: "none", outline: 'none' }} placeholder='Enter the test name...' className='w-full' />
            </div>
            <div className='flex gap-2 justify-between w-full'>
              <div className='flex flex-col w-full mt-1'>
                <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Choose Class</span>
                <Select onChange={handleChange} value={item} sx={{ width: '100%' }} size='small'>
                  <MenuItem value={'class 4'}>Class 4</MenuItem>
                  <MenuItem value={'class 5'}>Class 5</MenuItem>
                  <MenuItem value={'class 6'}>Class 6</MenuItem>
                  <MenuItem value={'class 7'}>Class 7</MenuItem>
                  <MenuItem value={'class 8'}>Class 8</MenuItem>
                  <MenuItem value={'class 9'}>Class 9</MenuItem>
                </Select>
              </div>
              <div className='w-full'>
                <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Subject Name</span>
                <div className='border-2 border-[#D4D4D4] rounded-md p-2'>
                  <input type="text" style={{ border: "none", outline: 'none' }} className='w-full' />
                </div>
              </div>
              <div className='w-full'>
                <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Preferred Books</span>
                <div className='border-2 border-[#D4D4D4] rounded-md p-2'>
                  <input type="text" style={{ border: "none", outline: 'none' }} className='w-full' />
                </div>
              </div>
            </div>
            <div className='flex flex-col w-full'>
              <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Description</span>
              <div className='border-2 border-[#D4D4D4] rounded-md p-1'>
                <textarea cols="30" rows="4" style={{ border: 'none', outline: 'none', width: '100%' }}></textarea>
              </div>
            </div>
            <div className='mt-3  w-full'>
              <Button variant='contained' type='none' color='success'>Create Subject</Button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white p-3 gap-2 flex flex-col'>
        <h1 className='text-[22px] text-[#262626] font-[600] leading-[33px] font-poppins'>Add Question</h1>
        <div className='flex w-full gap-2 items-center'>
          <div className='flex flex-col w-full mt-1'>
            <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Choose Class</span>
            <Select onChange={handleChange} value={item} sx={{ width: '100%' }} size='small'>
              <MenuItem value={'class 4'}>Class 4</MenuItem>
              <MenuItem value={'class 5'}>Class 5</MenuItem>
              <MenuItem value={'class 6'}>Class 6</MenuItem>
              <MenuItem value={'class 7'}>Class 7</MenuItem>
              <MenuItem value={'class 8'}>Class 8</MenuItem>
              <MenuItem value={'class 9'}>Class 9</MenuItem>
            </Select>
          </div>
          <div className='flex flex-col w-full'>
            <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[24px]'>Choose the subject</span>
            <Select onChange={(event) => setSubject(event.target.value)} value={subject} size='small'>
              <MenuItem></MenuItem>

            </Select>
          </div>
        </div>
        <div>
          <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Write your question here</span>
          <div className='border-2 border-[#D4D4D4] rounded-md '>
            <input type="text" style={{ border: 'none', outline: 'none', height: '44px', width: "95%", marginLeft: '5px' }} placeholder='e.g. What is photosynthesis?' />
          </div>
        </div>
        <div className='flex w-full justify-between gap-2'>
          <div className='w-full'>
            <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Any specific topic</span>
            <div className='border-2 border-[#D4D4D4] rounded-md '>
              <input type="text" style={{ border: 'none', outline: 'none', height: '44px', width: "95%", marginLeft: '5px' }} placeholder='e.g. Algebra' />
            </div>
          </div>
          <div className='w-full'>
            <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Image if any</span>
            <div className='border-2 border-[#D4D4D4] rounded-md h-[46px] flex items-center'>
              <input type="file" hidden accept='image/*' ref={inputimage} />
              <Button type='button' className='text-[16px] text-[#262626] font-poppins font-[300] leading-[24px] capitalize' onClick={() => inputimage.current.click()}>Choose Image</Button>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex justify-center'>
            <span className='text-[22px] text-[#262626] font-[600] leading-[33px] font-poppins'>Options</span>
          </div>
          <div className='flex gap-2'>
            <div className='w-full'>
              <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>A.</span>
              <div className='border-2 border-[#D4D4D4] rounded-md '>
                <input type="text" style={{ border: 'none', outline: 'none', height: '44px', width: "95%", marginLeft: '5px' }} placeholder='e.g. Algebra' />
              </div>
            </div>
            <div className='w-full'>
              <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>B.</span>
              <div className='border-2 border-[#D4D4D4] rounded-md '>
                <input type="text" style={{ border: 'none', outline: 'none', height: '44px', width: "95%", marginLeft: '5px' }} placeholder='e.g. Algebra' />
              </div>
            </div>
          </div>
          <div className='flex gap-2'>
            <div className='w-full'>
              <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>C.</span>
              <div className='border-2 border-[#D4D4D4] rounded-md '>
                <input type="text" style={{ border: 'none', outline: 'none', height: '44px', width: "95%", marginLeft: '5px' }} placeholder='e.g. Algebra' />
              </div>
            </div>
            <div className='w-full'>
              <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>D.</span>
              <div className='border-2 border-[#D4D4D4] rounded-md '>
                <input type="text" style={{ border: 'none', outline: 'none', height: '44px', width: "95%", marginLeft: '5px' }} placeholder='e.g. Algebra' />
              </div>
            </div>
          </div>
          <div className='flex flex-col '>
            <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Choose Answer</span>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Choose</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={answer}
                label="Answer"
                onChange={(event) => setAnswer(event.target.value)}
                size='small'
              >
                <MenuItem value={'A'}>A</MenuItem>
                <MenuItem value={'B'}>B</MenuItem>
                <MenuItem value={'C'}>C</MenuItem>
                <MenuItem value={'D'}>D</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='flex justify-center'>
            <Button variant='contained' type='none' sx={{ width: "50%" }}>Add</Button>
          </div>
        </div>
      </div>
      <div className='bg-white p-3 rounded-lg flex flex-col gap-3'>
        <h1 className='text-[20px] text-[#262626] font-[600] font-poppins leading-[33px]'>Create New Question using PDF</h1>
        <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[24px]'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</span>
        <div className='flex w-full gap-2 items-center'>
          <div className='flex flex-col w-full mt-1'>
            <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Choose Class</span>
            <Select onChange={handleChange} value={item} sx={{ width: '100%' }} size='small'>
              <MenuItem value={'class 4'}>Class 4</MenuItem>
              <MenuItem value={'class 5'}>Class 5</MenuItem>
              <MenuItem value={'class 6'}>Class 6</MenuItem>
              <MenuItem value={'class 7'}>Class 7</MenuItem>
              <MenuItem value={'class 8'}>Class 8</MenuItem>
              <MenuItem value={'class 9'}>Class 9</MenuItem>
            </Select>
          </div>
          <div className='flex flex-col w-full'>
            <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[24px]'>Choose the subject</span>
            <Select onChange={(event) => setSubject(event.target.value)} value={subject} size='small'>
              <MenuItem></MenuItem>

            </Select>
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[24px]'>Choose the file</span>
          <div className='border-2 border-[#D4D4D4] rounded-md flex justify-center'>
            <input type="file" hidden ref={fileinput} accept='.pdf' />
            <Button type='button' onClick={() => fileinput.current.click()} className='text-[16px] text-[#262626] font-poppins font-[300] leading-[24px] capitalize'>Choose</Button>
          </div>
        </div>
        <Button variant='contained' type='none'>Add</Button>
      </div>
    </div>
  )
}

export default page