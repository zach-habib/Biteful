import React from "react"

const style = {
    backgroundColor: "gray"
}

const RecipeItem = (props) => {
    return (
        <div style={style}>
            <p>{props.name}</p>
            <p>{props.desc}</p>
        </div>
    )
}

export default RecipeItem