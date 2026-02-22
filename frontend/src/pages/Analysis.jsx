import React from 'react'
import Sidebar from '../components/Sidebar'
const Analysis = () => {
    return (
        <div className='flex flex-row justify-between w-full  md:w-[90%] lg:w-[80%] xl:w-[55%] h-[90%] border-8 border-yellow-200  rounded-2xl bg-white '>
            {/*Left Side*/}
            <Sidebar />
            {/*Right Side*/}
            <div className='flex flex-col gap-5 w-[70%] h-full p-5 '>

            </div>
        </div>

    )
}

export default Analysis