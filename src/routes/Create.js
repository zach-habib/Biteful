import { Formik, Form, Field, ErrorMessage } from 'formik'

const style = {
	margin: "0 auto"
}

const Create = () => {
	return (
		<div style={style}>
			<h1>Create Recipe</h1>
			<Formik
				initalValues={{ email: 'test'}}
			>
				<Form>
					<Field type="email" name="email" />
				</Form>
			</Formik>
		</div>
	)
}

export default Create