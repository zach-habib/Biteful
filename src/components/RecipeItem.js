import React from "react"

const RecipeItem = (props) => {
  return (
    <div className="recipeItem">
      <p>{props.data.name}</p>
      <p>{props.data.desc}</p>
    </div>
  )
}

export default RecipeItem