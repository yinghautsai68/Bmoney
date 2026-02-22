import React from 'react'

const RecordDetailsItem = ({ className, title, value }) => {


    return (
        <div className='flex flex-row justify-between items-center w-full h-full px-5 py-8'>
            <div className='text-sm text-[#434343]'>{title}</div>
            <div className={`${className} text-xs md:text-md font-bold`}>{value}</div>
        </div>
    )
}

export default RecordDetailsItem