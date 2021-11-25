import { Link } from 'react-router-dom'
import RecipeView from './../components/RecipeView'
import AddButton from './../components/AddButton'
import { getAuth } from 'firebase/auth'

// const auth = getAuth();

function Home(props) {
  console.log(props.user)
  return (
    <div>
      <RecipeView />
      <Link to="/create">
        <AddButton />
      </Link>
    </div>
  )
}

export default Home;