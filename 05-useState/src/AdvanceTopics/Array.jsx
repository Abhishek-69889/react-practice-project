import React, { useState } from 'react'

const Array = () => {
  const [arr, setArr] = useState([1,2,3,4,5])
  const update=()=>{
    let newArr=[...arr];
    newArr.push(99);

    setArr(newArr);
  }
  return (
    <div>
      {
        arr.map((elm,idx)=>{
          return <h1><span>{elm}</span></h1>
        })
      }
      <button onClick={update}>Change array</button>
    </div>
  )
}

export default Array
