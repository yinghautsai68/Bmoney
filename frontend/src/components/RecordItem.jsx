import React, { useState } from 'react'
import cookie from '../assets/WET.png'
import IconDots from '../assets/icon-dots.png'

import { useNavigate } from 'react-router-dom'


const RecordItem = ({ record }) => {
    const navigate = useNavigate()

    const [isEditOpen, setIsEditOpen] = useState(false)

    const formatTime = (date) => {
        //handleEmpty
        if (!date) return ""


        const datetime = new Date(date)
        const hours = datetime.getHours()
        const minutes = datetime.getMinutes().toString().padStart(2, "0")
        const period = hours >= 12 ? "下午" : "上午"
        return `${period} ${hours}:${minutes} `
    }

    return (
        <div onClick={() => navigate(`/records/${record._id}`)} className='relative flex flex-row justify-between items-center px-2 px-3 sm:px-12 md:px-10 py-1   border-l border-r border-b-4 rounded-xl  cursor-pointer hover:bg-gray-300 transition-all duration-300'>
            <div className='grid grid-cols-[0.5fr_0.1fr_1fr] md:grid-cols-[0.5fr_0.1fr_1fr] items-center gap-2 w-[50%]  text-xs'>
                <span className='text-[#434343]'>{formatTime(record.date)}</span>
                <div className='w-7 aspect-square rounded-lg bg-green-500 '></div>
                <span className='md:text-lg font-bold'>{record.name}</span>

            </div>
            <div className='flex flex-row justify-end items-center gap-2 w-[50%]    '>
                <span className={`${record.type === "expense" ? 'text-red-500' : 'text-green-500'}   text-xs md:text-sm md:font-medium`}>NT$ {record.amount}</span>
                <img onClick={() => setIsEditOpen(true)} src={IconDots} className='w-6 aspect-square  cursor-pointer' alt="" />
            </div>

            {
                isEditOpen &&
                <div className='absolute right-0 top-0 flex flex-col w-15 aspect-square border bg-white'>
                    <div></div>
                </div>
            }
        </div>
    )
}

export default RecordItem