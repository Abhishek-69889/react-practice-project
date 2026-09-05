import { useState } from "react"
import Object from "./AdvanceTopics/Object";
import Array from "./AdvanceTopics/Array";

function App() {
  const [num, setNum] = useState(0);

  function inc(){
    setNum(num + 1);
  };
  function dec(){
    setNum(num-1);
  }

  return (
    <>
      {/* <h1>Value of a is {num}</h1>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button> */}

      {/* <Object/> */}
      <Array/>
    </>
  )
}

export default App
