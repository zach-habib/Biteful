import Button from '@mui/material/Button'
import { Paper } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'

const darkTheme = createTheme({ palette: { mode: 'dark' } });

const Sidebar = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper className="sidebar" elevation={40} background square>
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
      </Paper>
    </ThemeProvider>
  )
}

export default Sidebar;