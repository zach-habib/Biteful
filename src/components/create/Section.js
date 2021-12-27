import { useEffect } from "react"
import Step from './Step'
import IngredientField from './IngredientField'
import { Fab } from "@mui/material"
import { Add, Delete, Remove } from "@mui/icons-material"

const StockStep = {
  title: '',
  desc: '',
}
const StockIngredient = { name: '', amount: 0 }

const Section = (props) => {
  const data = props.value
  const ParentChange = props.onChange;

  const HandleChange = (values, idx) => {
    let newData = [...data];
    newData[idx] = values;
    ParentChange(newData, props.id);
  }

  const AddItem = () => {
    let newData = [...data];
    newData[newData.length] =
      props.type === "ingredients" ?
        { ...StockIngredient }
        :
        { ...StockStep };
    ParentChange(newData, props.id);
  }

  const RemoveItem = (idx) => {
    let newData = data.filter((item, i) => (idx !== i))
    ParentChange(newData, props.id)
  }

  const GetSteps = () => {
    return data.map((item, idx) => {
      return (
        <Step
          key={idx}
          value={item}
          id={idx}
          onChange={HandleChange}
          onRemove={RemoveItem}
        />
      )
    })
  }

  const GetIngredients = () => {
    return data.map((item, idx) => {
      return (
        <IngredientField
          key={idx}
          value={item}
          id={idx}
          onChange={HandleChange}
          onRemove={RemoveItem}
        />
      )
    })
  }

  useEffect(() => {
    if (data.length === 0) AddItem();
  })

  return (
    <div>
      {props.type === "ingredients" ? GetIngredients() : GetSteps()}
      <Fab
        color="primary"
        size="small"
        aria-label="add"
        onClick={AddItem}
      >
        <Add />
      </Fab>
    </div>
  )
}

export default Section