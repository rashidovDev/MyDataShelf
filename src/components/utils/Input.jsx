import React from 'react'

const Input = (props) => {
  return (
    <div className='flex flex-col my-5 w-[90%] m-auto'>
        <input 
        className='px-5 py-[2px] border-b border-[#fff]  bg-[transparent] outline-none md:w-[400px] text-[15px]'
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.setValue(event.target.value)}
        />
    </div>
  )
}

export default Input