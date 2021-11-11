import { Link } from "react-router-dom"
import './App.css';
import RecipeView from "./components/RecipeView"
import AddButton from './components/AddButton'

function App() {
  return (
    <div className="App">
      <h1>Recipe App</h1>

      <RecipeView />
      <Link to="/create">
        <AddButton />
      </Link>
    </div>
  );
}

export default App;
