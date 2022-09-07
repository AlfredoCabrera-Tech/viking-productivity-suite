import React, {useState} from 'react'

// COMPONENTS
import TasksList from './TasksList/TasksList'

function TasksMain() {

  /* ======== useState for mode (edit, new, or other) ========= */
  const [mode, setMode] = useState('')

  /* ======== Buttons behaviour (create mode/save/edit/delete) =========== */
  const createNewTask = () => {
    setMode('new')
  }
  
  const saveNewTask = () => {
    if(mode==='new'){
      console.log('New Task Added')
      setMode('')
    } if(mode==='edit'){
      console.log('Task Edited')
      setMode('')
    } 
  }

  return (
    <div>
      <p>TasksInput</p>
      {(mode==='new' || mode==='edit') && <div>
        <form className='task-form'>
          <label htmlFor="task-title">
            Task Title
          </label>
          <input type="text" name="title" id='task-title' placeholder='Enter Task Title'/>
          <label htmlFor="task-body">
            Task Body
          </label>
          <input type="text" name="body" id='task-body' placeholder='Enter Task Body'/>
          <div className='priority-label'>
            <input type="checkbox" name="priority" id="priority" />
            <label htmlFor="priority">
              High Priority?
            </label>
          </div>
        </form>
        <button onClick={saveNewTask}>Save Task</button>
      </div>}
      {mode!=='new' && mode!=='edit' && <button 
        onClick={createNewTask} >
        New Task
      </button>}
      <p>current mode is: {mode}</p>
      <TasksList
       setMode={setMode}
       mode={mode}
      />
    </div>
  )
}

export default TasksMain