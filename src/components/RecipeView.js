import React from "react"
import RecipeCard from "./RecipeCard"

//props contains array of recipes

const RecipeView = (props) => {
  const recipeItems = props.recipes.map(recipe => {
    return <RecipeCard
      key={recipe.id}
      recipe={recipe}
      onDelete={props.onDelete}
    />
  })

  return (
    <div className="recipe-view">
      {recipeItems}
    </div>
  )
}

export default RecipeView