import React from 'react'

function TimerModes(props) {
  const {
    mode,
    setMode
  } = props

  return (
    <div>
      TimerModes
        <button onClick={() => setMode('pomodoro')}>New Pomodoro</button>
        <button onClick={() => setMode('break')}>New Break</button>
        <button onClick={() => setMode('long-break')}>New Long Break</button>
    </div>
  )
}

export default TimerModes