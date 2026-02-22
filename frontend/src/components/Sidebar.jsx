import React from 'react'
import NavItem from './NavItem'

import IconRecord from '../assets/icons/icon-record.png'
import IconGraph from '../assets/icons/icon-graph.png'
import IconSaveMoney from '../assets/icons/icon-savemoney.png'
import IconTags from '../assets/icons/icon-tags.png'


const Sidebar = () => {

    return (
        <div className='hidden md:block w-[30%] h-full border-r border-gray-300'>
            <h1 className='flex flex-row justify-center items-center  w-full h-[30%]  text-2xl font-bold'>
                BMoney
            </h1>
            <ul className='grid grid-rows-4  w-full h-[70%] '>
                <NavItem to={'/records'} icon={IconRecord} text='記錄' />
                <NavItem to={'/analysis'} icon={IconGraph} text='分析' />
                <NavItem to={'/savings'} icon={IconSaveMoney} text='存錢目標' />
                <NavItem to={'/management'} icon={IconTags} text='類別管理' />
            </ul>
        </div>
    )
}

export default Sidebar