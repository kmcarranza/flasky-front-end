import './App.css';
import Cat from './components/Cat';
import CatList from './components/CatList';
import Dog from './components/Dog';
import DogList from './components/DogList'

function App() {
  return (
  <main>
    <h1>List of Cats</h1>
    <Cat />
    <h1>List of Dogs</h1>
    <Dog />
  </main>
  );
}

export default App;
