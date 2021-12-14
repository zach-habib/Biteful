import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFirebaseAuth } from '../FirebaseAuthProvider'
import Step from '../components/create/Step'
import Section from '../components/create/Section'
import recipesData from './../components/recipesData'
import Sidebar from "../components/sidebar/Sidebar"

const Create = () => {
	return (
		<div className="main">
			<Sidebar />
			<div className="content">
				<h1>Create Recipe</h1>
				<Section />
			</div>
		</div>
	)
}

export default Create