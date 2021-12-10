import { Link } from 'react-router-dom'
import RecipeView from './../components/RecipeView'
import AddButton from './../components/AddButton'
import { useFirebaseAuth } from '../FirebaseAuthProvider'

function Home() {
  return (
    <div className="main">
      <h1 className="text-blue-500 underline">Hello World!</h1>
      <RecipeView />
      <Link to="/create">
        <AddButton />
      </Link>
      <h3>Signed {useFirebaseAuth() ? "in" : "out"}</h3>

      <Link to="/login">
        <button>
          Log In Page
        </button>
      </Link>
    </div>
  )
}

export default Home;