import { useFormik } from 'formik'

const style = {
	margin: "0 auto"
}

// const Create = () => {
// 	return (
// 		<div style={style}>
// 			<h1>Create Recipe</h1>
// 			<Formik
// 				initalValues={{}}
// 			>
// 				<Form>
// 					<input type="text" id="title" name="title"/>
// 				</Form>
// 			</Formik>
// 		</div>
// 	)
// }

const Create = () => {
	const formik = useFormik({
		initialValues: {
			title: '',
			desc: ''
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
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
				<br/>
				<label htmlFor="desc">Description: </label>
				<input
					id="desc"
					name="desc"
					type="text"
					onChange={formik.handleChange}
					value={formik.values.desc}
				/>
				<br/>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default Create