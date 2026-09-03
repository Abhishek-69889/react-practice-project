import React from 'react'
import {MoveUpRight} from "lucide-react"

const LeftContent = () => {
  return (
    <div className=' w-1/3 h-full flex flex-col justify-between py-20 px-14 pb-10'>
      <div className=''>
        <h1 className='text-5xl font-bold leading-snug'>Prospective <br /> customer <br />segmentation</h1>
        <p className='my-5 text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, cumque! Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='font-extrabold'>
        <MoveUpRight size={50} />
      </div>
    </div>
  )
}

export default LeftContent
