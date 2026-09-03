import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Landing = (props) => {
  // console.log(props.user[0].color)
  return (
    <div className='w-full h-[90vh] flex justify-between gap-10 p-1 ' >
        <LeftContent/>
        <RightContent users={props.user}/>
      </div>
  )
}

export default Landing
