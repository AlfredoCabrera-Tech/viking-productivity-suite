import React from 'react'

function TasksList(props) {

  const {
    setMode,
    tasks
  } = props

  /* ====== TASKS BEHAVIOR ======= */

  const editTask = (e) => {
    setMode('edit')
    console.log('Entered Edit Mode for ' + e.currentTarget.parentNode.id)
  }
  const deleteTask = (e) => {
    //delete task
    console.log(e.target.value)
    console.log('Item with ID:-id- has been deleted')
  }



  return (
    <div>
      <p>TasksList</p>
      <section className='tasks'>
        {tasks.map((task, index) => {
          return (
            <div className={`task`} key={index} id={`task-${index}`} >
              <h2>{task.title}</h2>
              <p>{task.body}</p>
              <div>
                <input type="checkbox" name="priority" id={`task-${index}-priority`} checked={task.priority} readOnly/>
                <label htmlFor={`task-${index}-priority`}>Priority?</label>
              </div>
              <button onClick={editTask}>Edit</button>
              <button onClick={deleteTask}>Delete</button>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default TasksList