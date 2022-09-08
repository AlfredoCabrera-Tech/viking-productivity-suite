import React, { useState, useRef, useContext } from 'react'
import Countdown from 'react-countdown';

//COMPONENTS
import TimerButton from './TimerButton/TimerButton';

//CONTEXT
import { GlobalContext } from '../../App';

export const TimerContext = React.createContext()

function TimerMain() {

  const {
    notesOn,
    displayNotes
  } = useContext(GlobalContext)

  /*================ useState Timer Mode =================== */

  const [timerMode, setTimerMode] = useState('pomodoro')
  
  /*================ react-timer Renderer logic =================== */
  
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>Timer completed</span>;
    } else {
      // Render a countdown
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };
  
  /*================ useRef for Timer Element and Pomodoro Counter =================== */
  
  const timerRef = useRef()
  const pomodoroCounter = useRef(0)

  /*================ Logic for Timer Buttons =================== */
  
  const playTimer = (e) => {
    if(pomodoroCounter.current===0 && e.target.clicked){
      pomodoroCounter.current = 0
    }
    timerRef.current.start()
  }

  const pauseTimer = () => {
    timerRef.current.pause()
  }

  const stopTimer = () => {
    timerRef.current.stop()
  }

  const resetCounter = () => {
    pomodoroCounter.current = 0
  }
  
  /*================ Logic for timerMode changing automagically =================== */
  
  const handleComplete = () => {
    if(timerMode==='pomodoro' && (pomodoroCounter.current%4)===3 && pomodoroCounter.current!==0){
      setTimerMode('long-break')
    }
    if((timerMode==='pomodoro' && (pomodoroCounter.current%4)!==3) || pomodoroCounter.current===0){
      setTimerMode('break')
    }
    if(timerMode==='break'){
      pomodoroCounter.current = pomodoroCounter.current + 1
      setTimerMode('pomodoro')
    }
    if(timerMode==='long-break'){
      pomodoroCounter.current = pomodoroCounter.current + 1
      setTimerMode('pomodoro')
    }
    
  }

  /*================ Number of Minutes for each Mode =================== */

  let number = 600000

  if (timerMode==='pomodoro') {
    number=25*60000
  } if (timerMode==='break') {
    number=5*60000
  } if (timerMode==='long-break') {
    number=15*60000
  }
  /*================ useContext value =================== */

  const timerContextValue = {
    playTimer,
    pauseTimer,
    stopTimer,
    timerMode,
    setTimerMode,
    pomodoroCounter,
  }
  

  return (
    <TimerContext.Provider value={timerContextValue}>
      <div>
        <p>{`The current mode is: ${timerMode}`}</p>
        <div>
          <Countdown
            date={Date.now() + number}
            renderer={renderer}
            onComplete={handleComplete}
            autoStart={false}
            ref={timerRef}
          />
        </div>
        <TimerButton role={playTimer} name='Play'/>
        <TimerButton role={pauseTimer} name='Pause'/>
        <TimerButton role={stopTimer} name='Stop'/>
        <TimerButton role={resetCounter} name='Reset Counter'/>
        <p>{`You've done ${pomodoroCounter.current} pomodoros until now`}</p>
        <button onClick={displayNotes}>{notesOn ? "Hide Notes" : "Display Notes"}</button>
      </div>
    </TimerContext.Provider>
  )
}

export default TimerMain