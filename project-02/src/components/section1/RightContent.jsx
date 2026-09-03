import React from 'react'

import RightCard from './RightCard'

const RightContent = (props) => {
  // console.log(props.users[0].color)
  return (
    <div id='right-card-container' className=' w-2/3 h-full p-5 flex gap-5 overflow-auto rounded-2xl'>
      {props.users.map((user , idx)=>(
        <RightCard key={idx} idx={idx} img={user.img} intro={user.intro} review={user.review} color={user.color}/>

      ))}
    </div>
  )
}

export default RightContent
