import React from 'react'
import {CircleCheckBig} from "lucide-react"
const Navbar = () => {
  return (
    <>
      <div className='flex justify-around p-2 border-b-1 border-gray-200 bg-gray-50 w-full'>
        <div className='flex gap-5'>
          <CircleCheckBig color="#2f09f1" />
          <h2 className='text-blue-700'>TaskFlow</h2>
        </div>
        <div>
          <ul className='flex gap-10'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Features</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
          </ul>
        </div>
        <div>
          <button className='bg-blue-700 p-1 border-0 rounded-sm text-white cursor-pointer'>Get Started</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
