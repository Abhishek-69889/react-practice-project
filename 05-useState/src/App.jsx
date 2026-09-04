import { useState } from "react"

function App() {
  const [num, setNum] = useState(10);

  function changeNum(){
    setNum(20);
  }

  return (
    <>
      <h1>Value of a is {num}</h1>
      <button onClick={changeNum}>Click</button>
    </>
  )
}

export default App
