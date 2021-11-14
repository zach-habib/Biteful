import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Step from './../components/Step'

let recipeData, setRecipe

const HandleChange = (values) => {
	setRecipe(prev => {
		const newRecipe = prev.slice()
		newRecipe[values.id] = values
		return newRecipe
	})
}

const AddStep = (prev) => {
	const newStep = {
		id: prev.length,
		title: '',
		desc: ''
	}

	setRecipe(prev => [...prev, newStep])
}

const Create = () => {
	[recipeData, setRecipe] = useState([{
		id: 0,
		title: '',
		desc: ''
	}])
	let navigate = useNavigate();

	return (
		<div>
			<h1>Create Recipe</h1>
			{recipeData.map(item => {
				return (
					<Step
						key={item.id}
						id={item.id}
						title={item.title}
						desc={item.desc}
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