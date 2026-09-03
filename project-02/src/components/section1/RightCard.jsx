import React from 'react'
import {MoveRight} from "lucide-react"

const RightCard = (props) => {
  // console.log(props.img)
  return (
     <div className='w-80 h-full bg-blue-50 rounded-2xl overflow-hidden relative flex-none shrink-0'>
        <div className='h-full w-full object-cover relative overflow-hidden '>
          <img src={props.img} alt="" className='h-full w-full object-cover'/>
        </div>

        <div className=' w-full h-full absolute top-0 left-0 flex flex-col justify-between px-5 py-1 backdrop-blur-[1px]'>
            <div>
              <h1 className='bg-white w-10 h-10 text-center flex justify-center items-center rounded-full text-2xl'>{props.idx+1}</h1>
            </div>
            <div className=' py-5 leading-relaxed '>
              <p className='text-md text-black mb-5'>{props.intro}</p>
              <div className='w-full flex justify-between'>
                <button style={{backgroundColor:props.color}} className=' rounded-2xl  text-white px-5'>{props.review}</button>
              <button className='bg-blue-800  rounded-2xl  text-white px-1 '><MoveRight size={16} /></button>
              </div>
            </div>
        </div>
      </div>
  )
}

export default RightCard
