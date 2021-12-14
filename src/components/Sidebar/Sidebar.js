import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        variant="contained"
        component={Link}
        to="/"
        label="Home"
        value="home"
      >
        Home
      </Button>
      <Button
        variant="contained"
        component={Link}
        to="/login"
        label="Login"
        value="login"
      >
        Login
      </Button>
      <Button
        variant="contained"
        component={Link}
        to="/create"
        label="Create"
        value="create"
      >
        Create
      </Button>
    </div>
  )
}

export default Sidebar;