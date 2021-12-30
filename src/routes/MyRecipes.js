import { useState, useEffect } from 'react'
import { useFirebaseAuth } from '../FirebaseAuthProvider';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, query, where } from 'firebase/firestore';
import Sidebar from "../components/sidebar/Sidebar";
import RecipeView from '../components/RecipeView';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createRecipeDoc } from '../util/RecipeConverter';
import ConfirmPopup from '../components/ConfirmPopup';

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([])
  const [showPopup, setPopup] = useState(false);
  const [recipeDelete, setRecipeDelete] = useState('');
  const db = getFirestore();
  const navigate = useNavigate();
  const auth = useFirebaseAuth();

  //Fetches recipe data from firestore and updates state.
  //Todo: Change this to a query that only returns recipes made by the user.
  const fetchRecipes = async () => {
    const q = query(collection(db, "recipes"), where("authorId", "==", auth.uid))
    const data = await getDocs(q);
    const newRecipes = []
    data.forEach((doc) => {
      newRecipes.push({ ...doc.data(), id: doc.id });
    })
    setRecipes(newRecipes);
  }

  //Creates recipe on firebase,
  //then navigates to the create page
  const createRecipe = async () => {
    const recipeDoc = createRecipeDoc();
    recipeDoc.authorId = auth.uid;
    const docRef = await addDoc(collection(db, "recipes"), recipeDoc);
    if (docRef) navigate(`/create/${docRef.id}`);
  }

  const handleDelete = (recipeId) => {
    setPopup(true);
    setRecipeDelete(recipeId);
  }

  //todo: Popup a confirmation window before deleting
  const deleteRecipe = async () => {
    await deleteDoc(doc(db, "recipes", recipeDelete))
    setRecipes(recipes.filter(recipe => recipe.id !== recipeDelete));
    setPopup(false);
  }

  //Fetch recipes only once when available.
  if (auth && recipes.length === 0) {
    fetchRecipes();
  }

  return (
    <div className="main">
      <Sidebar />

      <div className="content">
        {showPopup
          ?
          <ConfirmPopup
            onConfirm={deleteRecipe}
            onCancel={() => { setPopup(false) }}
          />
          :
          null
        }
        <h1>My Recipes</h1>
        <div className="recipes-view">
          <RecipeView
            recipes={recipes}
            onDelete={handleDelete}
            editable
          />
        </div>
        <Button variant="contained" onClick={createRecipe}>
          Create
        </Button>
      </div>
    </div>
  )
}

export default MyRecipes