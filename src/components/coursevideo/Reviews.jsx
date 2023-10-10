import React, { useState } from 'react';
import Image from 'next/image';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import { Button, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';


function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

const Reviews = () => {
    const reviews = [
        { id: 1, dp: '/reviewpic.png', name: 'Jenny Wilson', rating: 4, like: 2, dislike: 0, review: 'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks.Not a nice course not it should be stopped coming in the market .' },
        { id: 2, dp: '/reviewpic.png', name: 'Jenny Wilson', rating: 2, like: 2, dislike: 0, review: 'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks.Not a nice course not it should be stopped coming in the market .' },
        { id: 3, dp: '/reviewpic.png', name: 'Jenny Wilson', rating: 5, like: 2, dislike: 0, review: 'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks.Not a nice course not it should be stopped coming in the market .' },
        { id: 4, dp: '/reviewpic.png', name: 'Jenny Wilson', rating: 1, like: 2, dislike: 0, review: 'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks.' },
        { id: 5, dp: '/reviewpic.png', name: 'Jenny Wilson', rating: 3, like: 2, dislike: 0, review: 'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks.Not a nice course not it should be stopped coming in the market .' },
        { id: 6, dp: '/reviewpic.png', name: 'Jenny Wilson', rating: 4, like: 2, dislike: 0, review: 'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks.' },
    ]
    const [progress, setProgress] = useState(10);
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);
    const [opendialog, setOpendialog] = useState(false);
    const [openreport, setOpenreport] = useState(false);
    const [value, setValue] = useState(0);
    const [hover, setHover] = useState(-1);


    return (
        <div className='flex flex-col gap-10 w-[100%] px-10 '>
            <h1 className='text-[28px] text-[rgb(33,33,33)] font-semibold font-poppins leading-normal'>Ratings & Reviews</h1>
            <div className='pl-8 flex justify-between'>
                <div className='flex gap-14 items-center'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-2 justify-center'>
                            <span className='text-[35px] text-[#212121] font-semibold leading-[52px]'>4.4</span>
                            <Image src={'/Star.png'} alt='star' width={'25'} height={'25'} />
                        </div>
                        <span className='w-[110px] text-[#878792] text-[14px] font-semibold leading-[24px] text-center'>2,078 Ratings & 270 Reviews</span>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex gap-2'>
                            <div className='flex items-center gap-1'>
                                <span className='text-[14px] text-[#212121] font-poppins font-semibold leading-[24px]'>5</span>
                                <Image src={'/Star.png'} alt='star' width={'12'} height={'12'} />
                            </div>
                            <div className='w-[310px] pt-1'>
                                <LinearProgressWithLabel value={progress} sx={{ borderRadius: '40px' }} color='success' />
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex items-center gap-1'>
                                <span className='text-[14px] text-[#212121] font-poppins font-semibold leading-[24px]'>4</span>
                                <Image src={'/Star.png'} alt='star' width={'12'} height={'12'} />
                            </div>
                            <div className='w-[310px]  pt-1'>
                                <LinearProgressWithLabel value={progress} sx={{ borderRadius: '40px' }} color='success' />
                            </div>
                        </div>
                        <div className='flex gap-2 '>
                            <div className='flex items-center gap-1'>
                                <span className='text-[14px] text-[#212121] font-poppins font-semibold leading-[24px]'>3</span>
                                <Image src={'/Star.png'} alt='star' width={'12'} height={'12'} />
                            </div>
                            <div className='w-[310px]  pt-1'>
                                <LinearProgressWithLabel value={progress} sx={{ borderRadius: '40px' }} color='success' />
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex items-center gap-1'>
                                <span className='text-[14px] text-[#212121] font-poppins font-semibold leading-[24px]'>2</span>
                                <Image src={'/Star.png'} alt='star' width={'12'} height={'12'} />
                            </div>
                            <div className='w-[310px]  pt-1 '>
                                <LinearProgressWithLabel value={progress} sx={{ borderRadius: '40px', color: '#FF6161' }} />
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex items-center gap-1'>
                                <span className='text-[14px] text-[#212121] font-poppins font-semibold leading-[24px]'>1</span>
                                <Image src={'/Star.png'} alt='star' width={'12'} height={'12'} />
                            </div>
                            <div className='w-[310px]  pt-1 '>
                                <LinearProgressWithLabel value={progress} variant='buffer' sx={{ borderRadius: '40px' }} color='error' />
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={() => setOpendialog(true)}>
                    <Button variant='contained' type='none' sx={{ padding: '10px 25px', textTransform: 'capitalize', fontSize: '16px',backgroundColor:"#00693B","&:hover":{backgroundColor:"#00693B"} }} >Post Review</Button>
                </div>
            </div>
            {reviews.map((value, i) => (
                <div className='flex justify-between'>
                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-3 items-center'>
                                <Avatar src={value.dp} alt='dp' sx={{ width: '56px', height: '56px' }}>G</Avatar>
                                <div className='flex flex-col '>
                                    <span className='text-[16px] text-[#18191F] font-poppins font-bold leading-[28px]'>{value.name}</span>
                                    <Rating readOnly value={value.rating}  />
                                </div>
                            </div>
                            <div className='flex gap-3 pl-20'>
                                <div onClick={() => { setLike(!like); setDislike(false) }} className='flex gap-1 items-center cursor-pointer'>{!like ? <ThumbUpOutlinedIcon /> : <ThumbUpIcon color='primary' />}
                                    <span className='text-[16px]'>{value.like}</span>
                                </div>
                                <div onClick={() => { setDislike(!dislike); setLike(false) }} className='flex gap-1 items-center cursor-pointer '>{!dislike ? <ThumbDownOutlinedIcon /> : <ThumbDownIcon color='primary' />}
                                    <span className='text-[16px] mb-[6px]'>{value.dislike}</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-[16px] text-[#18191F] font-[400] font-poppins leading-[32px] w-[530px]'>
                            <p>{value.review}</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenreport(true)}>
                        <Button variant='text' sx={{ textTransform: 'capitalize', cursor: 'pointer' }} disableRipple>report</Button>
                    </div>
                </div>
            ))}
            <div>
                <Dialog open={opendialog} PaperProps={{ sx: { width: '989px', height: '480px' } }} >
                    <div className='flex justify-between items-center'>
                        <DialogTitle sx={{ fontSize: '30px', color: "#000000", fontWeight: 600, lineHeight: '32px' }}>Post a Review</DialogTitle>
                        <span onClick={() => setOpendialog(false)} className='cursor-pointer p-3'><CloseIcon sx={{ width: '30px', height: '30px' }} /></span>
                    </div>
                    <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <DialogContentText sx={{ display: 'flex', flexDirection: "column", gap: '1rem' }}>
                            <span>On a scale of 1 to 5 how will you rate us ?</span>
                            <Rating
                                name="hover-feedback"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                        </DialogContentText>
                        <div className='w-full'>
                            <span className='text-[18px] font-semibold'>Please write a review</span>
                            <div className='bg-[#F6F6F6] p-3 h-[179px]'>
                                <textarea type="text" style={{ boder: "none", outline: 'none', backgroundColor: '#F6F6F6 ' }} placeholder='Your review matter to us!' className='w-[520px] h-[170px]' />
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions sx={{ paddingRight: "1.5rem" }}>
                        <Button variant='contained' type='none' sx={{ textTransform: 'capitalize', padding: '8px 25px' }} onClick={() => setOpendialog(false)}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div>
                <Dialog fullWidth
                    open={openreport}>
                    <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid #F0EFF2" }}>
                        Your report matter to us!
                        <div>
                            <CloseIcon onClick={() => { setOpenreport(false) }} sx={{ cursor: 'pointer' }} />
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description" sx={{ display: 'flex', flexDirection: "column", gap: "12px", marginTop: "5px" }}>
                            <TextField label="Type your report here..." rows={10} onChange={(e) => { }}></TextField>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ padding: '10px 20px' }}>
                        <Button variant='contained' type='none' sx={{ textTransform: "capitalize", width: '100%' }} onClick={() => { setOpenreport(false) }}>Report </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default Reviews