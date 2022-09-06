import React from 'react'
import TasksInput from './TasksInput/TasksInput'
import TasksList from './TasksList/TasksList'

function TasksMain() {
  return (
    <div>
      <TasksInput />
      <TasksList />
    </div>
  )
}

export default TasksMain