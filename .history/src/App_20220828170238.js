import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import {searchPokemon} from "./api"
function App() {
  return (
 <div>
  <Navbar />
  <Searchbar 
  onSearch={onSearch}
  />
 <div className='App'>

 </div>
 </div>
  );
}

export default App;
