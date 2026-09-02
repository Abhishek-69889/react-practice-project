import React from 'react'

import './index.css'
import Card from './components/card'

const App = () => {
  // const det=[
  //   {
  //     "name":"Abhishek",
  //     "age":65,
  //     "city":"Lucknow"
  //   },
  //   {
  //     "name":"Nitika",
  //     "age":35,
  //     "city":"Lucknow"
  //   },
  //   {
  //     "name":"Yash",
  //     "age":53,
  //     "city":"Lucknow"
  //   },
  //   {
  //     "name":"Yashu",
  //     "age":69,
  //     "city":"Lucknow"
  //   },
  // ]
  return (
    <div>
      <Card user="Abhishek" age = {65}/>
      <Card user="Aman" age = {35}/>
      <Card user="Nitika" age = {30}/>
    </div>
  )
}

export default App
