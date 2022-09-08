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
      <div className="App">
        <TasksMain className="Tasks"/>
        <TimerMain className="Timer" />
        <NotesMain className="Notes" />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
