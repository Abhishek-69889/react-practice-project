import { useState } from "react";

function App() {

  const [title, setTitle] = useState("Abhishek")

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form handling done!", title);
    setTitle("")
  };

  return (
    <>
      <form
        action="submit"
        onSubmit={(e) => {
          formSubmit(e);
        }}
      >
        <label htmlFor="">Name: </label>
        <input
         type=""
         placeholder="Enter Your name " 
         value={title} 
         onChange={(e)=>{setTitle(e.target.value)}}
         />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
