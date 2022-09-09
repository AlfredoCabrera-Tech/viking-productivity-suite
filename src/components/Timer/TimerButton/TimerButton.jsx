import React from 'react'
import {FaPlay, FaPause, FaStop, FaTimes} from 'react-icons/fa'

function TimerButton(props) {

  const{
    role,
    name,
    icon
  } = props

  const handleIcon = () => {
    if(icon === 'FaPlay'){
      return (
        <FaPlay />
      )
    }
    if(icon === 'FaPause'){
      return (
        <FaPause />
      )
    }
    if(icon === 'FaStop'){
      return (
        <FaStop />
      )
    }
    if(icon === 'FaTimes'){
      return (
        <FaTimes />
      )
    }
  }
  // {handleIcon + ` ${name}`}
  return (
    <>
      <button className={`btn btn-${name}`} onClick={role}>
        {
          handleIcon()
        }
        {
          (icon==='FaTimes') && <span> Delete Pomodoros</span>
        }
      </button>
    </>
  )
}

export default TimerButton