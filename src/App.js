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
        <section className='tasks--area'>
          <TasksMain className="Tasks"/>
        </section>
        <section className='timer-notes--area'>
          <TimerMain className="Timer" />
          <NotesMain className="Notes" />
        </section>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
