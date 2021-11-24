import { Link } from "react-router-dom"
import './App.css';
import RecipeView from "./components/RecipeView"
import AddButton from './components/AddButton'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDAQyMXDa-HVItPIQQjGT5qZu9GxBnhy8E",
  authDomain: "recipe-app-8f059.firebaseapp.com",
  projectId: "recipe-app-8f059",
  storageBucket: "recipe-app-8f059.appspot.com",
  messagingSenderId: "204166007972",
  appId: "1:204166007972:web:30c360b0934be2085daa31",
  measurementId: "G-8EX0CTJH0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
