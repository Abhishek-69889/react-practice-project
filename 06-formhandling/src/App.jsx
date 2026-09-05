

function App() {

  const formSubmit=(e)=>{
    e.preventDefault();
    console.log("Form handling done!");
  }

  return (
    <>
      <form action="submit" onSubmit={(e)=>{formSubmit(e)}}>
        <label htmlFor="">Name: </label>
        <input type="text" placeholder="Enter Your name " />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
