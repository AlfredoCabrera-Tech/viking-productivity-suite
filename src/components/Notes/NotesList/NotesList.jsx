import React,{useEffect} from 'react'
import { FaTrashAlt } from 'react-icons/fa'

function NotesList(props) {
  
  const {
    mode,
    setMode,
    notes,
    setNotes
  } = props

  /* ====== NOTES BEHAVIOR ======= */

  const deleteNote = (e) => {
    //delete note
    setMode('delete')
    console.log('Item with ID: '+ e.currentTarget.parentNode.id +' has been deleted')
    localStorage.removeItem(e.currentTarget.parentNode.id)
    setTimeout(() => {
      setMode('')
    }, 0);
  }

  let notesArray

  useEffect(() => {
    if(mode==='' && localStorage!==null){
      let keys = Object.keys(localStorage)
      notesArray = keys.map(key => JSON.parse(localStorage.getItem(key))).filter(note => note.type==='note')
      setNotes([...notesArray])
      console.log(notesArray) 
   }
  }, [mode])

  return (
    <div>
      <section className='notes'>
        {notes.sort((a,b) => b-a).map((note, index) => {
          return (
            <div className={`note`} key={index} id={`note-${note.id}`} data-priority={note.priority} >
              <h2>{note.title}</h2>
              <p>{note.body}</p>
              {note.priority && <p className="priority-note">IMPORTANT!</p> }
              <button className={`btn btn-Delete`}
                onClick={deleteNote}
              ><FaTrashAlt /> Delete
              </button>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default NotesList