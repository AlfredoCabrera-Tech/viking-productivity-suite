import React, {useState, useContext} from 'react'

//COMPONENTS
import NotesList from './NotesList/NotesList'

//CONTEXT
import { GlobalContext } from '../../App'
import { FaPlus } from 'react-icons/fa'

function NotesMain() {

  const {
    notesOn,
  } = useContext(GlobalContext)

  console.log(notesOn)

  let blankNote = {
    id: 0,
    title: '',
    body: '',
    priority: false,
    type: 'note'
  }

  /* ======== useState for mode (edit, new, or other) ========= */
  const [mode, setMode] = useState('')
  const [notesArr, setNotesArr] = useState([])
  const [newNote, setNewNote] = useState({
    id: 0,
    title: '',
    body: '',
    priority: false,
    type: 'note'
  })

  /* ======== Buttons behaviour (display/create/save/delete) =========== */
  const cancel = () => {
  setMode('')
 }
 
  const createNewNote = () => {
    setMode('new')
  }
  
  const saveNewNote = () => {
    if(mode==='new'){
      setNewNote({
        ...newNote,
      })
      localStorage.setItem(`note-${newNote.id}`, JSON.stringify(newNote))
      console.log('New Note Added')
      setNewNote(blankNote)
      setMode('')
    } if(mode==='edit'){
      console.log('Note Edited')
      setMode('')
    } 
  }
  /*======== HANDLE CHANGE =========  */

  const handleChange = (e) => {
    if(e.currentTarget.name === 'title'){
      setNewNote({
        ...newNote,
        title: e.target.value,
        id: newNote.id + Math.floor(Math.random()*1000)
      })
    }
    if(e.currentTarget.name === 'body'){
      setNewNote({
        ...newNote,
        body: e.target.value
      })
    }
    if(e.currentTarget.name === 'priority'){
      setNewNote({
        ...newNote,
        priority: e.target.checked
      })
    }
  }

  return (
    <>
      {notesOn && 
      <div>
        <h2 className='notes-component__title'>Notes</h2>
        {(mode==='new' || mode==='edit') && <div>
          <form className='note-form'>
            <label 
              htmlFor="note-title">
              Note Title
            </label>
            <input 
              type="text" 
              name="title" 
              id='note-title'
              onChange={handleChange} 
              placeholder='Enter Note Title'/>
            <label 
              htmlFor="note-body">
              Note Body
            </label>
            <textarea
              name="body" 
              id='note-body'
              onChange={handleChange} 
              placeholder='Enter Note Body'/>
            <div className='priority-label'>
              <input 
                type="checkbox" 
                name="priority" 
                id="note-priority"
                onChange={handleChange} />
              <label 
                htmlFor="note-priority">
                High Priority?
              </label>
            </div>
          </form>
          <button className={`btn btn-Save`} onClick={saveNewNote}>Save Note</button>
          <button className={`btn btn-Cancel`} onClick={cancel}>Cancel</button>
        </div>}
        {mode!=='new' && mode!=='edit' && <button 
          onClick={createNewNote} className='new-note__btn btn btn-New'>
          <FaPlus /> New Note
        </button>}
        <NotesList
        setMode={setMode}
        mode={mode}
        setNotes={setNotesArr}
        notes={notesArr}
        />
      </div>}
    </>
  )
}

export default NotesMain