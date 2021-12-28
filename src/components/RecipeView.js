import React from "react"
import { Grid } from "@mui/material"
import RecipeCard from "./RecipeCard"

//props contains array of recipes
const RecipeView = (props) => {
  const recipeItems = props.recipes.map(recipe => {
    return (
      <Grid item xs={2} md={2}>
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onDelete={props.onDelete}
        />
      </Grid>
    )
  })

  return (
    <Grid
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