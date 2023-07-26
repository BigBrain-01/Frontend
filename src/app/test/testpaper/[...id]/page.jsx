'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import TimerTwoToneIcon from '@mui/icons-material/TimerTwoTone';
import Question from './question';

const page = () => {
    const [bookmarkcolor, setBookmarkcolor] = useState(false);
    const [ansmark, setAnsmark] = useState(false)
    const [id, setId] = useState(1);
    const [bookid, setBookid] = useState();
    const [ansid, setAnsid] = useState(1);
    const [count, setCount] = useState({
        answered: [],
        bookmarked: [],
        skipped: []
    })
    const [data, setData] = useState([
        { id: 1, ques: "What is 2+3 ?", ans: [{ id1: 1, a1: 2 }, { id1: 2, a1: 4 }, { id1: 3, a1: 6 }, { id1: 4, a1: 5 }], skipped: false, answered: null },
        { id: 2, ques: "What is 1+3 ?", ans: [{ id1: 1, a1: 2 }, { id1: 2, a1: 4 }, { id1: 3, a1: 6 }, { id1: 4, a1: 5 }], skipped: false, answered: null },
        { id: 3, ques: "What is 4+3 ?", ans: [{ id1: 1, a1: 2 }, { id1: 2, a1: 4 }, { id1: 3, a1: 6 }, { id1: 4, a1: 5 }], skipped: false, answered: null },
        { id: 4, ques: "What is 6+3 ?", ans: [{ id1: 1, a1: 2 }, { id1: 2, a1: 4 }, { id1: 3, a1: 6 }, { id1: 4, a1: 5 }], skipped: false, answered: null },
        { id: 5, ques: "What is 7+3 ?", ans: [{ id1: 1, a1: 2 }, { id1: 2, a1: 4 }, { id1: 3, a1: 6 }, { id1: 4, a1: 5 }], skipped: false, answered: null },
        { id: 6, ques: "What is 8+3 ?", ans: [{ id1: 1, a1: 2 }, { id1: 2, a1: 4 }, { id1: 3, a1: 6 }, { id1: 4, a1: 5 }], skipped: false, answered: null },
        { id: 7, ques: "What is 24+3 ?", ans: [{ id1: 1, a1: 2 }, { id1: 2, a1: 4 }, { id1: 3, a1: 6 }, { id1: 4, a1: 5 }], skipped: false, answered: null },
        { id: 8, ques: "What is 8+3 ?", ans: [{ id1: 1, a1: 2 }, { id1: 2, a1: 4 }, { id1: 3, a1: 6 }, { id1: 4, a1: 5 }], skipped: false, answered: null },
        { id: 9, ques: "What is 29+3 ?", ans: [{ id1: 1, a1: 2 }, { id1: 2, a1: 4 }, { id1: 3, a1: 6 }, { id1: 4, a1: 5 }], skipped: false, answered: null },
        { id: 10, ques: "What is 2+83 ?", ans: [{ id1: 1, a1: 2 }, { id1: 2, a1: 4 }, { id1: 3, a1: 6 }, { id1: 4, a1: 5 }], skipped: false, answered: null },
        { id: 11, ques: "What is 2+34 ?", ans: [{ id1: 1, a1: 2 }, { id1: 2, a1: 4 }, { id1: 3, a1: 6 }, { id1: 4, a1: 5 }], skipped: false, answered: null },
    ])
    return (
        <div className='flex flex-col h-[100vh]'>
            <div className='flex justify-between items-center py-3'>
                <div className='flex gap-2 px-[10rem]'>
                    <Image src={'/logo.png'} alt='logo' width={'30'} height={'22'} />
                    <div >
                        <span className='text-[22px] font-semibold font-poppins text-[#2F3192] '>Study</span>
                        <span className='text-[22px] font-semibold font-poppins text-[#000]'>Titans</span>
                    </div>
                </div>
                <div className='px-[8rem] flex items-center'>
                    <TimerTwoToneIcon sx={{ color: '#B1B1B1' }} />
                    <span className='text-[#2F3192] text-[20px] font-poppins font-semibold'>59:55</span>
                </div>
            </div>
            <hr className='w-full bg-[#E0E0E0]' />
            <div className='flex h-[91vh] '>
                <div className='flex flex-col w-[85%] gap-14 px-3'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-4 h-max items-center'>
                            <span className='text-[22px] font-poppins font-semibold text-[#2F3192]'>Section 1</span>
                            <hr className='w-[2px] h-[60px] bg-[#E0E0E0]' />
                            <span className='text-[22px] font-poppins font-semibold text-[#2F3192]'>Section 2</span>
                            <hr className='w-[2px] bg-[#E0E0E0] h-[60px]' />
                            <span className='text-[22px] font-poppins font-semibold text-[#2F3192]'>Section 3</span>
                            <hr className='w-[2px] bg-[#E0E0E0] h-[60px]' />
                            <span className='text-[22px] font-poppins font-semibold text-[#2F3192]'>Section 4</span>
                        </div>
                        <div className='text-[30px] text-[#000] font-[500]'>Class 5</div>
                    </div>
                    <div className='flex pl-[4rem] flex-col gap-5 justify-between h-[90vh]'>
                        <Question data={data} count={count} setCount={setCount} setData={setData} bookid={bookid} setBookid={setBookid} setBookmarkcolor={setBookmarkcolor} id={id} setId={setId} bookmarkcolor={bookmarkcolor} ansmark={ansmark} setAnsmark={setAnsmark} ansid={ansid} setAnsid={setAnsid} />
                        <div className='flex justify-between'>
                            <button disabled={id === 1} className={`${id === 1 ? "cursor-not-allowed" : "cursor-pointer"} bg-[#83FFC9] bg-opacity-20 p-3 rounded-lg text-[#00693B] text-[16px] font-[500] font-poppins px-3`} onClick={() => setId(p => p - 1)}>Previous</button>
                            {id === data.length ? <button className='bg-[#00693B] p-2 rounded-lg text-[#FFF] text-[16px] font-[500] font-poppins px-3 w-[92px]' onClick={()=>alert("Submitted...")}>Submit</button> : <button className='bg-[#00693B] p-2 rounded-lg text-[#FFF] text-[16px] font-[500] font-poppins px-3 w-[92px]' onClick={() =>{if(!count.answered.includes(id)){
                                count.skipped.push(id)
                                setCount({...count})
                            } ;setId(p => p + 1)}}>Next</button>}
                        </div>
                    </div>
                </div>
                <div className='bg-[#F8F8F8] w-[15%] flex flex-col justify-between'>
                    <div className='p-3 flex flex-wrap gap-3 max-w-[230px]'>
                        {data.map((value, i) => (
                            <span onClick={() => setId(value.id)} className='min-w-[42px] h-[42px] text-[#FFF] text-[20px] font-poppins font-semibold flex items-center justify-center cursor-pointer rounded-md' style={{backgroundColor: count.bookmarked.includes(value.id) ? "#FFD600" : count.answered.includes(value.id) ? "#00693B" : count.skipped.includes(value.id)? "#EE0000":"#D2D2D2"}} key={i}>{i + 1}</span>
                        ))}
                    </div>
                    <div>
                        <hr className='w-full h-[6px] bg-[#009C58] ' />
                        <div className='flex gap-1 bg-[#009C58] bg-opacity-10  p-3 items-center justify-center'>
                            <span className='text-[14px] text-[#18191F] font-[500] font-poppins leading-[20px]'>Answered</span>
                            <span className='text-[14px] text-[#18191F] font-[500] font-poppins leading-[20px]'>{count.answered.length}/{data.length}</span>
                        </div>
                        <hr className='w-full h-[6px] bg-[#EE0000] ' />
                        <div className='flex gap-1 bg-[#EE0000] bg-opacity-10  p-3 items-center justify-center'>
                            <span className='text-[14px] text-[#18191F] font-[500] font-poppins leading-[20px]'>Not Answered</span>
                            <span className='text-[14px] text-[#18191F] font-[500] font-poppins leading-[20px]'>{data.length - count.answered.length}/{data.length}</span>
                        </div>
                        <hr className='w-full h-[6px] bg-[#FFD600] ' />
                        <div className='flex gap-1 bg-[#FFD600] bg-opacity-10  p-3 items-center justify-center'>
                            <span className='text-[14px] text-[#18191F] font-[500] font-poppins leading-[20px]'>Bookmarked</span>
                            <span className='text-[14px] text-[#18191F] font-[500] font-poppins leading-[20px]'>{count.bookmarked.length}/{data.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page