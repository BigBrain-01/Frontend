import React from 'react'
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const question = ({ data, setData, count, setCount, bookid, setBookid, setBookmarkcolor, bookmarkcolor, ansmark, setAnsmark, id, setId, ansid, setAnsid }) => {

    const handleClick = (value1) => {
        setAnsid(value1.id1)
        if (!count.answered.includes(id)) {
            count.answered.push(id)
            setCount({
                ...count
            })
        }
        console.log(count)
        const activeQues = data.filter((v, i) => v.id == id)[0]
        activeQues.answered = value1.id1
        setData([...data])
        console.log(data)
    }
    return (

        <div>
            {
                data.slice(id - 1, id).map((value, i) => (
                    <div className='flex flex-col gap-5' onClick={() => setId(value.id)}>
                        <div className='flex gap-5 items-center '>
                            <div onClick={() => {
                                if (!count.bookmarked.includes(id)) {
                                    count.bookmarked.push(id)
                                    setCount({
                                        ...count
                                    })
                                }
                                else{
                                    const newCount = count.bookmarked.filter((p)=>p!==id)
                                    count.bookmarked = newCount
                                    setCount({
                                        ...count
                                    })
                                }
                            }} className='cursor-pointer'>
                                {count.bookmarked.includes(value.id) ? <BookmarkOutlinedIcon sx={{ width: '30px', height: '30px', color: "#FFD600" }} /> : <BookmarkBorderOutlinedIcon sx={{ width: '30px', height: '30px' }} />}
                            </div>
                            <div className='flex gap-3'>
                                <span className='text-[28px] text-[#000] font-poppins font-[500]'>{id}.</span>
                                <span className='text-[28px] text-[#000] font-poppins font-[500]'>{value.ques}</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 mx-12'>
                            {
                                value.ans.map((value1, ind) => (
                                    <div onClick={() => handleClick(value1)} key={ind} className={`w-[504px] p-2 border-[2px] border-[#CCCCCC] rounded-md flex items-center  cursor-pointer px-7 text-black gap-2 ${!(value.answered === value1.id1) ? "" : "bg-gradient-to-l from-[#00C870] to-[#00FF8F]"} `}>
                                        <span className='text-[26px] text-[#7E7E7E]  font-poppins font-[500]'>{String.fromCharCode(ind + 65)}.</span>
                                        <span className='text-[26px] text-[#7E7E7E]  font-poppins font-[500]'>{value1.a1}</span>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div >
    )
}

export default question