import { useFormik } from 'formik'

let ChangeHandler;

const validate = (values) => {
  ChangeHandler(values)
}

const Step = (props) => {
  ChangeHandler = props.onChange

  const formik = useFormik({
    initialValues: {
      id: props.item.id,
      title: props.item.title,
      desc: props.item.desc
    },
    validateOnChange: true,
    validate: validate
  })

  return (
    <form>
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
    </form>
  )
}

export default Step