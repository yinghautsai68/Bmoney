import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import RecordDetailsItem from '../components/RecordDetailsItem'
import Button from '../components/Button'
import Calculator from '../components/Calculator'


import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const RecordDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    // Variables
    const [record, setRecord] = useState({})

    // UI
    const [isFormOpen, setIsFormOpen] = useState(false)

    const getRecordDetails = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/records/${id}`, {
                method: "GET"
            })
            const data = await response.json()
            console.log(data)
            setRecord(data.record)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => { getRecordDetails() }, [])


    const formatTime = (date) => {
        //handleEmpty
        if (!date) return ""


        const datetime = new Date(date)
        const year = datetime.getFullYear()
        const month = datetime.getMonth() + 1
        const day = datetime.getDate()
        const hours = datetime.getHours()
        const minutes = datetime.getMinutes().toString().padStart(2, "0")
        const period = hours >= 12 ? "下午" : "上午"
        return `${year}年${month}月${day}日 ${period}${hours}:${minutes} `
    }


    const handleDelete = async () => {
        console.log("button clicked")
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/records/${id}`, {
                method: "DELETE"
            })
            const data = await response.json()
            console.log(data)

            navigate('/records')

        } catch (error) {
            console.log(error.message)
        }
    }

    // Logging
    useEffect(() => { console.log(record) }, [record])
    return (
        <div className='flex flex-row justify-between w-full  md:w-[90%] lg:w-[80%] xl:w-[55%] h-full md:h-[90%] border-8 border-yellow-200  md:rounded-2xl bg-white '>
            {/*Left Side*/}
            <Sidebar />
            {/*Right Side*/}
            <div className='flex flex-col items-center gap-5 w-full md:w-[70%]  h-full px-5 pt-10 md:pt-15  '>
                <div className='flex flex-row justify-center items-center w-full text-xl font-bold '>記錄仔細</div>
                <div className='grid grid-rows-4 divide-y w-full md:w-[70%] border border-b-3'>
                    <RecordDetailsItem title={'名稱'} value={record.name} />
                    <RecordDetailsItem title={'日期'} value={formatTime(record.date)} />
                    <div className='grid grid-cols-2 divide-x'>
                        <RecordDetailsItem title={'類型'} value={record.type} />
                        <RecordDetailsItem title={'類別'} value={record.category} />
                    </div>
                    <RecordDetailsItem title={'金額'} value={`NT$ ${record.amount}`} className={'text-red-500'} />
                </div>
                <div className='flex flex-row justify-center items-center gap-1 w-full '>
                    <Button onClick={() => setIsFormOpen(true)} text={'編輯'} className={'bg-gray-400 text-white hover:bg-gray-800'} />
                    <Button onClick={() => handleDelete()} text={'刪除'} className={'bg-red-400 text-white hover:bg-red-800'} />
                </div>

            </div>

            {isFormOpen &&
                <Calculator setIsFormOpen={setIsFormOpen} type='edit' id={id} record={record} setRecord={setRecord} />}
        </div>
    )
}

export default RecordDetails