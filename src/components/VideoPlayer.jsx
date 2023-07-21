"use client";
import { PauseCircleFilledRounded, PlayCircleFilledRounded, PlayCircleOutline } from "@mui/icons-material";
import { Slider, Switch } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const VideoPlayer = ({ src }) => {
  const playerRef = useRef();
  const [volumeHover, setVolumeHover] = useState(false);
  const [controlHover,setControlHover] = useState(false)
  const [played,setPlayed] = useState(0)
  const [player, setPlayer] = useState({
    playing: false,
    prevVolume: 100,
    volume: 100,
    muted: false,
    playbackRate: 1.0,
    currentDuration: "00:00",
    loaded: 0,
    duration: "00:00",
    totalDuration: 0,
    playback: false,
    loop: false,
    captions: false,
    fullScreen: false,
  });

  useEffect(() => {
    const duration = playerRef.current.duration
    var minutes = Math.floor(duration / 60)
    var seconds = Math.floor(duration % 60)
    seconds = seconds < 10 ? "0" + seconds : seconds
    setPlayer({
      ...player,
      totalDuration: playerRef.current.duration,
      duration: minutes + ":" + seconds
    })
  }, [src]);
  const handlePlay = () => {
    setPlayer({
      ...player,
      playing: !player.playing,
    });
    if (!player.playing) playerRef.current.play();
    else playerRef.current.pause();
  };
  const handleMute = () => {
    setPlayer({
      ...player,
      muted: !player.muted,
      volume: player.muted ? player.prevVolume : 0,
    });
    playerRef.current.muted = !player.muted;
  };

  const handleVolume = (e) => {
    setPlayer({
      ...player,
      volume: e.target.value,
      muted: !(e.target.value > 0),
    });
    playerRef.current.muted = !(e.target.value > 0);
    playerRef.current.volume = e.target.value / 100;
  };

  const handleDuration = (e) => {
    const duration = playerRef.current.currentTime
    const playedFrac = (duration / player.totalDuration) * 100
    setPlayed(playedFrac)
    var minutes = Math.floor(duration / 60)
    var seconds = Math.floor(duration % 60)
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds
    setPlayer({
      ...player,
      currentDuration: minutes + ":" + seconds,
    })
  }

  const handleSubs = () => {
    setPlayer({
      ...player,
      captions: !player.captions,
    });
  };

  const handleFullScreen = () => {
    setPlayer({ ...player, fullScreen: !player.fullScreen });
    if (!player.fullScreen) playerRef.current.requestFullscreen();
  };

  return (
    <div className="flex w-full justify-end p-5 " >
      <div className={`w-full items-center flex justify-end`}>
        <div className="w-[50%] relative" onMouseEnter={()=>setControlHover(true)} onMouseLeave={()=>setControlHover(false)}>
          <video
            src={src}
            ref={playerRef}
            controls={false}
            width={"100%"}
            height={"100%"}
            className="-z-10 cursor-pointer"
            onLoadedData={(e) => console.log(e)}
            onClick={handlePlay}
            onTimeUpdate={handleDuration}
            onPause={() => setPlayer({ ...player, playing: false })}
            onPlay={() => {
              setPlayer({ ...player, playing: true });
            }}
          ></video>
          {controlHover && <div className="flex flex-col px-4 w-[100%] gap-1 h-max z-100 absolute bottom-0 pb-1 left-0 right-0 bg-gradient-to-t text-white text-sm from-gray-700/80">
            <div className="w-full bg-white/40 cursor-pointer flex relative h-1">
              <div style={{width:`${played}%`}} className={`h-1 z-2 absolute bg-black`}></div>
            </div>
            <div className="flex items-center justify-between ">
              <div
                className="flex gap-2 items-center"
                onMouseLeave={() => setVolumeHover(false)}
              >
                <Image
                  src={
                    player.playing
                      ? "https://img.icons8.com/ios-glyphs/30/ffffff/pause--v1.png"
                      : "https://img.icons8.com/ios-glyphs/30/ffffff/play--v1.png"
                  }
                  width={20}
                  height={20}
                  onClick={handlePlay}
                  className="cursor-pointer"
                  alt=""
                />
                <Image
                  src="https://img.icons8.com/ios-filled/50/ffffff/end--v1.png"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  alt=""
                />
                <div
                  className="flex gap-4 items-center"
                  onMouseEnter={() => setVolumeHover(true)}
                >
                  <Image
                    src={
                      player.muted
                        ? "https://img.icons8.com/ios-glyphs/30/ffffff/mute--v1.png"
                        : player.volume >= 60
                          ? "https://img.icons8.com/ios-glyphs/30/ffffff/high-volume.png"
                          : player.volume >= 30
                            ? "https://img.icons8.com/ios-glyphs/30/ffffff/medium-volume.png"
                            : "https://img.icons8.com/ios-glyphs/30/ffffff/low-volume.png"
                    }
                    width={20}
                    height={20}
                    onClick={handleMute}
                    className="cursor-pointer"
                    alt=""
                  />
                  {volumeHover && (
                    <Slider
                      sx={{
                        width: "50px",
                        background: "transparent",
                        color: "white",
                        padding: "0px",
                        '& .MuiSlider-thumb': {
                          '&:hover, &.Mui-focusVisible': {
                            boxShadow: "none"
                          },
                          '&.Mui-active': {
                            boxShadow: "none"
                          }
                        }
                      }}
                      className=" transition-all duration-300 ease-in-out"
                      size="small"
                      value={player.volume}
                      min={0}
                      max={100}
                      defaultValue={100}
                      onChange={handleVolume}
                      onChangeCommitted={(e, v) => {
                        setPlayer({
                          ...player,
                          prevVolume: v > 0 ? v : player.prevVolume,
                          volume:v
                        });
                      }}
                      alt=""
                    />
                  )}
                </div>
                <div className="fle items-center">{player.currentDuration}/{player.duration}</div>
              </div>
              <div className="flex items-center gap-4">
                <Switch color="default" size="small" icon={<PauseCircleFilledRounded sx={{ width: "18px", height: "18px" }} />} checkedIcon={<PlayCircleFilledRounded sx={{ width: "18px", height: "18px" }} />} sx={{
                  "& .MuiSwitch-switchBase": {
                    '& + .MuiSwitch-track': {
                      padding: 0,
                      backgroundColor: 'gray',
                    },
                  },
                  "& .MuiSwitch-thumb": {
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: "none"
                    },
                    '&.Mui-active': {
                      boxShadow: "none"
                    }
                  }
                }} />
                <Image
                  src="https://img.icons8.com/ios-filled/30/ffffff/settings.png"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  alt=""
                />
                <div
                  className="w-[30px] relative h-[23px] border-4 border-white cursor-pointer"
                  onClick={() => playerRef.current.requestPictureInPicture()}
                >
                  <div className="w-[9px] h-[7px] bg-white absolute bottom-0.5 right-0.5"></div>
                </div>
                <div className="w-[30px] h-[20px] border-4 border-white cursor-pointer"></div>
                <Image
                  src="https://img.icons8.com/ios-glyphs/30/ffffff/full-screen--v1.png"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  onClick={handleFullScreen}
                  alt=""
                />
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div >
  );
};

export default VideoPlayer;
