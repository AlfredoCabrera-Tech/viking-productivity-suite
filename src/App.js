import './App.css';

// COMPONENTS
import TasksMain from './components/Tasks/TasksMain';
import TimerMain from './components/Timer/TimerMain';
import NotesMain from './components/Notes/NotesMain';

function App() {
  return (
    <div className="App">
      <TasksMain className="Tasks"/>
      <TimerMain className="Timer" />
      <NotesMain className="Notes" />
    </div>
  );
}

export default App;
