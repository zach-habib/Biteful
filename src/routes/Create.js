import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFirebaseAuth } from '../FirebaseAuthProvider'
import Step from './../components/Step'
import recipesData from './../components/recipesData'

let recipeData, setRecipe

const HandleChange = (values) => {
	setRecipe(prev => {
		const newRecipe = { ...prev }
		newRecipe.steps[values.id] = values
		return newRecipe
	})
}

const AddStep = () => {
	setRecipe(prev => {
		const newStep = {
			id: prev.steps.length,
			title: '',
			desc: ''
		}
		return { ...prev, steps: [...prev.steps, newStep] }
	})
}

const Create = () => {
	[recipeData, setRecipe] = useState(
		{
			title: '',
			desc: '',
			steps: []
		}
	)
	let navigate = useNavigate();
	let auth = useFirebaseAuth();

	const HandleSubmit = () => {
		recipesData.push(recipeData)
		navigate("..")
		console.log(recipeData)
	}

	//Redirect to login page if logged out
	useEffect(() => {
		if (!auth) {
			navigate("/login")
		}
	})

	return (
		<div>
			<h1>Create Recipe</h1>
			<h2>Title</h2>
			{recipeData.steps.map(item => {
				return (
					<Step
						key={item.id}
						item={item}
						onChange={HandleChange}
					/>
				)
			})}
			<button onClick={AddStep}>Add Step</button>
			<button onClick={HandleSubmit}>Submit</button>
			<h2>Preview: </h2>
			<p>{JSON.stringify(recipeData)}</p>
		</div>
	)
}

export default Create