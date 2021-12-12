import { useFormik } from 'formik'
import TextField from '@mui/material/TextField'

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
      <h4>{props.item.id}</h4>
      <TextField
        id="title"
        label="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      <br />
      <TextField
        id="desc"
        label="Description"
        value={formik.values.desc}
        onChange={formik.handleChange}
      />
      <br />
    </form>
  )
}

export default Step