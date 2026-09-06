import React from 'react'

const Form = (props) => {
  console.log()
  function formsubmit(e){
    e.preventDefault();
    let notes={"title":e.target[0].value,"description":e.target[1].value};
    // console.log(notes);
    props.setnotes((prev)=>[...prev, notes]);
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
  }

  return (
    <div className="w-1/2 p-10 ">
        <h2 className="text-3xl">Add Notes</h2>
        <form 
        action="submit"
        className="w-full flex flex-col gap-10 p-10 "
        onSubmit={(e)=>formsubmit(e)}
        >
          <input type="text" placeholder="Title" style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "white" }}  className="bg-black p-1 rounded-[10px] outline-0 "/>
        <textarea placeholder="Take a note..." style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "white" }} className="bg-black p-1 rounded-[10px] outline-0 h-30 resize-none "></textarea>
        <button className="py-1 bg-gray-500 w-max px-7 rounded-2xl text-md cursor-pointer ">Add</button>
        </form>
      </div>

  )
}

export default Form
