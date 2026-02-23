import React from 'react'
import IconDots from '../assets/icons/icon-dots.png'
const SavingsRecordsItem = () => {
    return (
        <div className='flex flex-row justify-between w-full px-10 py-2 border-l border-r border-b border-b-4 rounded-2xl cursor-pointer hover:bg-gray-300 transition-all duration-300'>
            <div className=''>下午 15:30</div>
            <div className='flex flex-row justify-between items-center'>
                <div>NT$ 300.00</div>
                <img src={IconDots} className='w-5 aspect-square' alt="" />
            </div>
        </div>
    )
}

export default SavingsRecordsItem