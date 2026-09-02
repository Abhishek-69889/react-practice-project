import React from 'react'
import '../css/Card.css'

const Card = (props) => {
  return (
    <>
      <div id="card-container">
        <div className="card-image">
          <img src={props.img} alt="" />
        </div>
        <div className="card-content">
          <h3>{props.user}</h3>
          <p>Hii I'm a {props.Profe}!</p>
          <p>I'm working at <span style={{color:"red"}}>{props.company}</span></p>
        </div>
      </div>
    </>
  )
}

export default Card
