import { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Sidebar from "../components/sidebar/Sidebar";
import RecipeView from '../components/RecipeView';

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([])

  //Fetches recipe data from firestore and updates state.
  //Todo: Change this to a query that only returns recipes made by the user.
  const fetchRecipes = async () => {
    const db = getFirestore();
    const data = await getDocs(collection(db, "recipes"));
    const newRecipes = []
    data.forEach((doc) => {
      newRecipes.push(doc.data())
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
        <h1>My Recipes</h1>
        <div className="recipes-view">
          <RecipeView recipes={recipes} />
        </div>
      </div>
    </div>
  )
}

export default MyRecipes