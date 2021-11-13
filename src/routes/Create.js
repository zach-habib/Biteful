import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import recipesData from './../components/recipesData.js'

const style = {
	margin: "0 auto"
}

const Create = () => {
	let navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			title: '',
			desc: ''
		},
		onSubmit: values => {
			const newRecipe = {
				id: recipesData.length,
				name: values.title,
				desc: values.desc
			}
			recipesData.push(newRecipe);
			navigate("..");
		}
	})

	return (
		<div>
			<h1>Create Recipe</h1>
			<form onSubmit={formik.handleSubmit}>
				<label htmlFor="title">Title: </label>
				<input
					id="title"
					name="title"
					type="text"
					onChange={formik.handleChange}
					value={formik.values.title}
				/>
				<br />
				<label htmlFor="desc">Description: </label>
				<input
					id="desc"
					name="desc"
					type="text"
					onChange={formik.handleChange}
					value={formik.values.desc}
				/>
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default Create