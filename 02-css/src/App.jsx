import { useState } from 'react'
import Button from './components/Button/Button'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header/>
      <Button/>
    </div>
    </>
  )
}

export default App
