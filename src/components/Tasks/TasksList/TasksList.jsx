import React,{useEffect} from 'react'

function TasksList(props) {

  const {
    mode,
    setMode,
    tasks,
    setTasks
  } = props

  /* ====== TASKS BEHAVIOR ======= */

  const editTask = (e) => {
    setMode('edit')
    console.log('Entered Edit Mode for ' + e.currentTarget.parentNode.id)
  }
  const deleteTask = (e) => {
    //delete task
    setMode('delete')
    console.log('Item with ID: '+ e.currentTarget.parentNode.id +' has been deleted')
    localStorage.removeItem(e.currentTarget.parentNode.id)
    setTimeout(() => {
      setMode('')
    }, 0);
  }

  let tasksArray

  useEffect(() => {
    if(mode==='' && localStorage!==null){
      let keys = Object.keys(localStorage)
      tasksArray = keys.map(key => JSON.parse(localStorage.getItem(key)))
      setTasks([...tasksArray])
      console.log(tasksArray) 
   }
  }, [mode])

  return (
    <div>
      <p>TasksList</p>
      <section className='tasks'>
        {tasks.sort((a,b) => b-a).map((task, index) => {
          return (
            <div className={`task`} key={index} id={`task-${task.id}`} >
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