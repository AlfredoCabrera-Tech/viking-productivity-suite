import React from 'react'

function TimerButton(props) {

  const{
    role,
    name
  } = props

  return (
    <>
      <button onClick={role}>{name}</button>
    </>
  )
}

export default TimerButton