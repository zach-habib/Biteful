import React from 'react'
import { Link } from 'react-router-dom'

//todo: Make the login button navigate backwards instead of always going home
function Login(props) {
  return (
    <div>
      <Link to="/">
        <button onClick={props.login}>
          Log In
        </button>
      </Link>
    </div>
  )
}

export default Login