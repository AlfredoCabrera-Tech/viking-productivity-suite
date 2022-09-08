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
      return <h3 className='timer-counter'>{hours}:{minutes}:{seconds}</h3>;
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
        <h2>Pomodoro Timer</h2>
        <p>The current mode is: <b>{timerMode}</b></p>
        <div>
          <Countdown
            date={Date.now() + number}
            renderer={renderer}
            onComplete={handleComplete}
            autoStart={false}
            ref={timerRef}
          />
        </div>
        <div className="timer-btn--container">
          <TimerButton role={playTimer} name='Play' icon='FaPlay'/>
          <TimerButton role={pauseTimer} name='Pause' icon='FaPause'/>
          <TimerButton role={stopTimer} name='Stop' icon='FaStop'/>
        </div>
        <p>{`You've done ${pomodoroCounter.current} pomodoros until now`}</p>
        <TimerButton role={resetCounter} name='Reset Counter' icon='FaTimes'/>
        <br />
        <button className={`btn btn-display`} onClick={displayNotes}>{notesOn ? "Hide Notes" : "Display Notes"}</button>
      </div>
    </TimerContext.Provider>
  )
}

export default TimerMain