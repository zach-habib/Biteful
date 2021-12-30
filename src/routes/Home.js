import { useState, useEffect } from 'react'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import RecipeView from './../components/RecipeView'
import { useFirebaseAuth } from '../FirebaseAuthProvider'
import Sidebar from '../components/sidebar/Sidebar'

function Home() {
  const [recipes, setRecipes] = useState([]);
  const db = getFirestore();


  const fetchRecipes = async () => {
    const data = await getDocs(collection(db, "recipes"));
    const newRecipes = []
    data.forEach((doc) => {
      newRecipes.push({ ...doc.data(), id: doc.id });
    })
    setRecipes(newRecipes);
  }

  useEffect(() => {
    fetchRecipes();
  }, [])

  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        <h1>Biteful</h1>

        <div className="recipes-view">
          <RecipeView
            recipes={recipes}
          />
        </div>

        <h3>Signed {useFirebaseAuth() ? "in" : "out"}</h3>

        <Link to="/login">
          <button>
            Log In Page
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home;