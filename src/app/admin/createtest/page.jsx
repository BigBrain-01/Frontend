'use client'
import React, { useState } from 'react'
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
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


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

  const questions = [
    { id: 1, question: 'What is 2+3', options: { id: 11, option1: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option2: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option3: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option4: 'Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.' } },
    { id: 2, question: 'What is 21+3', options: { id: 12, option1: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option2: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option3: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option4: 'Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.' } },
    { id: 3, question: 'What is 2+13', options: { id: 13, option1: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option2: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option3: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option4: 'Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.' } },
    { id: 4, question: 'What is 2+31', options: { id: 14, option1: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option2: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option3: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option4: 'Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.' } },
    { id: 5, question: 'What is 2+32', options: { id: 15, option1: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option2: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option3: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option4: 'Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.' } },
    { id: 6, question: 'What is 24+3', options: { id: 16, option1: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option2: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option3: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option4: 'Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.' } },
    { id: 7, question: 'What is 2+35', options: { id: 17, option1: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option2: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option3: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option4: 'Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.' } },
    { id: 8, question: 'What is 2+37', options: { id: 18, option1: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option2: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option3: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option4: 'Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.' } },
    { id: 9, question: 'What is 2+35', options: { id: 19, option1: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option2: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option3: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option4: 'Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.' } },
    { id: 10, question: 'What is 29+3', options: { id: 20, option1: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option2: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option3: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option4: 'Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.' } },
    { id: 11, question: 'What is 2+30', options: { id: 21, option1: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option2: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option3: "Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.", option4: 'Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.' } },
  ]

  const [item, setItem] = useState('');
  const [subject, setSubject] = useState([]);
  const [question, setQuestion] = useState([]);

  const handleChange = (event) => {
    setItem(event.target.value)
  }

  return (
    <div className='w-[85%] flex flex-col gap-3 p-3  bg-[#F5F5F5] '>
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
        <h1 className='text-[22px] text-[#262626] font-[600] leading-[33px] font-poppins'>Create New Test</h1>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell className='text-[18px] font-[500] font-poppins leading-[27px]'>Test Name</StyledTableCell>
                  <StyledTableCell align="left" className='text-[18px] font-[500] font-poppins leading-[27px]'>Class</StyledTableCell>
                  <StyledTableCell align="left" className='text-[18px] font-[500] font-poppins leading-[27px]'>Date</StyledTableCell>
                  <StyledTableCell align="left" className='text-[18px] font-[500] font-poppins leading-[27px]'sx={{width:"25px"}}>Table title</StyledTableCell>
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
                        <div className='bg-[#1D4ED8] flex gap-1 p-1 px-2 rounded-md cursor-pointer'>
                          <InsertDriveFileOutlinedIcon sx={{ width: "15px", height: "15px", color: '#FFF' }} />
                          <span className='text-[12px] text-white font-[400] font-poppins leading-[18px]'>Edit</span>
                        </div>
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
            <span className='text-[22px] text-[#262626] font-[600] leading-[33px] font-poppins'>Create New Test</span>
            <span className='text-[16px] text-[#262626] font-[300] leading-[24px]'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Test Name</span>
            <div className='border-2 border-[#D4D4D4] rounded-md p-2'>
              <input type="text" style={{ border: "none", outline: 'none' }} placeholder='Enter the test name...' className='w-full' />
            </div>
            <div className='flex gap-2 justify-between w-full'>
              <div className='flex flex-col w-full'>
                <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Class Name</span>
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
                <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Choose Subject</span>
                <Select onChange={(event) => setSubject(event.target.value)} value={subject} sx={{ width: '100%' }} size='small' multiple>
                  <MenuItem value={'Mathematics'}>Mathematics</MenuItem>
                  <MenuItem value={'English'}>English</MenuItem>
                  <MenuItem value={'Science'}>Science</MenuItem>
                  <MenuItem value={'Social Studies'}>Social Studies</MenuItem>
                </Select>
              </div>
              <div className='flex flex-col w-full'>
                <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Start Time</span>
                <div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker']}>
                      <DateTimePicker slotProps={{ textField: { size: 'small' } }} />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-full'>
              <span>About the test</span>
              <div className='border-2 border-[#D4D4D4] rounded-md'>
                <textarea cols="30" rows="4" style={{ border: 'none', outline: 'none', width: '100%' }}></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white p-3 gap-2 flex flex-col'>
        <div>
          <h1 className='text-[22px] text-[#262626] font-[600] leading-[33px] font-poppins'>Choose Questions</h1>
          <span className='text-[16px] text-[#262626] font-[300] leading-[24px]'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</span>
        </div>
        <div>
          <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Topic</span>
          <div className='border-2 border-[#D4D4D4] rounded-md '>
            <input type="text" style={{ border: 'none', outline: 'none', height: '44px', width: "95%", marginLeft: '5px' }} placeholder='e.g. Algebra' />
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='text-[14px] text-[#262626] font-[300] font-poppins leading-[21px]'>Choose Question</span>
          <Select size='small' onChange={(event) => setQuestion(event.target.value)} value={question} multiple>
            {questions.map((value, i) => (
              <MenuItem>{value.question}</MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <h1 className='text-[22px] text-[#262626] font-semibold font-poppins'>Questions for test</h1>
      {questions.map((values, index) => (
        <div className='bg-white p-5 rounded-lg'>
          <div className='flex justify-between w-full items-center'>
            <div className='text-[20px] text-[#262626] font-semibold leading-[33px] font-poppins flex'>
              <span>{index + 1}.</span>
              <h1>{values.question}</h1>
            </div>
            <Button variant='contained' type='none' color='error' >Delete</Button>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col text-[16px] text-[300] text-[#262626] leading-[24px] gap-3'>
              <span>A.{values.options.option1}</span>
              <span>B.{values.options.option2}</span>
              <span>C.{values.options.option3}</span>
              <span>D.{values.options.option4}</span>
            </div>
            <span className='text-[16px] text-[#262626] font-bold font-poppins'>Answer</span>
            <span className='text-[16px] text-[300] text-[#262626] leading-[24px] '>A.{values.options.option1}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default page