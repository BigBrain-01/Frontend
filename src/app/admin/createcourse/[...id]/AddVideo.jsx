"use client"
import React, { useRef, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddIcon from '@mui/icons-material/Add';
import { Button, IconButton, Tooltip } from '@mui/material';
import UploadDialog from '@/components/UploadDialog';
import UploadPopUp from '@/components/UploadPopUp';
import storage from '@/firebase.js'
import { v4 } from 'uuid'
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';

const AddVideo = ({ id }) => {
    const [videoData, setVideoData] = useState([
        { id: 1, title: "Introduction to React 1", video: "/video1.mp4", thumbnail: "/image3.png", notes: [], assignment: [], practiceQuestions: [], size: "90mb" },
        { id: 2, title: "Introduction to React 2", video: "/video1.mp4", thumbnail: "/image3.png", notes: [], assignment: [], practiceQuestions: [], size: "190mb" },
        { id: 3, title: "Introduction to React 3", video: "/video1.mp4", thumbnail: "/image3.png", notes: [], assignment: [], practiceQuestions: [], size: "78mb" },
        { id: 4, title: "Introduction to React 4", video: "/video1.mp4", thumbnail: "/image3.png", notes: [], assignment: [], practiceQuestions: [], size: "67mb" },
        { id: 5, title: "Introduction to React 5", video: "/video1.mp4", thumbnail: "/image3.png", notes: [], assignment: [], practiceQuestions: [], size: "128mb" },
    ])
    const [editing, setEditing] = useState(-1)
    const [title, setTitle] = useState("")
    const [dialogType, setDialogType] = useState("")
    const [uploadingData, setUploadingData] = useState([])
    const [formData, setFormData] = useState({
        title: "",
        videoURL: "",
        thumbnail: ""
    })
    const imageRef = useRef()
    const videoRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(0)
    const chooseVideo = () => {
        videoRef.current.click()
    }
    const videoChange = (e) => {
        console.log(e.target.files[0])
        const fileId = v4()
        const refName = ('video/'+ fileId + '.mp4').replaceAll(' ', '')
        uploadingData.push({id: fileId, type: "video", progress: 0,name: e.target.files[0].name})
        setUploadingData([...uploadingData])
        const storageRef = ref(storage, refName)
        //upload while tracking progress
        const uploadTask = uploadBytesResumable(storageRef, e.target.files[0])
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadingData(uploadingData.map((item) => {
                    if(item.id === fileId){
                        item.progress = progress
                    }
                    return item
                }))
            },
            (error) => {
                console.log(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setFormData({
                        ...formData,
                        videoURL: downloadURL
                    })
                });
            }
        );
        console.log("uploaded")
    }
    const chooseImage = () => {
        imageRef.current.click()
    }
    const imageChange = (e) => {
        console.log(e.target.files[0])
        const fileId = v4()
        const refName = ('videoImage/'+ fileId + '.png').replaceAll(' ', '')
        uploadingData.push({id: fileId, type: "image", progress: 0,name: e.target.files[0].name})
        setUploadingData([...uploadingData])
        const storageRef = ref(storage, refName)
        //upload while tracking progress
        const uploadTask = uploadBytesResumable(storageRef, e.target.files[0])
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadingData(uploadingData.map((item) => {
                    if(item.id === fileId){
                        item.progress = progress
                    }
                    return item
                }))
            },
            (error) => {
                console.log(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setFormData({
                        ...formData,
                        thumbnail: downloadURL
                    })
                });
            }
        );
        console.log("uploaded")
    }

    const handleDelete = (i) => {
        videoData.splice(i, 1)
        setVideoData([...videoData])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        if (!formData.title || !formData.videoURL || !formData.thumbnail) {
            alert("Please fill all the required fields")
            return
        }
        setVideoData([...videoData, formData])
        setFormData({title: "", videoURL: "", thumbnail: ""})
        setUploadingData([])
    }

    return (
        <div className='flex flex-col w-full gap-10 px-8 py-2'>
            {dialogType !== "" &&
                <UploadDialog dialogType={dialogType} setDialogType={setDialogType} videoData={videoData} setVideoData={setVideoData} i={currentIndex} />
            }
            {uploadingData.length>0 && <UploadPopUp uploadingData = {uploadingData} />}
            <div className='flex flex-col gap-2 w-full'>
                <h1 className='text-xl text-bold'>Uploaded Videos</h1>
                <div className='flex flex-col gap-5 '>
                    {videoData.map((value, i) => (
                        <div className='flex gap-2 rounded-md p-3 bg-white shadow-md cursor-pointer'>
                            <div className='h-[80px] relative object-contain'>
                                <img src={value.thumbnail} alt="" className='w-full h-full' />
                                {editing === i && <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center'>
                                    <div className='flex flex-col gap-2'>
                                        <Tooltip title='Change Thumbnail'>
                                            <IconButton color='primary' onClick={chooseImage}>
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                </div>}
                            </div>
                            <div className='flex items-center w-full justify-between'>
                                <div className='flex flex-col'>
                                    {editing !== i && <div className='font-medium'>{value.title}</div>}
                                    {editing == i && <input type="text" className='border w-[350px] border-gray-400 outline-none p-2 rounded-md' value={title} onChange={(e) => setTitle(e.target.value)} />}
                                    <span className='font-medium text-[#a0a0a0]'>{value.size}</span>
                                </div>
                                {editing !== i && <div className='flex gap-3 '>
                                    <Tooltip title='Add Questions'>
                                        <IconButton color='success' onClick={() => {setDialogType("practiceQuestions");setCurrentIndex(i)}}>
                                            <AddIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Add Notes'>
                                        <IconButton color='success' onClick={() => {setDialogType("notes");setCurrentIndex(i)}}>
                                            <NoteAddIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Add Assignment'>
                                        <IconButton color='success' onClick={() => {setDialogType("assignment");setCurrentIndex(i)}}>
                                            <AssignmentIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Edit Title'>
                                        <IconButton color='primary' onClick={() => { setEditing(i); setTitle(videoData[i].title) }}>
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Delete'>
                                        <IconButton color='error' onClick={() => handleDelete(i)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </div>}
                                {editing == i &&
                                    <div className='flex gap-3'>
                                        <Button onClick={() => {
                                            videoData[i].title = title
                                            setVideoData([...videoData])
                                            setEditing(-1)
                                            setTitle("")
                                        }} type='none' variant='contained'>Ok</Button>
                                        <Button type='button' onClick={() => setEditing(-1)} variant='outlined' >Cancel</Button>
                                    </div>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-2 p-2 bg-white w-full'>
                <h1 className='text-xl font-bold '>Add New Video</h1>
                <form onSubmit={handleSubmit} className=" flex flex-col gap-2 w-full">
                    <div className='flex flex-col gap-1 w-full'>
                        <label htmlFor="title">Title <span className='text-red-600'>*</span></label>
                        <input type='text' id='title' value={formData.title} onChange={(e) => setFormData({
                            ...formData,
                            title: e.target.value
                        })} placeholder='Enter video title...' className='border border-gray-400 outline-none p-2 rounded-md' />
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-1 w-[47%] text-base'>
                            <label htmlFor="title">Video <span className='text-red-600'>*</span></label>
                            <input ref={videoRef} onChange={videoChange} type='file' accept='video/*,.mkv' id='title' placeholder='Enter video title...' className='hidden' />
                            <button type='button' onClick={chooseVideo} className='border border-gray-400 outline-none p-2 rounded-md'>Choose Video</button>
                        </div>
                        <div className='flex flex-col gap-1 w-[47%] text-base'>
                            <label htmlFor="title">Thumbnail <span className='text-red-600'>*</span></label>
                            <input ref={imageRef} onChange={imageChange} type='file' accept='image/*' id='title' placeholder='Enter video title...' className='hidden' />
                            <button type='button' onClick={chooseImage} className='border border-gray-400 outline-none p-2 rounded-md'>Choose Image</button>
                        </div>
                    </div>
                    <button type='submit' className='bg-blue-600 w-full text-white items-center py-2 mt-2 rounded-sm'>Add Video</button>
                </form>
            </div>
        </div>
    )
}

export default AddVideo