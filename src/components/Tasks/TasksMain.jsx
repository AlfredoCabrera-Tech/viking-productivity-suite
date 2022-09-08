import React, {useState} from 'react'

// COMPONENTS
import TasksList from './TasksList/TasksList'

function TasksMain() {
  let blankTask = {
    id: 0,
    title: '',
    body: '',
    priority: false,
    type: 'task'
  }
  
  /* ======== useState for mode (edit, new, or other) ========= */
  const [mode, setMode] = useState('')
  const [tasksArr, setTasksArr] = useState([])
  const [newTask, setNewTask] = useState({
    id: 0,
    title: '',
    body: '',
    priority: false,
    type: 'task'
  })

  /* ======== Buttons behaviour (create mode/save/edit/delete) =========== */
 const cancel = () => {
  setMode('')
 }
 
  const createNewTask = () => {
    setMode('new')
  }
  
  const saveNewTask = () => {
    if(mode==='new'){
      setNewTask({
        ...newTask,
      })
      localStorage.setItem(`task-${newTask.id}`, JSON.stringify(newTask))
      console.log('New Task Added')
      setNewTask(blankTask)
      setMode('')
    } if(mode==='edit'){
      console.log('Task Edited')
      setMode('')
    } 
  }
  /*======== HANDLE CHANGE =========  */

  const handleChange = (e) => {
    if(e.currentTarget.name === 'title'){
      setNewTask({
        ...newTask,
        title: e.target.value,
        id: newTask.id + Math.floor(Math.random()*1000)
      })
    }
    if(e.currentTarget.name === 'body'){
      setNewTask({
        ...newTask,
        body: e.target.value
      })
    }
    if(e.currentTarget.name === 'priority'){
      setNewTask({
        ...newTask,
        priority: e.target.checked
      })
    }
  }

  return (
    <div>
      <h2>Tasks Tracker</h2>
      {(mode==='new' || mode==='edit') && <div>
        <form className='task-form'>
          <label 
            htmlFor="task-title">
            Task Title
          </label>
          <input 
            type="text" 
            name="title" 
            id='task-title'
            onChange={handleChange} 
            placeholder='Enter Task Title'/>
          <label 
            htmlFor="task-body">
            Task Body
          </label>
          <input 
            type="text" 
            name="body" 
            id='task-body'
            onChange={handleChange} 
            placeholder='Enter Task Body'/>
          <div className='priority-label'>
            <input 
              type="checkbox" 
              name="priority" 
              id="priority"
              onChange={handleChange} />
            <label 
              htmlFor="priority">
              High Priority?
            </label>
          </div>
        </form>
        <button onClick={saveNewTask}>Save Task</button>
        <button onClick={cancel}>Cancel</button>
      </div>}
      {mode!=='new' && mode!=='edit' && <button 
        onClick={createNewTask} >
        New Task
      </button>}
      <TasksList
       setMode={setMode}
       mode={mode}
       setTasks={setTasksArr}
       tasks={tasksArr}
      />
    </div>
  )
}

export default TasksMain