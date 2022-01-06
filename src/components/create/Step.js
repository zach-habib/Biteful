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
    <div className="stepForm">
      <TextField className="title"
        id="title"
        label="Title"
        value={props.value.title}
        onChange={handleFieldChange("title")}
      />
      <TextField className="desc"
        id="desc"
        multiline
        rows={4}
        label="Description"
        value={props.value.desc}
        onChange={handleFieldChange("desc")}
      />
      {removeBtn}
    </div>
  )
}

export default Step