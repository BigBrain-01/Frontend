import React, { useState } from 'react'
import { MenuItem, TextField } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const ContactUs = () => {
    const [value, setValue] = useState()
    return (
        <div className='flex bg-[#FAF8F4] justify-center'>
            <div className='flex bg-white rounded-[40px] w-full m-5 mb-0 h-[90vh] pl-10' style={{boxShadow:'0px 141px 200px -80px rgba(25, 58, 75, 0.30)'}}>
                {/* left */}
                <div className='flex-1 flex justify-center'>
                    <div className='flex flex-col justify-center gap-2.5 w-[75%]'>
                        <h1 className='font-bold text-4xl'>Get in <span className='text-[#00C26D]'>Touch</span></h1>
                        <p className='text-xs font-semibold'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                        <form className='flex flex-col gap-4' onSubmit={() => { }}>
                            <TextField InputProps={{ style: { fontSize: '14px' } }} InputLabelProps={{ style: { fontSize: '14px' } }} size='small' type='text' label='Name' />
                            <TextField InputProps={{ style: { fontSize: '14px' } }} InputLabelProps={{ style: { fontSize: '14px' } }} size='small' type='text' label='Email' />
                            <TextField InputProps={{ style: { fontSize: '14px' } }} InputLabelProps={{ style: { fontSize: '14px' } }} size='small' type='text' label='Phone Number' />
                            <TextField InputProps={{ style: { fontSize: '14px' } }} InputLabelProps={{ style: { fontSize: '14px' } }} size='small' type='text' label='Message' />
                            <TextField InputProps={{ style: { fontSize: '14px' } }} InputLabelProps={{ style: { fontSize: '14px' } }} select size='small' label='Select on option' value={value}>
                                <MenuItem sx={{ fontSize: '14px' }} onClick={(e)=>setValue(e.target.value)} value="demo">Demo</MenuItem>
                                <MenuItem sx={{ fontSize: '14px' }} onClick={(e)=>setValue(e.target.value)} value="demo">Demo</MenuItem>
                            </TextField >
                            <button type='submit' className='bg-[#00C26D] text-white w-full text-center py-2'>SEND</button>
                            <div className='flex gap-5'>
                                <div className='flex gap-2.5 items-center'>
                                    <Image src='/phone.svg' alt='' width={25} height={25} />
                                    <div className='flex flex-col text-xs font-semibold'>
                                        <p>PHONE</p>
                                        <Link className='text-[#00C26D] font-medium' href={'tel:9260956579'}>9206956579</Link>
                                    </div>
                                </div>
                                <div className='flex gap-2.5 items-center'>
                                    <Image src='/fax.svg' alt='' width={25} height={25} />
                                    <div className='flex flex-col text-xs font-semibold'>
                                        <p>FAX</p>
                                        <Link className='text-[#00C26D] font-medium' href={'tel:9260956579'}>9206956579</Link>
                                    </div>
                                </div>
                                <div className='flex gap-2.5 items-center'>
                                    <Image src='/email.svg' alt='' width={25} height={25} />
                                    <div className='flex flex-col text-xs font-semibold'>
                                        <p>EMAIL</p>
                                        <Link className='text-[#00C26D] font-medium' href={'mailto:info@studytitans.com'}>info@studytitans.com</Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* right */}
                <div className='flex flex-1 relative items-center'>
                    <div className='w-[70%] h-[75vh] bg-[url("/map.svg")] bg-cover bg-right bg-no-repeat z-10'></div>
                    <div className='absolute h-[90vh] w-[50%] top-0 right-0 bg-[#031082] rounded-tr-[20px] rounded-br-[20px]'></div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs