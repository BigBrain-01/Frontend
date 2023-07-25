import React, { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import { Paper } from '@mui/material'
import Image from 'next/image';

const Featuredvideos = () => {
    const [slideIndex, setSlideindex] = useState(0);
    const [play, setPlay] = useState(false);
    const [playid, setPlayid] = useState(null)
    const data = [
        {
          id: 1,
          img: '/sliderimg.png',
          class: 'Class 10-Demo',
          author: 'Alita Yadav',
        },
        {
          id: 2,
          img: '/sliderimg.png',
          class: 'Class 10-Demo',
          author: 'Alita Yadav',
        },
        {
          id: 3,
          img: '/sliderimg.png',
          class: 'Class 10-Demo',
          author: 'Alita Yadav',
        },
        {
          id: 4,
          img: '/sliderimg.png',
          class: 'Class 10-Demo',
          author: 'Alita Yadav',
        },
        {
          id: 5,
          img: '/sliderimg.png',
          class: 'Class 10-Demo',
          author: 'Alita Yadav',
        },
        {
          id: 6,
          img: '/sliderimg.png',
          class: 'Class 10-Demo',
          author: 'Alita Yadav',
        },
      ]
      const handleSlide = (direction) => {
        if (direction === 'left') {
          setSlideindex(slideIndex > 0 ? slideIndex - 1 : slideIndex)
          console.log('clickedR')
        } else {
          setSlideindex(slideIndex < 1 ? slideIndex + 1 : slideIndex)
          console.log('clickedL')
        }
      }
  return (
    <div className="px-32 flex flex-col gap-10 relative">
        <div className="flex flex-col">
          <span className="text-[20px] text-[#0015C8] font-bold font-inter leading-normal">
            Featured Videos
          </span>
          <span className="text-4xl font-inter text-[#18191F] font-[800]">
            Community Programs
          </span>
        </div>
        <div className="w-full overflow-hidden">
          <div
            className="flex whitespace-nowrap gap-4 items-center transition duration-[1000] ease"
            style={{ transform: `translate3d(${-slideIndex * 100}%, 0, 0)` }}
          >
            {data.map((value, i) => (
              <Paper
                elevation={1}
                key={i}
                sx={{
                  display: 'inline-block',
                  gap: '5px',
                  flexDirection: 'column',
                }}
                className={`min-w-[400px] `}
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={value.img}
                    alt=""
                    width={'383'}
                    height={'237'}
                  ></Image>
                </div>
                <div className="flex justify-between px-3">
                  <div className="flex flex-col ">
                    <span className="text-[20px] text-[#000000] font-bold font-inter">
                      {value.class}
                    </span>
                    <span className="text-[14px] text-[#696969] font-medium ">
                      {value.author}
                    </span>
                  </div>
                  <div
                    onClick={() => {
                      setPlay(!play)
                      setPlayid(value.id)
                    }}
                  >
                    {!(play && value.id === playid) ? (
                      <PlayArrowIcon
                        sx={{
                          width: '49px',
                          height: '49px ',
                          cursor: 'pointer',
                          color: '#EE0000',
                        }}
                      />
                    ) : (
                      <PauseIcon
                        color="error"
                        sx={{
                          width: '45px',
                          height: '45px ',
                          cursor: 'pointer',
                        }}
                      />
                    )}
                  </div>
                </div>
              </Paper>
            ))}
          </div>
        </div>
        <Paper
          elevation={3}
          onClick={() => {
            handleSlide('left')
          }}
          className="w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center absolute top-1/2 left-28  z-20 cursor-pointer"
        >
          <KeyboardArrowLeftRoundedIcon
            color={slideIndex == 0 ? 'disabled' : ''}
          />
        </Paper>
        <Paper
          elevation={3}
          onClick={() => {
            handleSlide('right')
          }}
          className="w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center absolute top-1/2 right-[8.3rem] z-20 cursor-pointer"
        >
          <ChevronRightRoundedIcon color={slideIndex > 0 ? 'disabled' : ''} />
        </Paper>
      </div>
  )
}

export default Featuredvideos