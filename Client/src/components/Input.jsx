import React from 'react'

const Input = ({ name, onChange, value }) => {

    return (
        <input type={name.toLowerCase() === 'password' || name.toLowerCase() === 'confirm' ? 'password' : 'text'} name={name} onChange={onChange} value={value} className='border border-white p-2 placeholder-slate-100 rounded-md focus:outline-none focus:border-red-400 text-white bg-transparent' placeholder={name.toLowerCase() === 'confirm' ? 'Confirm Password' : name} />
    )
}

export default Input