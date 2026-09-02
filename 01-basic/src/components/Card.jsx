import React from 'react'
import '../index.css'

const Card = (props) => {
  // console.log(props.user)
  // console.log(props.user)
  return (
    <div>
      <div id="card">
        <h2>Hello this is {props.user}</h2>
        <p>I'm {props.age} years old, I live in </p>
      </div>
    </div>
  )
}

export default Card
