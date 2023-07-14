import moment from 'moment'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex flex-col px-32 py-[2rem] font-poppins gap-8'>
      <div className='flex justify-between '>
        <div>
          <h1 className='text-[22px] font-bold leading-normal text-[#00261C]'>Welcome Darpan Bahadur</h1>
          <span className='text-[14px] text-[#707EAE] leading-normal font-medium '>{moment().format("h:mm a DD MMM YYYY")}</span>
        </div>
        <div className='flex gap-5 items-center'>
          <span className='w-max'>Darpan Bahadur</span>
          <Image src={"/profile.png"} width={'48'} height={'48'} className='rounded-full' />
        </div>
      </div>
      <div className='flex items-center justify-center '>
        <hr className='w-full h-[6px] bg-[#D9D9D9] ' />
      </div>
      <div className='flex flex-col gap-5 w-full'>
        <h1 className='text-[#031082] text-[26px] font-[500] leading-[45px]'>Terms And Instructions</h1>
        <div className='flex px-6'>
          <ol className='flex flex-col text-[#000000] text-[18px] font-[500] w-full' style={{ listStyle: "number" }} >
            <li>It is NOT advisable to attempt coding problems from a mobile phone. Use a laptop instead.</li>
            <li>Please ensure to load the test in the latest version of Google Chrome browser (above version 60) or latest version of Firefox. </li>
            <li>Please ensure third party cookies are enabled. </li>
            <li>The system should have uninterrupted internet connectivity with an download and upload speed must be atleast 2 Mbps. </li>
            <li>Please ensure that your system clock is set to (GMT +5:30) Mumbai, Kolkata, Chennai, New Delhi timezone.</li>
            <li>No tab switches are allowed during the test.It may result in premature submission of the test.</li>
            <li>Any notifications or Pop-ups during the test will be counted as tab switches and may result in pre-mature closure of your test. Please ensure that it's turned off.</li>
            <li>Some Anti-virus software will prevent you from login and from taking the test. In such cases disable the anti-virus and try.</li>
            <li>
              Instructions to Enable icrophone & Camera:
              <ul className='underline'>
                <li>Chrome</li>
                <li>FireFox</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className='flex justify-end gap-2 mt-[6rem] mr-10'>
          <button className='bg-[#83FFC969] rounded-md text-[#00693B] py-2 px-8'>Cancel</button>
          <button className='bg-[#00693B] rounded-md text-white py-2 px-4'>Agree and Proceed</button>
        </div>
      </div>
    </div>
  )
}

export default page