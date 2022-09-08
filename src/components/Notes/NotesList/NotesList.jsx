import React,{useEffect} from 'react'

function NotesList(props) {
  
  const {
    mode,
    setMode,
    notes,
    setNotes
  } = props

  /* ====== NOTES BEHAVIOR ======= */

  const editNote = (e) => {
    setMode('edit')
    console.log('Entered Edit Mode for ' + e.currentTarget.parentNode.id)
  }
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
      <p>NotesList</p>
      <section className='notes'>
        {notes.sort((a,b) => b-a).map((note, index) => {
          return (
            <div className={`note`} key={index} id={`note-${note.id}`} >
              <h2>{note.title}</h2>
              <p>{note.body}</p>
              <div>
                <input 
                  type="checkbox" 
                  name="priority" 
                  id={`note-${index}-priority`} 
                  checked={note.priority} 
                  readOnly/>
                <label 
                  htmlFor={`note-${index}-priority`}>Priority?</label>
              </div>
              <button 
                onClick={editNote}>Edit</button>
              <button 
                onClick={deleteNote}
              >Delete
              </button>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default NotesList