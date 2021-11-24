import { Link } from "react-router-dom"
import './App.css';
import RecipeView from "./components/RecipeView"
import AddButton from './components/AddButton'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDAQyMXDa-HVItPIQQjGT5qZu9GxBnhy8E",
  authDomain: "recipe-app-8f059.firebaseapp.com",
  projectId: "recipe-app-8f059",
  storageBucket: "recipe-app-8f059.appspot.com",
  messagingSenderId: "204166007972",
  appId: "1:204166007972:web:30c360b0934be2085daa31",
  measurementId: "G-8EX0CTJH0B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
let user = auth.currentUser;

getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    // TODO: Sync user with react state
    user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

function SignIn() {
  signInWithRedirect(auth, provider)
}

function App() {

  return (
    <div className="App">
      <h1>Recipe App</h1>
      {/* <RecipeView /> */}
      <Link to="/create">
        <AddButton />
      </Link>
      {user ? <RecipeView /> : <button onClick={SignIn}>Sign In</button>}

    </div>
  );
}

export default App;
