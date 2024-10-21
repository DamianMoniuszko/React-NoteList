import './App.css';
import NoteList from './components/NotesList/noteList';

function App() {

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <NoteList />
    </div>
  );
};

export default App;
