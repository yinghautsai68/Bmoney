import React from 'react'

const CalculatorPad = ({ text }) => {
    return (
        <span onClick={() => handleCalculator("7")} className='block flex flex-row justify-center items-center aspect-square border rounded-xl bg-yellow-500 hover:bg-gray-200 text-white cursor-pointer transition-all'>
            {text}
        </span>
    )
}

export default CalculatorPad