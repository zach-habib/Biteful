import { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import Sidebar from "../components/sidebar/Sidebar";
import RecipeView from '../components/RecipeView';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createRecipeDoc } from '../util/RecipeConverter';

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([])
  const db = getFirestore();
  const navigate = useNavigate();

  //Fetches recipe data from firestore and updates state.
  //Todo: Change this to a query that only returns recipes made by the user.
  const fetchRecipes = async () => {
    const data = await getDocs(collection(db, "recipes"));
    const newRecipes = []
    data.forEach((doc) => {
      newRecipes.push({ ...doc.data(), id: doc.id });
    })
    setRecipes(newRecipes);
  }

  //Creates recipe on firebase,
  //then navigates to the create page
  const createRecipe = async () => {
    const docRef = await addDoc(collection(db, "recipes"), createRecipeDoc());
    if (docRef) navigate(`/create/${docRef.id}`);
  }

  //todo: Popup a confirmation window before deleting
  const deleteRecipe = async (recipeId) => {
    await deleteDoc(doc(db, "recipes", recipeId))

    setRecipes(recipes.filter(recipe => recipe.id !== recipeId));
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
          <RecipeView recipes={recipes} onDelete={deleteRecipe} />
        </div>
        <Button variant="contained" onClick={createRecipe}>
          Create
        </Button>
      </div>
    </div>
  )
}

export default MyRecipes