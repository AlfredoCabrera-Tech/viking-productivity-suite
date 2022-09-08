import React, { useEffect, useState } from 'react'
import {FaEdit, FaCheck, FaTrashAlt} from 'react-icons/fa'

function TasksList(props) {

  const [taskCounter, setTaskCounter] = useState(0)

  const {
    mode,
    setMode,
    tasks,
    setTasks
  } = props

  /* ====== TASKS BEHAVIOR ======= */

  const deleteTask = (e) => {
    //delete task
    setMode('delete')
    console.log('Item with ID: '+ e.currentTarget.parentNode.id +' has been deleted')
    localStorage.removeItem(e.currentTarget.parentNode.id)
    setTimeout(() => {
      setMode('')
    }, 0);
  }
  const doneTask = (e) => {
    setMode('delete')
    console.log('Item with ID: '+ e.currentTarget.parentNode.id +' has been deleted')
    localStorage.removeItem(e.currentTarget.parentNode.id)
    setTimeout(() => {
      setMode('')
    }, 0);
    setTaskCounter(prev => prev+1)
  }

  const resetCounter = () => {
    setTaskCounter(0)
  }

  let tasksArray

  useEffect(() => {
    if(mode==='' && localStorage!==null){
      let keys = Object.keys(localStorage)
      tasksArray = keys.map(key => JSON.parse(localStorage.getItem(key))).filter(task => task.type==='task')
      setTasks([...tasksArray])
      console.log(tasksArray) 
   }
  }, [mode])

  return (
    <div>
      <p>You have accomplished {taskCounter} tasks today!</p>
      <div className="btn-container">
        <button className={`btn btn-Reset`} onClick={resetCounter}>Reset Task Count</button>
      </div>
      <section className='tasks'>
        {tasks.sort((a,b) => b-a).map((task, index) => {
          return (
            <div className={`task`} key={index} id={`task-${task.id}`} data-priority={task.priority} >
              <h2>{task.title}</h2>
              <p>{task.body}</p>
              {task.priority && <p className="priority-task">IMPORTANT!</p> }
              <button className={`btn btn-Done`} onClick={doneTask}><FaCheck/> Done</button>
              <button className={`btn btn-Delete`} onClick={deleteTask}><FaTrashAlt/> Delete</button>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default TasksList