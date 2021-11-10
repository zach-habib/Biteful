import React from "react"

const style = {
    backgroundColor: "green",
    color: "white",
    width: "100px",
    margin: "0 auto"
}

const AddButton = () => {
    return (
        <button style={style}>
            <h2>Add</h2>
        </button>
    )
}

export default AddButton