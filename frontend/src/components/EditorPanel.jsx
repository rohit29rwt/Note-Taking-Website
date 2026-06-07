import { useEffect, useState } from "react"
import axios from "axios"

function EditorPanel({selectedNote, getNotes, setSelectedNote}) {
  const [title, setTitle] = useState("")

  const [content, setContent] = useState("")

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title)
      setContent(selectedNote.content)
    }
  }, [selectedNote])

  const handleSubmit =
    async () => {
      try {
        if (selectedNote) {
          await axios.put(`http://localhost:3000/api/note/${selectedNote._id}`,{ title,content})
        } else {
          await axios.post("http://localhost:3000/api/note/create",{title,content})
        }
        setTitle("")
        setContent("")
        setSelectedNote(null)
        getNotes()
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div className="editor-panel">
      <h2>
        {selectedNote ? "Edit Note": "Create New Note"}
      </h2>
      <p className="heading">TITLE</p>
      <input type="text" placeholder="Enter title..." value={title} onChange={(e) => setTitle(e.target.value)}/>
      <p className="heading">CONTENT</p>
      <textarea placeholder="Write your note here..." value={content} onChange={(e) => setContent(e.target.value)}/>
      <button className="save-btn" onClick={handleSubmit}>{selectedNote ? "Update Note" : "Create Note"} </button>
    </div>
  )
}

export default EditorPanel;