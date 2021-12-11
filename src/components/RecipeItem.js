import React from "react"

//idea: show recipe image on home page,
//and show details when hovered.

const RecipeItem = (props) => {
  return (
    <div className="recipeItem">
      <p>{props.data.name}</p>
      <p>{props.data.desc}</p>
    </div>
  )
}

export default RecipeItem