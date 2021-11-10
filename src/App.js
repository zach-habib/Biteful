import logo from './logo.svg';
import './App.css';
import RecipeView from "./components/RecipeView"
import AddButton from './components/AddButton'

function App() {
  return (
    <div className="App">
      <h1>Recipe App</h1>

      <RecipeView/>
      <AddButton />
    </div>
  );
}

export default App;
