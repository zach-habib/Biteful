import React from "react"
import RecipeCard from "./RecipeCard"

//props contains array of recipes

const RecipeView = (props) => {
  const recipeItems = props.recipes.map(recipe => {
    return <RecipeCard recipe={recipe} />
  })

  return (
    <div className="recipe-view">
      {recipeItems}
    </div>
  )
}

export default RecipeView