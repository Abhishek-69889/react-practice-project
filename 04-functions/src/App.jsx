

function App() {

  const inputChange=(value)=>{
  };

  return (
    <>
      <input type="text" placeholder="Enter your Name: " onChange={(event)=>inputChange(event.target.value)}/>
    </>
  )
}

export default App
