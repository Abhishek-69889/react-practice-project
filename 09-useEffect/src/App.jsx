import { useEffect } from "react";
import { useState } from "react"


function App() {
  let [a, setA] = useState(0)
  let [b, setB] = useState(0)

  function changeA(){
    console.log("A ki value printing")
  };
  function changeB(){
    console.log("B ki value printing")
  };

  useEffect(function () {
    changeA()
  },[a])
  

  return (
    <>
     <h2>{a}</h2>
     <h2>{b}</h2>
     <button onClick={()=>setA(a++)}>Change a</button>
     <button onClick={()=>setB(b--)}>change b</button>
    </>
  )
}

export default App
