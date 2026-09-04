

function App() {

  const buttonClicked=()=>{
    console.log("Button Clicked");
  };

  return (
    <>
      <h1>Hello Guys</h1>
      <button onClick={()=>{console.log("button clicked inside")}}> CLicked </button>
    </>
  )
}

export default App
