import React from 'react'

const Home = (props) => {
  console.log(props.data)
  return (
    <div className='w-full h-165 flex justify-around gap-1.5 p-2 flex-wrap'>
      <div className='w-150  flex flex-col gap-10 my-10'>
        <div >
          <h4 className='text-blue-700 text-1xl bg-gray-200 text-center w-70 rounded-2xl'>Stay Organised, Stay Productive</h4>
        </div>
        <div>
          <h1 className='text-6xl'>Manage Tasks <span className='text-blue-900'>Effortlessly</span></h1>
        </div>
        <div className='text-gray-500'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, error?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, delectus?</p>
        </div>
        <div>
          <button className='p-2 bg-blue-700 text-white m-1 rounded-xl cursor-pointer'>Get Started</button>
          <button className='p-2 bg-gray-100 rounded-xl cursor-pointer'>Learn More</button>
        </div>
      </div>


      <div className='w-100 h-auto bg-gray-100 p-3 flex flex-col gap-2 rounded-2xl m-10 overflow-auto'>
        <div className='w-full flex justify-between'>
          <h2>My Tasks</h2>
          <button className='rounded-sm bg-blue-800 text-white p-1'>Add Task</button>
        </div>
        <div className='w-full flex gap-2'>
          <button className='bg-blue-700 rounded-sm text-white px-2 cursor-pointer'>All</button>
          <button className='bg-gray-200 rounded-sm text-gray-600 px-2 cursor-pointer'>Pending</button>
          <button className='bg-gray-200 rounded-sm text-gray-600 px-2 cursor-pointer'>Completed</button>
        </div>

        {
          props.data.map(task=>(
          <div className='my-1 flex justify-between gap-10 bg-gray-200 p-1 rounded-md '>
            <div className='flex gap-2'>
              <input type="checkbox" name="" id="" />
              <h3>{task.task}</h3>
            </div>
            <button className='rounded-sm bg-gray-500 px-2 text-green-300 cursor-pointer'>{task.category}</button>
          </div>
          ))
        }




        
      </div>
    </div>
  )
}

export default Home
