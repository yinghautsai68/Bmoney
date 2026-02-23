import React from 'react'
import Sidebar from '../components/Sidebar'

import IconDots from '../assets/icons/icon-dots.png'
import SavingsRecordsItem from '../components/SavingsRecordsItem'
import AddSavingsRecordForm from '../components/AddSavingsRecordForm'
const SavingsRecords = () => {
    return (
        <div className='relative flex flex-row justify-between w-full  md:w-[90%] lg:w-[80%] xl:w-[55%] h-[90%] border-8 border-yellow-200  rounded-2xl bg-white '>
            {/*Left Side*/}
            <Sidebar />
            {/*Right Side*/}
            <div className='flex flex-col gap-2 w-full  md:w-[70%] h-full p-5 '>
                <div className='flex flex-col justify-end items-start gap-1 w-full h-[25%]'>
                    <div className='text-4xl font-bold'>Iphone 15 Pro Max</div>
                    <div className='flex flex-row items-center gap-2'>
                        <div className='text-gray-400'>建立時間: 2025年12月31日</div>
                        <div className='w-8 aspect-square rounded-xl bg-gray-400 cursor-pointer'></div>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center w-full h-[5%]'>
                    <div><span className='font-bold'>目標金額:</span> NT$ 21,000.00</div>
                    <div><span className='font-bold'>已存的錢:</span> NT$ 15,000.00</div>
                    <div className='w-8 aspect-square rounded-xl bg-green-500'></div>
                </div>
                <div className='flex flex-col gap-2 w-full h-[70%] overflow-y-auto hide-scrollbar'>
                    <div className='flex flex-col gap-0'>
                        <div className='flex flex-row justify-start items-center pl-5 pb-2 border-b'>
                            <div className='text-md font-bold'>11月15日</div>
                        </div>
                        <div>
                            <SavingsRecordsItem />
                            <SavingsRecordsItem />
                            <SavingsRecordsItem />
                            <SavingsRecordsItem />
                        </div>
                    </div>
                    <div className='flex flex-col gap-0'>
                        <div className='flex flex-row justify-start items-center pl-5 pb-2 border-b'>
                            <div className='text-md font-bold'>11月15日</div>
                        </div>
                        <div>
                            <SavingsRecordsItem />
                            <SavingsRecordsItem />
                        </div>
                    </div>
                    <div className='flex flex-col gap-0'>
                        <div className='flex flex-row justify-start items-center pl-5 pb-2 border-b'>
                            <div className='text-md font-bold'>11月15日</div>
                        </div>
                        <div>
                            <SavingsRecordsItem />
                            <SavingsRecordsItem />
                        </div>
                    </div>
                </div>
            </div>

            <AddSavingsRecordForm />
        </div>
    )
}

export default SavingsRecords