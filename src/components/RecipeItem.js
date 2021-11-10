import React from "react"

const style = {
    backgroundColor: "gray"
}

const RecipeItem = (props) => {
    return (
        <div style={style}>
            <p>{props.data.name}</p>
            <p>{props.data.desc}</p>
        </div>
    )
}

export default RecipeItem