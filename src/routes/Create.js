import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Step from './../components/Step'

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
		console.log(prev)
		const newStep = {
			id: prev.steps.length,
			title: '',
			desc: ''
		}
		// return [...prev.steps, newStep]
		return { ...prev, steps: [...prev.steps, newStep] }
	})
}

const Create = () => {
	// [recipeData, setRecipe] = useState([{
	// 	id: 0,
	// 	title: '',
	// 	desc: ''
	// }])
	[recipeData, setRecipe] = useState(
		{
			title: '',
			desc: '',
			steps: []
		}
	)
	let navigate = useNavigate();

	console.log(recipeData.steps)

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
			<h2>Preview: </h2>
			<p>{JSON.stringify(recipeData)}</p>
		</div>
	)
}

export default Create