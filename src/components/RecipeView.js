import React from "react"
import { Grid } from "@mui/material"
import RecipeCard from "./RecipeCard"

//props contains array of recipes
const RecipeView = (props) => {
  const recipeItems = props.recipes.map(recipe => {
    return (
      <Grid item key={recipe.id}>
        <RecipeCard
          recipe={recipe}
          onDelete={props.onDelete}
          editable={props.editable}
        />
      </Grid>
    )
  })

  return (
    <Grid
      className="recipe-view"
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {recipeItems}
    </Grid>

  )
}

export default RecipeView