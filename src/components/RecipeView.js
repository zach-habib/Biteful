import React from "react"
import RecipeItem from "./RecipeItem"
import recipesData from "./recipesData"

const RecipeView = () => {
  const recipes = recipesData.map(item => <RecipeItem key={item.id} data={item} />)

  return (
    <div class="recipeView">
      {recipes}
    </div>
  )
}

export default RecipeView