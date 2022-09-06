import React, { useContext } from 'react'
import { TimerContext } from '../Timer/TimerHome'

function TimerModes() {

  const {
    timerMode,
    setTimerMode,
    //pomodoroCounter,
    timerCompleted
  } = useContext(TimerContext)

 /*  const handleChange = () => {
    if(timerCompleted && timerMode==='pomodoro' && (pomodoroCounter%4)===0){
      setTimerMode('long-break')
    } if(timerCompleted && timerMode==='pomodoro' && (pomodoroCounter%4)!==0){
      setTimerMode('break')
    } if(timerCompleted && timerMode==='break'){
      setTimerMode('pomodoro')
    } if(timerCompleted && timerMode==='long-break'){
      setTimerMode('pomodoro')
    }
  } */

  return (
    <div>
      TimerModes
        <button onClick={() => setTimerMode('pomodoro')}>New Pomodoro</button>
        <button onClick={() => setTimerMode('break')}>New Break</button>
        <button onClick={() => setTimerMode('long-break')}>New Long Break</button>
        <p>Current Mode is: {timerMode}</p>
        <p>{timerCompleted ? 'Timer Completed!' : 'Not done yet...'}</p>
    </div>
  )
}

export default TimerModes