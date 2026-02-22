import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'
import SavingsItem from '../components/SavingsItem'

const Savings = () => {
    //Variables
    const [goal, setGoal] = useState({
        goalName: "",
        goalAmount: 0,
    })
    const [goalTemp, setGoalTemp] = useState({
        "goalName": "",
        "goalAmount": 0,
    })
    const [goals, setGoals] = useState([])

    //OnLoad
    const onLoad = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/savings`, {
                method: "GET"
            })

            const data = await response.json()
            setGoals(data.savings)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        onLoad()
    }, [])

    const [isBudgetFormOpen, setIsBudgetFormOpen] = useState(false)
    const handleAddGoal = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/savings`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(goalTemp)
            })

            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    //Logging
    useEffect(() => { console.log(goalTemp) }, [goalTemp])
    useEffect(() => { console.log(goals) }, [goals])
    return (
        <div className='flex flex-row justify-between w-full  md:w-[90%] lg:w-[80%] xl:w-[55%] h-[90%] border-8 border-yellow-200  rounded-2xl bg-white '>
            {/*Left Side*/}
            <Sidebar />
            {/*Right Side*/}
            <div className='flex flex-col justify-end gap-5 w-[70%] h-full p-5 '>
                {/*Right Side - Title*/}
                <div className='flex flex-row justify-center items-center h-[20%]  text-2xl font-bold '>存錢目標</div>

                {/*Right Side - Search*/}
                <Search setIsBudgetFormOpen={setIsBudgetFormOpen} className={'hidden'} />

                {/*Right Side - List*/}
                <div className='h-[65%] '>
                    {/*Right Side - List Categories*/}
                    <div className='grid grid-cols-[0.8fr_0.9fr_1fr_0.3fr] h-[10%] pb-2 border-b'>
                        <div className='flex flex-row justify-center items-center  text-[#434343]'>建立時間</div>
                        <div className='flex flex-row justify-center items-center  text-[#434343]'>目標名稱</div>
                        <div className='flex flex-row justify-center items-center  text-[#434343]'>存錢金額</div>
                        <div className='flex flex-row justify-center items-center  text-[#434343]'>編輯</div>
                    </div>
                    {/*Right Side - List Items*/}
                    <div className='h-[90%] overflow-y-auto hide-scrollbar'>
                        {goals.map((item, index) => {
                            return (
                                <SavingsItem key={index} createdAt={item.createdAt} goalName={item.goalName} goalAmount={item.goalAmount} />
                            )
                        })}


                    </div>
                </div>
            </div>

            {isBudgetFormOpen &&
                <div onClick={() => setIsBudgetFormOpen(false)} className='fixed left-0 top-0 flex flex-row justify-center items-center w-full h-full'>
                    <div onClick={(e) => e.stopPropagation()} className='flex flex-col justify-end items-center  w-[300px] h-[300px] px-3 pb-3  border border-8 rounded-3xl border-green-500 bg-white'>
                        <div className='flex flex-row justify-center items-center w-full h-[40%]   text-3xl text-[#434343] font-bold '>目標</div>
                        <form onSubmit={handleAddGoal} className='flex flex-col gap-1 w-full h-[60%]'>
                            <input value={goalTemp.goalName} onChange={(e) => setGoalTemp({ ...goalTemp, goalName: e.target.value })} type="text" placeholder='目標名稱' className='w-full h-[30%] pr-2 border text-end' />
                            <div className='relative w-full h-[40%]'>
                                <div className='absolute flex flex-row items-center w-[50%] h-full pl-5  font-bold text-[#434343] '>NT$</div>
                                <input value={goalTemp.goalAmount} onChange={(e) => { setGoalTemp({ ...goalTemp, goalAmount: Number(e.target.value) }) }} type="number" placeholder='ex: 5000' className='w-full h-full border text-end' />
                            </div>
                            <button className='w-full h-[30%] py-2 bg-green-500 text-white font-black'>儲存</button>
                        </form>
                    </div>
                </div>}
        </div >

    )
}

export default Savings