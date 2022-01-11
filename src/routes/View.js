import { useState, useEffect } from "react"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { docToRecipe } from "../util/RecipeConverter"
import Sidebar from "../components/sidebar/Sidebar"
import { Paper } from "@mui/material"

const View = () => {
  const [recipe, setRecipe] = useState(docToRecipe({}));
  const { recipeId } = useParams();
  let db, docRef, docSnap;
  db = getFirestore();

  const fetchRecipe = async () => {
    docRef = doc(db, "recipes", recipeId);
    docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setRecipe(docToRecipe(docSnap.data()))
    } else {
      // doc.data() will be undefined in this case
      // maybe prompt an error in the future.
      console.log("No such document!");
    }
  }
  useEffect(() => {
    fetchRecipe();
  }, [])

  console.log(recipe)

  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        <Paper className="recipe-paper"
          elevation={6}
          sx={{ width: 1000, minHeight: 900, p: 1 }}
        >
          <h1>{recipe[0].title}</h1>
          <p>{recipe[0].desc}</p>

          <h3>Ingredients</h3>
          {recipe[1].map((item, idx) => {
            return <p key={idx}>{idx + 1}. {item.name}</p>
          })}

          <h3>Directions</h3>
          {recipe[2].map((item, idx) => {
            return <p key={idx}>{idx + 1}. {item.title}</p>
          })}
        </Paper>
      </div>
    </div>
  )
}

export default View