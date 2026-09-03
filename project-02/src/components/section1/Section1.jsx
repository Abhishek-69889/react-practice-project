import React from 'react'
import Navbar from './Navbar'
import Landing from './Landing'

const Section1 = (props) => {
  // console.log(props.users[0].color)
  return (
    <div className="h-screen w-full">
      <Navbar/>
      <Landing user={props.users}/>
    </div>
  )
}

export default Section1
