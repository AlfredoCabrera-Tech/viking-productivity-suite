import React from 'react'

function TasksList(props) {

  const {
    setMode,
  } = props

  const editTask = () => {
    setMode('edit')
    console.log('Entered Edit Mode')
  }
  const deleteTask = (e) => {
    //delete task
    console.log(e.target.id)
    console.log('Item with ID:-id- has been deleted')
  }

  return (
    <div>
      <p>TasksList</p>
      {<button onClick={editTask}>Edit</button>}
      {<button onClick={deleteTask}>Delete</button>}
    </div>
  )
}

export default TasksList