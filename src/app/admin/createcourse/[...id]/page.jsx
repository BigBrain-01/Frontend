import React from 'react'
import AddVideo from './AddVideo'

const page = ({ id }) => {
    return (
        <div className='bg-[#f5f5f5] w-full'>
            <AddVideo id={id} />
        </div>
    )
}

export default page