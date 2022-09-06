import React, { useState, useRef, useEffect } from 'react'
import Countdown from 'react-countdown';
import TimerButton from '../TimerButton/TimerButton';
import TimerModes from '../TimerModes/TimerModes';


export const TimerContext = React.createContext()

function TimerHome() {

  /*================ useState =================== */

  const [timerMode, setTimerMode] = useState('pomodoro')
  const [timerCompleted, setTimerCompleted] = useState(true)
  const [pomodoroCounter, setPomodoroCounter] = useState(0)

  /*================ react-timer Renderer logic =================== */

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span> Listo, marico!</span>;
    } else {
      // Render a countdown
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };

  /*================ useRef for Timer element =================== */

  const timerRef = useRef()

  /*================ Logic for Timer Buttons =================== */
  
  
  const playTimer = () => {
    timerRef.current.start()
  }
  const pauseTimer = () => {
    timerRef.current.pause()
  }
  const stopTimer = () => {
    timerRef.current.stop()
  }
  
  /*================ Handlers for Timer =================== */

  const handleStart = () => {
   setTimerCompleted(false) 
  }
  
  const handleComplete = () => {
    setTimerCompleted(true)
  }

  //const status = timerRef.current.isCompleted()

  /*================ Number of Minutes for each Mode =================== */

  let number = 600000

  if (timerMode==='pomodoro') {
    number=0.05*60000
  } if (timerMode==='break') {
    number=0.05*60000
  } if (timerMode==='long-break') {
    number=0.05*60000
  }

  /*================ useContext value =================== */
  


  const timerContextValue = {
    playTimer,
    pauseTimer,
    stopTimer,
    timerMode,
    setTimerMode,
    pomodoroCounter,
    timerCompleted,
    setTimerCompleted,
    //status
  }
  
  /*================ useEffect value =================== */

  useEffect(() => {  
    if(timerCompleted && timerMode==='pomodoro'){
      
      if(pomodoroCounter>0 && (pomodoroCounter%4) === 0){
        setTimerMode('long-break')
      } if(pomodoroCounter>0 && (pomodoroCounter%4 !== 0)){
        setTimerMode('break')
      }
    } if(timerCompleted && timerMode==='break'){
      setTimerMode('pomodoro')
    } if(timerCompleted && timerMode==='long-break'){
      setTimerMode('pomodoro')
    }
  }, [timerCompleted,pomodoroCounter,timerMode])

  return (
    <TimerContext.Provider value={timerContextValue}>
      <div>
        <div>
          <Countdown
            date={Date.now() + number}
            renderer={renderer}
            onStart={handleStart}
            onComplete={handleComplete}
            autoStart={false}
            ref={timerRef}
          />
        </div>
        <TimerButton role={playTimer} name='Play'/>
        <TimerButton role={pauseTimer} name='Pause'/>
        <TimerButton role={stopTimer} name='Stop'/>
        <TimerModes />
        <p>{`You've done ${pomodoroCounter} pomodoros until now`}</p>

      
      </div>
    </TimerContext.Provider>
  )
}

export default TimerHome