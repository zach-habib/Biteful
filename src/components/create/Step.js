import TextField from '@mui/material/TextField'

import './Step.css'

const Step = (props) => {
  const ChangeHandler = props.onChange

  const handleFieldChange = (fieldName) => (event) => {
    let newValues = { ...props.values }; //Copy values object

    //Change the associated parameter
    if (fieldName === "title") newValues.title = event.target.value;
    if (fieldName === "desc") newValues.desc = event.target.value;

    //Call change handler of parent component
    ChangeHandler(newValues, props.id);
  }

  return (
    <form className="stepForm">
      <TextField className="title"
        id="title"
        label="Title"
        value={props.values.title}
        onChange={handleFieldChange("title")}
      />
      <TextField className="desc"
        id="desc"
        multiline
        rows={4}
        label="Description"
        value={props.values.desc}
        onChange={handleFieldChange("desc")}
      />
    </form>
  )
}

export default Step