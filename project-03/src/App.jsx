import { useState } from "react"
import Form from "./components/Form"
import Notes from "./components/Notes"


function App() {
    const [notes, setNotes] = useState([])

  return (
    <>
     <div className="w-full h-screen flex  justify-between px-5 py-1">
      <Form setnotes={setNotes}/>
      <div className="w-1 h-full bg-amber-50"></div>
      <div className='w-4/5 h-full overflow-y-auto flex flex-wrap p-1 gap-1'>
      <Notes note={notes}/>
      </div>
     </div>
    </>
  )
}

export default App
