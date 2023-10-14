import { IconButton, Tooltip } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useRef, useState } from 'react'
import storage from '@/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { v4 } from 'uuid';

const UploadDialog = ({ dialogType, setDialogType, videoData, setVideoData, i }) => {
    const type = dialogType === "practiceQuestions" ? "Questions" : dialogType === "notes" ? "Notes" : "Assignment"
    const [mode, setMode] = useState("new")
    const fileRef = useRef()
    const [uploadData, setUploadData] = useState([])
    const handleDragOver = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
    console.log(videoData[i])
    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const files = e.dataTransfer.files
        console.log(files)
        if (files.length > 0) {
            const file = files[0]
            const fileid = v4()
            uploadData.push({ title: file.name, progress: 0, fileid })
            setUploadData([...uploadData])
            setMode("")
            const storageRef = ref(storage, `video${type}/${fileid}`)
            const uploadTask = uploadBytesResumable(storageRef, file)
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    uploadData[uploadData.length - 1].progress = progress
                },
                (error) => {
                    console.log(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        videoData[i][dialogType].push({ title: file.name, size: uploadTask.snapshot.totalBytes, url: downloadURL })
                        setVideoData([...videoData])
                        setUploadData([])
                    });
                }
            );
        }
    }
    const handleChange = (e) => {
        const file = e.target.files[0]
        const fileid = v4()
        setMode("")
        uploadData.push({ title: file.name, progress: 0, fileid })
        setUploadData([...uploadData])
        const storageRef = ref(storage, `video${type}/${fileid}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploadData[uploadData.length - 1].progress = progress
            },
            (error) => {
                console.log(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    videoData[i][dialogType].push({ title: file.name, size: uploadTask.snapshot.totalBytes, url: downloadURL })
                    setVideoData([...videoData])
                    setUploadData([])
                });
            }
        );
    }

    const handleDelete = (index) => () => {
        videoData[i][dialogType].splice(index, 1)
        setVideoData([...videoData])
    }

    return (
        <div className='fixed top-0 left-0 bottom-0 w-full h-full bg-black/70 flex items-center justify-center shadow-lg z-10 backdrop-blur-[0px]'>
            <div className='w-[550px] bg-white px-4 py-3 flex flex-col rounded-lg items-center gap-5'>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-2 w-full'>
                        <div className='py-1.5 px-2 rounded-lg bg-blue-600 text-white cursor-pointer' onClick={() => setMode("new")}>New Upload</div>
                        <div className='py-1.5 px-2 rounded-lg border border-blue-600 text-blue-600 cursor-pointer hover:bg-blue-50' onClick={() => setMode("")}>Uploaded {type}</div>
                    </div>
                    <div>
                        <Tooltip title='Close'>
                            <IconButton color='error' onClick={() => setDialogType("")}>
                                <CloseIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                {mode === "new" && <div className='w-full border border-dashed border-blue-500 h-[200px] flex flex-col text-center justify-center mb-2 items-center text-[#b0b0b0] rounded-md cursor-pointer' onClick={() => fileRef.current.click()} onDragOver={handleDragOver} onDrop={handleDrop} >
                    <input type="file" name="" id="" className='hidden' ref={fileRef} onChange={handleChange} />
                    <UploadFileIcon sx={{ width: "50px", height: "50px" }} />
                    Click to browse or <br /> drag and drop your files here.
                </div>}
                {mode !== "new" && <div className='flex w-full flex-col gap-2'>
                    {/* when a file is uploading */}
                    {uploadData.length > 0 && uploadData.map((value, index) => (<div className='flex w-full items-center gap-2 p-1 border-b border-slate-400/50'>
                        <InsertDriveFileIcon />
                        <div className='flex flex-col gap-1 w-full'>
                            <div className='flex w-full justify-between'>
                                <div className='text-sm w-[320px] truncate font-medium'>{value.title}</div>
                                <div className='text-sm text-[#b0b0b0]'>{Math.floor(value.progress)}%</div>
                            </div>
                            <div className='relative w-full h-2 rounded-full bg-[#b0b0b0]'>
                                <div style={{ width: `${value.progress}%` }} className='h-2 rounded-full bg-blue-600'></div>
                            </div>
                        </div>
                    </div>))}
                    {videoData[i][dialogType].length > 0 && videoData[i][dialogType].map((item, index) => (
                        <div className='flex w-full items-center justify-between gap-2 p-1 border-b border-slate-400/50'>
                            <div className='flex gap-2 items-center'>
                                <InsertDriveFileIcon />
                                <div className='flex flex-col gap-1'>
                                    <div className='text-sm w-[320px] truncate font-medium'>{item.title}</div>
                                    <div className='text-xs text-slate-500'>{item.size}</div>
                                </div>
                            </div>
                            <div>
                                <Tooltip title='Delete'>
                                    <IconButton color='error' onClick={handleDelete(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title='Preview'>
                                    <IconButton color='primary' onClick={()=> window.open(item.url)}>
                                        <PlagiarismIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                    ))}
                    {(videoData[i][dialogType].length === 0 && uploadData.length === 0)  && <div className='flex w-full items-center justify-center gap-2 p-1 border-b border-slate-400/50'>
                        <div className='text-sm text-slate-500'>No {type} Uploaded</div>
                    </div>}
                </div>}
            </div>
        </div>
    )
}

export default UploadDialog