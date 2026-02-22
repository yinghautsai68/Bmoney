import React from 'react'

const Button = ({ onClick, className, text }) => {
    return (
        <div onClick={onClick} className={`${className} px-5 py-2 border rounded-xl cursor-pointer transition-all duration-300`}>
            {text}
        </div>
    )
}

export default Button