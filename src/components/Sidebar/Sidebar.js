import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button className="sidebar-button"
        variant="contained"
        sx={{ m: 0.5 }}
        component={Link}
        to="/"
        label="Home"
        value="home"
      >
        Home
      </Button>
      <Button className="sidebar-button"
        variant="contained"
        sx={{ m: 0.5 }}
        component={Link}
        to="/login"
        label="Login"
        value="login"
      >
        Login
      </Button>
      <Button className="sidebar-button"
        variant="contained"
        sx={{ m: 0.5 }}
        component={Link}
        to="/myrecipes"
        label="MyRecipes"
        value="myrecipes"
      >
        My Recipes
      </Button>
    </div>
  )
}

export default Sidebar;