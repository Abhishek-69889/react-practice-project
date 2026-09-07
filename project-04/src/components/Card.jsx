import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-white w-50 h-50 rounded-xl overflow-hidden  cursor-pointer hover:border-blue-500 border-2'  key={props.key}>
      <img src={props.url} alt=""  className='w-full h-full object-cover'/>
    </div>
  )
}

export default Card
