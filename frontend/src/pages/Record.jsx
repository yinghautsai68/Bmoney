import React, { useEffect, useState } from 'react'
import cookie from '../assets/WET.png'

import ListitemTransaction from '../components/RecordItem'
import ListTransaction from '../components/RecordList'
import NavItem from '../components/NavItem'
import RecordList from '../components/RecordList'
import Sidebar from '../components/Sidebar'

import IconSearchBar from '../assets/icons/icon-searchbar.png'
import IconFilter from '../assets/icons/icon-filter.png'
import IconSearch from '../assets/icons/icon-search.png'
import Search from '../components/Search'
import Calculator from '../components/Calculator'


const Record = () => {
    //Variables
    const token = localStorage.getItem("token")
    //Variables:Date
    const todayDate = new Date()
    const year = todayDate.getFullYear()
    const month = todayDate.getMonth() + 1
    const day = todayDate.getDate()
    const weekdayIndex = todayDate.getDay() // 0 = sunday, 1 = monday, ...
    const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
    const weekday = weekdays[weekdayIndex]
    const formattedDate = `${year}年${month}月${day}日 (${weekday})`
    //Variables:Budget
    const [budget, setBudget] = useState(900)
    const [tempBudget, setTempBudget] = useState(0)
    const [remainingBudget, setRemainingBudget] = useState(500)
    //Variables:Record

    const [records, setRecords] = useState([])
    const [record, setRecord] = useState({
        date: "",
        category: "food",
        name: "",
        type: "expense",
        amount: "",
    })

    //Toggle UI 
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isBudgetOpen, setIsBudgetOpen] = useState(false)

    //Get Records
    const onLoad = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/records`, {
                method: "GET",
            })

            const data = await response.json()
            setRecords(data.records) //Online

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        onLoad()
    }, [])



    //Month Total
    let monthTotalExpense = 0;
    let monthTotalIncome = 0;
    for (let i = 0; i < records.length; i++) {
        if (records[i].type === "expense") {
            monthTotalExpense += records[i].amount
        }
    }
    for (let i = 0; i < records.length; i++) {
        if (records[i].type === "income") {
            monthTotalIncome += records[i].amount
        }

    }

    //Remaining Budget
    useEffect(() => {
        let newBudget = budget
        let today = todayDate.toLocaleString("sv-SE").split(" ")[0]
        for (let i = 0; i < records.length; i++) {
            let recordDate = records[i].date.split("T")[0]
            if (recordDate === today && records[i].type === "expense") {
                newBudget -= records[i].amount
            }
        }
        setRemainingBudget(newBudget)
    }, [records, budget])

    //Sort Records
    const sortedRecords = [...records].sort((a, b) => new Date(b.date) - new Date(a.date))

    //Group Records by Date
    let recordsByDate = {}
    for (let i = 0; i < sortedRecords.length; i++) {
        const record = sortedRecords[i];
        const date = record.date.split("T")[0]

        if (!recordsByDate[date]) {
            recordsByDate[date] = [];
        }
        recordsByDate[date].push(record)
    }





    const handleSetBudget = (e) => {
        e.preventDefault()
        setBudget(tempBudget)

        setIsBudgetOpen(false)
    }





    //Logging
    useEffect(() => {
        console.log(record)
    }, [record])
    useEffect(() => {
        console.log(records)
    }, [records])
    return (
        //APP
        <div className='flex flex-row justify-between w-full  md:w-[90%] lg:w-[80%] xl:w-[55%] h-full md:h-[90%] border-8 border-yellow-200  md:rounded-2xl bg-white '>

            {/*Left Side*/}
            <Sidebar />
            {/*Right Side*/}
            <div className='flex flex-col gap-5 w-full md:w-[70%] h-full p-5 '>
                {/*Right Side - Month*/}
                <div className='flex flex-row justify-between w-full h-[10%]'>
                    <span className='flex flex-col justify-end h-full text-lg md:text-3xl font-bold '>{month}月 記帳</span>
                    <div className='flex flex-col justify-between h-full '>
                        <div className='font-semibold'><span className='text-[#999999]'>總支出:</span> <span>NT$ {monthTotalExpense}</span></div>
                        <div className='font-semibold'><span className='text-[#999999]'>總收入:</span> <span>NT$ {monthTotalIncome}</span></div>
                    </div>
                </div>
                {/*Right Side - Search */}
                <Search />
                {/*Right Side - Add */}
                <div className='flex flex-row justify-end items-center gap-2 w-full h-[50px] text-xs md:text-sm'>
                    <span>今天 {formattedDate}</span>
                    <span onClick={() => setIsBudgetOpen(true)} className='text-yellow-500 font-bold cursor-pointer hover:underline transition-all'>預算: NT$ {remainingBudget}</span>
                    <div onClick={() => setIsFormOpen(true)} className='flex flex-row justify-center items-center w-8 aspect-square  rounded-lg bg-green-500 text-white '>
                        +
                    </div>
                </div>
                {/*Right Side - List*/}
                <div className='flex flex-col gap-2 pt-2 border-t  overflow-auto hide-scrollbar '>
                    {Object.keys(recordsByDate).map((item, index) => {
                        return (
                            <RecordList key={index} date={item} records={recordsByDate[item]} />
                        )
                    })}


                </div>
            </div>

            {/*UI POPUP*/}
            {isBudgetOpen &&
                <div className='absolute flex flex-row justify-center items-center w-full h-full z-2'>
                    <form onSubmit={handleSetBudget} className='flex flex-col justify-around items-center w-[500px] h-[500px] border bg-white'>
                        <div className='flex flex-row justify-center items-center text-xl font-bold'>預算</div>
                        <input value={tempBudget} onChange={(e) => setTempBudget(e.target.value)} type="number" className='w-full h-[20%] border' />
                        <button type='submit' className='p-2 border rounded-xl bg-green-500 text-white'>設定</button>
                    </form>
                </div>
            }

            {
                isFormOpen &&
                <Calculator type='add' onClick={() => setIsFormOpen(false)} setIsFormOpen={setIsFormOpen} record={record} setRecord={setRecord} records={records} setRecords={setRecords} />
            }
        </div>
    )
}

export default Record