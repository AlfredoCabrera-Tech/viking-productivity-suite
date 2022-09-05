import React, { useState, useRef } from 'react'
import Countdown from 'react-countdown';
import TimerModes from '../TimerModes/TimerModes';




function TimerHome() {

  const [timerMode, setTimerMode] = useState('pomodoro')

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span> Listo, marico!</span>;
    } else {
      // Render a countdown
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };

  const timerRef = useRef()

  const playTimer = () => {
    timerRef.current.start()
  }
  const pauseTimer = () => {
    timerRef.current.pause()
  }
  const stopTimer = () => {
    timerRef.current.stop()
  }

  const ButtonGroup = () => {
    return(
      <div>
        <button onClick={playTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={stopTimer}>Stop</button>
      </div>
    )
  }

  let number = 600000

  if (timerMode==='pomodoro') {
    number=25*60000
  } if (timerMode==='break') {
    number=5*60000
  } if (timerMode==='long-break') {
    number=15*60000
  }
  

  

  return (
    <div>
      <div>
        <Countdown
          date={Date.now() + number}
          renderer={renderer}
          autoStart={false}
          ref={timerRef}
        />
      </div>
      <ButtonGroup />
      <TimerModes mode={timerMode} setMode={setTimerMode} />
      
    </div>
  )
}

export default TimerHome