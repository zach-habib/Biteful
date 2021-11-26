import { Link } from 'react-router-dom'
import RecipeView from './../components/RecipeView'
import AddButton from './../components/AddButton'
import { useFirebaseAuth } from '../FirebaseAuthProvider'

function Home() {
  console.log(useFirebaseAuth())  
  return (
    <div>
      <RecipeView />
      <Link to="/create">
        <AddButton />
      </Link>
      <h3>Signed {useFirebaseAuth() ? "in" : "out"}</h3>

      <Link to="/login">
        <button>
          Log In
        </button>
      </Link>
    </div>
  )
}

export default Home;