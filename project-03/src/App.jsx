import { useState } from "react"
import Form from "./components/Form"
import Notes from "./components/Notes"


function App() {
    const [notes, setNotes] = useState([])
    // console.log(notes)

  return (
    <>
     <div className="w-full h-screen flex  justify-between px-5 py-1">
      <Form setnotes={setNotes}/>
      <div className="w-1 h-full bg-amber-50"></div>
      <div className="w-4/5 h-full overflow-y-auto px-1">
        <h2 className="text-2xl font-bold">Recent notes</h2>
        <div className=' flex flex-wrap px-5 py-2 gap-1'>

      {/* <Notes notes={notes}/> */}
      {
  notes.map((note, index) => (
    <Notes
      key={index}
      idx={index}
      title={note.title}
      description={note.description}
    />
  ))
}
      </div>
      </div>
     </div>
    </>
  )
}

export default App
