import React from 'react';
import { Button } from '@mui/material';

const Practice = () => {
    const data = [
        { id: 1, name: 'Practice1.pdf', createdAt: 'July 29,2023',fileUrl:'/file.pdf' },
        { id: 2, name: 'Practice1.pdf', createdAt: 'January 29,2023',fileUrl:'/file.pdf' },
        { id: 3, name: 'Practice1.pdf', createdAt: 'February 29,2023',fileUrl:'/file.pdf' },
        { id: 4, name: 'Practice1.pdf', createdAt: 'July 29,2023',fileUrl:'/file.pdf' },
        { id: 5, name: 'Practice1.pdf', createdAt: 'July 29,2023',fileUrl:'/file.pdf' },
        { id: 6, name: 'Practice1.pdf', createdAt: 'July 29,2023',fileUrl:'/file.pdf' },
        { id: 7, name: 'Practice1.pdf', createdAt: 'July 29,2023',fileUrl:'/file.pdf' },
        { id: 8, name: 'Practice1.pdf', createdAt: 'July 29,2023',fileUrl:'/file.pdf' },
        { id: 9, name: 'Practice1.pdf', createdAt: 'July 29,2023',fileUrl:'/file.pdf' },
        { id: 10,name: 'Practice1.pdf', createdAt: 'July 29,2023',fileUrl:'/file.pdf' },
    ]
    return (
        <div className='w-[100%] px-10 flex flex-col gap-5'>
            <div className='flex text-[18px] justify-between font-[500] font-poppins gap-5 '>
                <span>Name</span>
                <span>createdAt</span>
                <span className='pl-5'>Preview</span>
                <span>Download</span>
            </div>
            {data.map((value, i) => (
                <div className=' flex justify-between'>
                    <span className='text-[14px] font-medium w-[70px]'>{value.name}</span>
                    <span className='text-[14px] font-medium text-left w-[115px]'>{value.createdAt}</span>
                    <Button variant='outlined'>
                        <a target="_blank" href={value.fileUrl} style={{ fontSize: '12px', fontWeight: 'bold', color: "#698AFF", textTransform: 'capitalize', textDecoration: 'none' }}>Preview</a>
                    </Button>
                    <Button variant='contained' size='small' color='primary' type='none' sx={{ textTransform: 'capitalize', backgroundColor: "none" }}>Download</Button>
                </div>
            ))}
        </div>
    )
}

export default Practice