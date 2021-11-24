import { Link } from "react-router-dom"
import './App.css';
import RecipeView from "./components/RecipeView"
import AddButton from './components/AddButton'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU_7DKDVODfNF-ZuxO5LbGvdASQi03Cu4",
  authDomain: "recipe-app-a0098.firebaseapp.com",
  projectId: "recipe-app-a0098",
  storageBucket: "recipe-app-a0098.appspot.com",
  messagingSenderId: "524216708649",
  appId: "1:524216708649:web:c1fcd8251a4ea8cc40f638",
  measurementId: "G-KQ0KB8FZDR"
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
