import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
const arr = [
  {
    "name": "Abhishek",
    "Prof": "SDET",
    "company": "Google",
    "img": "https://i.pravatar.cc/300?img=1"
  },
  {
    "name": "Sharthak",
    "Prof": "SDET",
    "company": "Microsoft",
    "img": "https://i.pravatar.cc/300?img=2"
  },
  {
    "name": "Nitika",
    "Prof": "Frontend Developer",
    "company": "Amazon",
    "img": "https://i.pravatar.cc/300?img=3"
  },
  {
    "name": "Aman",
    "Prof": "Backend Developer",
    "company": "Meta",
    "img": "https://i.pravatar.cc/300?img=4"
  },
  {
    "name": "Rahul",
    "Prof": "Software Engineer",
    "company": "Apple",
    "img": "https://i.pravatar.cc/300?img=5"
  },
  {
    "name": "Priya",
    "Prof": "Full Stack Developer",
    "company": "Netflix",
    "img": "https://i.pravatar.cc/300?img=6"
  },
  {
    "name": "Rohan",
    "Prof": "DevOps Engineer",
    "company": "Adobe",
    "img": "https://i.pravatar.cc/300?img=7"
  },
  {
    "name": "Ananya",
    "Prof": "Data Analyst",
    "company": "Microsoft",
    "img": "https://i.pravatar.cc/300?img=8"
  },
  {
    "name": "Vikash",
    "Prof": "Machine Learning Engineer",
    "company": "Amazon",
    "img": "https://i.pravatar.cc/300?img=9"
  },
  {
    "name": "Sneha",
    "Prof": "UI/UX Designer",
    "company": "Google",
    "img": "https://i.pravatar.cc/300?img=10"
  }
];

  return (
    <>
    <div id='component-container'>

    {
      arr.map(function(elem,idx){
        return <div key={idx}>
          <Card user={elem.name} Prof={elem.Prof} company={elem.company} img={elem.img}/>
        </div>
      })
    }

    </div>
    </>
  )
}

export default App
