import { useState } from 'react'
import Navbar from './components/Header/Navbar'
import Home from './components/Main/Home'


function App() {
  const tasks = [
  {
    id: 1,
    task: "Build React components",
    description: "Create reusable components for the website",
    category: "Work",
    completed: false
  },
  {
    id: 2,
    task: "Study Tailwind CSS",
    description: "Learn utility classes and responsive design",
    category: "Learning",
    completed: false
  },
  {
    id: 3,
    task: "Complete project homepage",
    description: "Build the landing page using React",
    category: "Work",
    completed: true
  },
  {
    id: 4,
    task: "Practice React Props",
    description: "Pass data from parent components to child components",
    category: "Learning",
    completed: false
  },
  {
    id: 5,
    task: "Create TaskCard component",
    description: "Build a reusable card for displaying tasks",
    category: "Work",
    completed: false
  },
  {
    id: 6,
    task: "Learn React State",
    description: "Understand useState and state updates",
    category: "Learning",
    completed: false
  },
  {
    id: 7,
    task: "Make website responsive",
    description: "Add mobile, tablet, and desktop layouts",
    category: "Work",
    completed: false
  },
  {
    id: 8,
    task: "Practice Tailwind Flexbox",
    description: "Practice flex, justify, items, gap, and direction",
    category: "Learning",
    completed: true
  },
  {
    id: 9,
    task: "Create navigation bar",
    description: "Build responsive navigation using React",
    category: "Work",
    completed: true
  },
  {
    id: 10,
    task: "Learn React map()",
    description: "Render multiple task cards from an array",
    category: "Learning",
    completed: false
  }
];

  return (
    <>
    <div>
      <Navbar/>
      <Home data={tasks}/>
    </div>
    </>
  )
}

export default App
