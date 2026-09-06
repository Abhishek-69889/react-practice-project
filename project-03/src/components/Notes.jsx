import React from 'react'

const Notes = () => {
  return (
        <div className="w-full h- overflow-hidden  bg-amber-950 p-2">
        <h2>Recent Notes</h2>
        <div className="w-70 h-70 overflow-hidden bg-amber-400 rounded-2xl ">
          <div className=" relative object-cover">
            {/* <img src="https://img.magnific.com/free-psd/vintage-spiral-notebook-blank-pages-your-ideas_191095-83874.jpg?semt=ais_hybrid&w=740&q=80" alt=""  className="object-cover"/> */}
          </div>
          <div>
            <div className="text-black absolute ">
              <h2>Code more</h2>
            <p>Code of the task should complete today</p>
            </div>
            <div className='text-black absolute'>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Notes
