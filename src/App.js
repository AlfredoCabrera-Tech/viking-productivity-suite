import React,{ useState } from 'react'
import './App.scss';

// COMPONENTS
import TasksMain from './components/Tasks/TasksMain';
import TimerMain from './components/Timer/TimerMain';
import NotesMain from './components/Notes/NotesMain';

export const GlobalContext = React.createContext()

function App() {
  const [notesOn, setNotesOn] = useState(false)

  const displayNotes = () => {
    setNotesOn(prev => !prev)
  }

  const globalContextValue = {
    notesOn,
    setNotesOn,
    displayNotes
  }

  return (
    <GlobalContext.Provider value={globalContextValue}>
      <div>
          <h1>Viking Codes</h1><h1>Productivity Suite</h1>
        <div className="App">
            <div id='T1'>
              <TasksMain className="Tasks" />
            </div>
            <div id='T2'>
              <TimerMain className="Timer" id="Timer-component"/>
            </div>
            <div id='T3'>
              <NotesMain className="Notes" />
            </div>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
