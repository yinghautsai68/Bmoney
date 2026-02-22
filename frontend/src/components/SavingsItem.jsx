import React from 'react'
import IconDots from '../assets/icon-dots.png'
const SavingsItem = ({ createdAt, goalName, goalAmount }) => {
    return (
        <div className='grid grid-cols-[0.8fr_0.9fr_1fr_0.3fr] py-3  border-l border-r border-b-4 rounded-xl'>
            <div className='flex flex-row justify-center items-center text-sm'>{createdAt}</div>
            <div className='flex flex-row justify-center items-center text-sm'>{goalName}</div>
            <div className='flex flex-row justify-center items-center text-xs'>NT$ 12,500.00/{goalAmount}</div>
            <div className='flex flex-row justify-center items-center'>
                <img src={IconDots} className='w-6 aspect-square cursor-pointer' alt="" />
            </div>

        </div>
    )
}

export default SavingsItem