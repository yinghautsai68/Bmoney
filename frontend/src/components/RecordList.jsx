import React from 'react'
import ListitemTransaction from './RecordItem'

import cookie from '../assets/WET.png'
import RecordItem from './RecordItem'

import IconSort from '../assets/icons/icon-sort.png'
const RecordList = ({ date, records }) => {
    const formatDate = (date) => {
        const dateObj = new Date(date)
        const month = dateObj.getMonth() + 1
        const dat = dateObj.getDate()
        return `${month}月${dat}日`
    }


    const totalExpense = records.filter(record => record.type === "expense").reduce((sum, record) => sum + Number(record.amount), 0)
    const totalIncome = records.filter(record => record.type === "income").reduce((sum, record) => sum + Number(record.amount), 0)
    return (
        <div className='flex flex-col gap-1  w-full  '>

            {/*List Date*/}
            <div className='flex flex-row justify-between items-center pb-2 border-b text-xs'>
                <div className='flex flex-row items-center gap-2'>
                    <span className='font-black'>{formatDate(date)}</span>
                    <img src={IconSort} className='w-8 p-2 aspect-square border rounded-lg cursor-pointer' alt="" />
                </div>
                <div className='flex flex-row  items-center gap-5'>
                    <div className='font-medium'><span className='text-[#999999]'>收入:</span> <span>NT${totalIncome}</span></div>
                    <div className='font-medium'><span className='text-[#999999]'>支出:</span> <span>NT${totalExpense}</span></div>
                </div>
            </div >
            {/*List Items*/}
            < div className='flex flex-col gap-1' >
                {
                    records.map((item, index) => {
                        return <RecordItem key={index} record={item} />
                    })
                }


            </div >



        </div >
    )
}

export default RecordList