import React from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//idea: show recipe image on home page,
//and show details when hovered.

const RecipeCard = (props) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h3>{props.recipe.title}</h3>
        <p>{props.recipe.description}</p>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  )
}

export default RecipeCard