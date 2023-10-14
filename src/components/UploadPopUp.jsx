import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconButton, Tooltip } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const UploadPopUp = ({ uploadingData }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className='w-[350px] bg-[#121212] fixed bottom-0 z-20 right-0 rounded-[8px_8px_0px_0px] px-2 flex flex-col text-white'>
            <div className='flex justify-between items-center '>
                {!((uploadingData[0]?.progress === 100 && uploadingData[1]?.progress === 100)||(uploadingData.length == 1 && uploadingData[0].progress === 100)) && <div>Uploading {uploadingData.length} {uploadingData.length == 1 ? "file" : "files"}...</div>}
                {((uploadingData[0]?.progress === 100 && uploadingData[1]?.progress === 100)||(uploadingData.length == 1 && uploadingData[0].progress === 100)) && <div>{uploadingData.length} {uploadingData.length == 1 ? "file" : "files"} uploaded</div>}
                <div>
                    <Tooltip title=''>
                        <IconButton color='inherit' onClick={() => setOpen(!open)}>
                            {!open ? <KeyboardArrowUpIcon /> :
                                <KeyboardArrowDown />}
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <div className={`w-full ${!open ? "h-0" : uploadingData.length === 1 ? "h-12":"h-24"} transition-[height] flex flex-col gap-3 duration-500 ease-linear pr-2`}>
                {uploadingData.map((item, index) => (
                    <div className='flex gap-2 w-full items-center' key={index}>
                        <InsertDriveFileIcon />
                        <div className='flex flex-col w-full gap-1'>
                            <div className='flex w-full justify-between'>
                                <div className='w-[250px] truncate text-sm'>{item.name}</div>
                                <div className='text-[#b0b0b0] text-[12px]'>{Math.floor(item.progress)}%</div>
                            </div>
                            <div className='w-full h-1 rounded-full bg-[#b0b0b0] relative'>
                                <div style={{width: `${item.progress}%`}} className={`h-1 bg-[#f5f5f5] absolute rounded-full`}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UploadPopUp