import React from 'react'
import cookie from '../assets/WET.png'
import { NavLink } from 'react-router-dom'

const NavItem = ({ to, className, icon, text }) => {
    return (
        <NavLink to={to} className={({ isActive }) => `${isActive ? 'bg-yellow-200' : ''} ${className} flex flex-row justify-between items-center gap-4 w-full px-8  `}>
            <img src={icon} className='w-12 aspect-square' alt="" />
            <div className='flex flex-row w-full font-black text-[#434343]  '>{text}</div>
        </NavLink>
    )
}

export default NavItem