import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <Button variant="contained">Home</Button>
      </Link>
      <Link to="login">
        <Button variant="contained">Login</Button>
      </Link>
      <Link to="create">
        <Button variant="contained">create</Button>
      </Link>
    </div>
  )
}

export default Sidebar;