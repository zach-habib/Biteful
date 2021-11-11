import { Link } from "react-router-dom"
import './App.css';
import RecipeView from "./components/RecipeView"
import AddButton from './components/AddButton'

function App() {
  return (
    <div className="App">
      <h1>Recipe App</h1>

      <RecipeView />
      <AddButton />
      <Link to="/create">Create</Link>
    </div>
  );
}

export default App;
