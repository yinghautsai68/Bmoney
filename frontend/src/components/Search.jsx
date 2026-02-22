import React from 'react'
import IconSearchBar from '../assets/icons/icon-searchbar.png'
import IconFilter from '../assets/icons/icon-filter.png'
import IconSearch from '../assets/icons/icon-search.png'
import IconAddList from '../assets/icons/icon-addlist.png'
const Search = ({ className, setIsBudgetFormOpen, handleAdd }) => {
    return (
        <div className='flex flex-row items-center gap-1 w-full h-[7%] '>
            <div className='relative w-full h-full'>
                <img src={IconSearchBar} className='absolute left-2 top-1/2 -translate-y-1/2  w-5 aspect-square' alt="" />
                <input placeholder='搜尋' className='w-full h-full pl-8 py-2 border rounded-xl' />
            </div>
            <img src={IconFilter} className={`${className} h-full px-2 aspect-square border border-[#434343] rounded-xl  object-contain cursor-pointer`} alt="" />
            <img src={IconSearch} className='h-full px-2 aspect-square border border-[#434343] rounded-3xl  object-contain cursor-pointer' alt="" />
            <img onClick={() => setIsBudgetFormOpen(true)} src={IconAddList} className='h-full px-2 aspect-square bg-green-500 rounded-xl  object-contain cursor-pointer' alt="" />
        </div>
    )
}

export default Search