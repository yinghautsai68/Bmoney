import React, { useEffect, useState } from 'react'
import CalculatorPad from './CalculatorPad'

const Calculator = ({ type, id, onClick, setIsFormOpen, record, setRecord, records, setRecords }) => {
    const [firstValue, setFirstValue] = useState("")
    const [secondValue, setSecondValue] = useState("0")

    const [operator, setOperator] = useState("")
    const [calcAmt, setCalcAmt] = useState("0")

    const [recordTemp, setRecordTemp] = useState(record ? {
        date: record.date,
        category: record.category,
        name: record.name,
        type: record.type,
        amount: record.amount,
    } : {
        date: "",
        category: "food",
        name: "",
        type: "expense",
        amount: '',
    }
    )
    const handleCalculator = (input) => {
        console.log(input)
        /*
        if (firstValue === "") {
            setFirstValue(input)
            setRecord({ ...record, amount: firstValue })
        } else {
            setFirstValue(prev => prev + input)
            setRecord({ ...record, amount: firstValue })
        }
*/
    }

    //Add Record
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (type === "add") {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/records`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        //"Authorization": `Bearer ${token}`,
                    },
                    body: JSON.stringify(recordTemp)
                })

                const data = await response.json()

                console.log(data.savedRecord)
                setRecords([...records, data.savedRecord]) //Update records

                setIsFormOpen(false)
            } catch (error) {
                console.log(error)
            }
        } else if (type === "edit") {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/records/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        //"Authorization": `Bearer ${token}`,
                    },
                    body: JSON.stringify(recordTemp)
                })

                const data = await response.json()

                console.log(data)
                setRecord(data)
                setIsFormOpen(false)
            } catch (error) {
                console.log(error)
            }
        }
    }

    // Logging
    useEffect(() => {
        console.log(recordTemp)
    }, [recordTemp])
    return (
        <div onClick={() => setIsFormOpen(false)} className='absolute left-0 top-0 flex flex-row justify-center items-center w-full h-full  z-2'>
            <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} className='flex flex-col gap-1 w-[300px] md:w-[350px] h-[90%] pt-5 pb-5 px-2 bg-white border border-8 border-gray-500 rounded-2xl'>
                <div className='flex flex-row justify-center items-center w-full h-[10%]  text-2xl font-bold'>記錄</div>
                <div className='flex flex-col  items-start  w-full h-[30%] md:h-[40%]  p-2 border border-gray-400 '>
                    <div className='flex flex-row justify-between items-center w-full h-[40%] border '>
                        <input placeholder='輸入名稱' value={recordTemp.name} onChange={(e) => setRecordTemp({ ...recordTemp, name: e.target.value })} type="text" className='w-full h-full pl-2 border' />
                        <select value={recordTemp.category} onChange={(e) => setRecordTemp({ ...recordTemp, category: e.target.value })} className='h-full border'>
                            <option value="food">食物</option>
                            <option value="fee">費用</option>
                        </select>
                        <select value={recordTemp.type} onChange={(e) => setRecordTemp({ ...recordTemp, type: e.target.value })} className={`${record.type === "expense" ? 'bg-red-400' : 'bg-green-500'} h-full font-bold text-white`}>
                            <option value="expense">支出</option>
                            <option value="income">收入</option>
                        </select>
                    </div>
                    <div className='flex flex-row justify-end items-end w-full h-full font-bold  '>
                        <input value={recordTemp.amount} onChange={(e) => { setRecordTemp({ ...recordTemp, amount: Number(e.target.value) }); setFirstValue(e.target.value); }} type="text" className='w-full h-full hover:border-none focus:outline-none text-right align-bottom' />

                    </div>
                </div>
                <div className='flex flex-row justify-between items-center gap-1'>
                    <input type="datetime-local" value={recordTemp.date} onChange={(e) => setRecordTemp({ ...recordTemp, date: e.target.value })} className='w-[90%] border' />
                    <button type='submit' className='w-[10%] aspect-square rounded bg-green-500 text-white'>+</button>
                </div>

                <div className='flex flex-row w-full '>
                    <div className='grid grid-rows-4 w-[80%]'>
                        <div className='grid grid-cols-3'>
                            <CalculatorPad text='7' />
                            <CalculatorPad text='8' />
                            <CalculatorPad text='9' />
                        </div>
                        <div className='grid grid-cols-3'>
                            <CalculatorPad text='4' />
                            <CalculatorPad text='5' />
                            <CalculatorPad text='6' />
                        </div>
                        <div className='grid grid-cols-3'>
                            <CalculatorPad text='1' />
                            <CalculatorPad text='2' />
                            <CalculatorPad text='3' />
                        </div>
                        <div className='grid grid-cols-3'>
                            <CalculatorPad text='.' />
                            <CalculatorPad text='0' />
                            <CalculatorPad text='delete' />
                        </div>
                    </div>
                    <div className='grid grid-rows-4 w-[20%]'>
                        <span onClick={() => handleCalculator("+")} className='block flex flex-row justify-center items-center w-full h-full border hover:bg-gray-200 cursor-pointer transition-all'>+</span>
                        <span onClick={() => handleCalculator("+")} className='block flex flex-row justify-center items-center w-full h-full border hover:bg-gray-200 cursor-pointer transition-all'>-</span>
                        <span onClick={() => handleCalculator("+")} className='block flex flex-row justify-center items-center w-full h-full border hover:bg-gray-200 cursor-pointer transition-all'>*</span>
                        <span onClick={() => handleCalculator("+")} className='block flex flex-row justify-center items-center w-full h-full border hover:bg-gray-200 cursor-pointer transition-all'>/</span>

                    </div>
                </div>

            </form>
        </div >
    )
}

export default Calculator