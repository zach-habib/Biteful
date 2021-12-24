import React from "react"
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//idea: show recipe image on home page,
//and show details when hovered.

const RecipeCard = (props) => {
  let overview = { title: 'Unnamed Recipe', desc: 'No Description' }
  if (props.recipe.overview) overview = props.recipe.overview;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h3>{overview.title}</h3>
        <p>{overview.desc}</p>
      </CardContent>
      <CardActions>
        <Link to={`/create/${props.recipe.id}`}>
          <Button size="small">Edit</Button>
        </Link>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  )
}

export default RecipeCard