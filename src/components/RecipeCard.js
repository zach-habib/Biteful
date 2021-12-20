import React from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//idea: show recipe image on home page,
//and show details when hovered.

const RecipeCard = (props) => {
  const handleEdit = (recipeId) => (event) => {

  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h3>{props.recipe.data.title}</h3>
        <p>{props.recipe.data.description}</p>
      </CardContent>
      <CardActions>
        <Button size="small" onChange={handleEdit()}>Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  )
}

export default RecipeCard