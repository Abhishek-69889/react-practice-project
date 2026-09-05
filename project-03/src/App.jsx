

function App() {

  return (
    <>
     <div className="w-full h-screen flex  justify-between px-5 py-1">
      <div className="w-1/2 p-10">
        <h2 className="text-3xl">Add Notes</h2>
        <form action=""
        className="w-full flex flex-col gap-10 p-10 "
        >
          <input type="text" placeholder="Title" style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "white" }}  className="bg-black p-1 rounded-[10px] outline-0 "/>
        <textarea placeholder="Take a note..." style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "white" }} className="bg-black p-1 rounded-[10px] outline-0 h-30 resize-none "></textarea>
        <button className="py-1 bg-gray-500 w-max px-7 rounded-2xl text-md cursor-pointer ml-55">Add</button>
        </form>
      </div>
      <div>
        <h2>Recent Notes</h2>
        <div className="w-100 h-100 overflow-hidden relative">
          <div className="">
            <img src="https://img.magnific.com/free-psd/vintage-spiral-notebook-blank-pages-your-ideas_191095-83874.jpg?semt=ais_hybrid&w=740&q=80" alt=""  className="object-cover"/>
            </div>
          <div>
            <div className="absolute top-0 left-0 text-black">
              <h2>Code more</h2>
            <p>Code of the task should complete today</p>
            </div>
            <div>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
