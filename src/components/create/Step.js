import { TextField, Fab } from '@mui/material'
import { Remove } from '@mui/icons-material'

const Step = (props) => {
  const ChangeHandler = props.onChange

  const handleFieldChange = (fieldName) => (event) => {
    let newValue = { ...props.value }; //Copy values object

    //Change the associated parameter
    if (fieldName === "title") newValue.title = event.target.value;
    if (fieldName === "desc") newValue.desc = event.target.value;

    //Call change handler of parent component
    ChangeHandler(newValue, props.id);
  }

  const removeBtn = props.onRemove ?
    <Fab
      className="remove-button"
      sx={{mx: 1}}
      color="primary"
      size="small"
      aria-label="remove"
      onClick={() => { props.onRemove(props.id) }}
    >
      <Remove />
    </Fab>
    :
    null;

  return (
    <div className="step-form">
      <div className="step-field-container">
        <TextField
          id="title"
          label="Title"
          sx={{ margin: 1 }}
          value={props.value.title}
          onChange={handleFieldChange("title")}
        />
        <TextField
          id="desc"
          multiline
          rows={4}
          label="Description"
          sx={{ margin: 1 }}
          value={props.value.desc}
          onChange={handleFieldChange("desc")}
        />
      </div>
      {removeBtn}
    </div>
  )
}

export default Step