import React from 'react'

const Notes = (props) => {
  console.log(props.note[0])
  return (
        <div className="w-60 h-60 overflow-hidden  rounded-2xl border-2 border-red-400 border-solid">
          <div className=" relative object-cover ">
            {/* <img src="https://img.magnific.com/free-psd/vintage-spiral-notebook-blank-pages-your-ideas_191095-83874.jpg?semt=ais_hybrid&w=740&q=80" alt=""  className="object-cover"/> */}
          </div>
          {
            props.note.map((item,index)=>{
              return (
              <div className='h-full flex justify-between flex-col p-2' index={index}>
            <div className="text-white flex flex-col gap-10">
              <h2 className='text-xl font-bold'>{item.title}</h2>
              <p className='text-sm text-gray-600 font-medium'>{item.description}</p>
            </div>
            <div className= ''>
              <button className='bg-red-500 text-white p-1 px-2 rounded-2xl cursor-pointer'>Delete</button>
            </div>
          </div>
              )
            })
          }
        </div>    
  )
}

export default Notes
