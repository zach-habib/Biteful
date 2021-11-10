import logo from './logo.svg';
import './App.css';
import RecipeItem from './components/RecipeItem'
import AddButton from './components/AddButton'

function App() {
  return (
    <div className="App">
      <h1>Recipe App</h1>

      <RecipeItem name="Recipe Name" desc="Description"/>
      <AddButton />
    </div>
  );
}

export default App;
