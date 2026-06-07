import axios from "axios"
import { Edit2, Trash2 } from "lucide-react"

function NotesPanel({
  notes,
  getNotes,
  setSelectedNote,
}) {
  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/note/${id}`)
      getNotes();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="notes-panel">
      <div className="notes-container">
        {notes.map((note) => (
          <div key={note._id} className="note-card">
            <h3>{note.title}</h3>
            <hr />
            <p>
              {note.content.length > 80 ? note.content.slice(0, 80) + "..." : note.content}
            </p>

            <div className="card-actions">
              <button className="edit-btn" onClick={() =>setSelectedNote(note)}>
                <Edit2 size={13}/>
              </button>

              <button className="delete-btn" onClick={() => deleteNote(note._id)}>
                <Trash2 size={13}/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotesPanel;