'use client'
import React from 'react'
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Button } from '@mui/material';

const page = () => {

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
      <div className='flex flex-col gap-3'>
        <h1 className='text-[22px] font-[600] text-[#262626] leading-[33px] font-poppins'>Created Question</h1>
        {questions.map((values,i) => (
          <div className='bg-white p-3'>
            <div className='flex justify-between'>
              <div className='text-[20px] text-[#262626] font-semibold font-poppins leading-[33px]'>
                <span>{i+1}.</span>
                <span>{values.question}</span>
              </div>
              <div className='flex gap-1'>
                <Button variant='contained' type='none'>Edit</Button>
                <Button variant='contained' type='none' color='error'>Delete</Button>
              </div>
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
    </div>
  )
}

export default page