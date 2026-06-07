import { useEffect, useState } from "react"
import axios from "axios"
import NotesPanel from "./components/NotesPanel"
import EditorPanel from "./components/EditorPanel"
import "./index.css"

function App() {
  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState(null)

  const getNotes = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/note/all")
      setNotes(res.data.notes)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <div className="app">
      <div className="hero">
        <h1 className="name">Notes App</h1>
        <p>By Rohit Rawat </p>
      </div>
      <hr className="line"/>
      <div className="dashboard">
        <EditorPanel selectedNote={selectedNote} getNotes={getNotes} setSelectedNote={setSelectedNote} />
      </div>
      <div className="panel-header">
        <h2>MY COLLECTIONS ⇊ </h2>
        <span>{notes.length}</span>
      </div>
      <div className="notediv">
        <NotesPanel notes={notes} getNotes={getNotes} setSelectedNote={setSelectedNote} />
      </div>
    </div>
  )
}

export default App;