'use client'
import { Slider, TextField } from '@mui/material'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const VideoPlayer = ({ src }) => {
  const playerRef = useRef()
  const [player, setPlayer] = useState({
    playing: false,
    prevVolume:100,
    volume: 100,
    muted: false,
    playbackRate: 1.0,
    played: 0,
    loaded: 0,
    duration: 0,
    playback: false,
    loop: false,
    captions: false
  })
  const handlePlay = () => {
    setPlayer({
      ...player,
      playing: !player.playing
    })
    if (!player.playing)
      playerRef.current.play()
    else
      playerRef.current.pause()
  }
  const handleMute = () => {
    setPlayer({
      ...player,
      muted: !player.muted,
      volume: player.muted?player.prevVolume:0
    })
    playerRef.current.muted = !player.muted
  }
  
  const handleVolume = (e) => {
    setPlayer({
      ...player,
      volume: e.target.value,
      prevVolume:e.target.value,
      muted:!(e.target.value>0)
    })
    console.log(playerRef)
    playerRef.current.muted = !(e.target.value>0)
    playerRef.current.volume = e.target.value / 100

  }

  const handleSubs = () =>{
    setPlayer({
      ...player,
      captions:!player.captions
    })
  }

  return (
    <div className="flex w-full justify-end p-5">
      <div className="w-[50%] max-w-[1000px] relative items-center flex flex-col">
        <video src={src} ref={playerRef} controls={false} width={'100%'} height={'100%'} className='-z-10 aspect-video'>
        </video>
        <div className='flex items-end justify-between w-[100%] h-[50px] z-100 absolute bottom-0 bg-gradient-to-t from-black/20'>
          <div className='flex gap-2 items-center'>
            <Image
              src={player.playing ? "https://img.icons8.com/ios-glyphs/30/ffffff/pause--v1.png" : "https://img.icons8.com/ios-glyphs/30/play--v1.png"}
              width={30}
              height={30}
              onClick={handlePlay}
              className = "cursor-pointer"
            />
            <Image
              src="https://img.icons8.com/ios-filled/50/end--v1.png"
              width={30}
              height={30}
              className = "cursor-pointer"
            />
            <div className='flex gap-4'>
              <Image
                src={player.muted?"https://img.icons8.com/ios-glyphs/30/mute--v1.png":player.volume>=60?"https://img.icons8.com/ios-glyphs/30/high-volume.png":player.volume>=30?"https://img.icons8.com/ios-glyphs/30/medium-volume.png":"https://img.icons8.com/ios-glyphs/30/low-volume.png"}
                width={30}
                height={30}
                onClick={handleMute}
                className = "cursor-pointer"
              />
              <Slider sx={{ width: '100px', color: "black" }} value={player.volume} min={0} max={100} defaultValue={100} onChange={handleVolume} />
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Image
              src={player.captions?"https://img.icons8.com/external-zen-filled-royyan-wijaya/24/external-so-subtitle-accessibility-zen-filled-royyan-wijaya.png":"https://img.icons8.com/external-zen-filled-royyan-wijaya/24/external-so-subtitle-off-accessibility-zen-filled-royyan-wijaya.png"}
              width={30}
              height={30}
              onClick={handleSubs}
              className = "cursor-pointer"
            />
            <Image
              src="https://img.icons8.com/ios-filled/30/settings.png"
              width={30}
              height={30}
              className = "cursor-pointer"
            />
            <div className="w-[35px] relative h-[25px] border-4 border-black cursor-pointer" onClick={()=>playerRef.current.requestPictureInPicture()}>
              <div className="w-[11px] h-[9px] bg-black absolute bottom-0.5 right-0.5"></div>
            </div>
            <div className="w-[30px] h-[20px] border-4 border-black cursor-pointer"></div>
            <Image
              src="https://img.icons8.com/ios-glyphs/30/full-screen--v1.png"
              width={30}
              height={30}
              className = "cursor-pointer"
              onClick={()=>playerRef.current.requestFullscreen()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
