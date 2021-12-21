import { useEffect } from "react"
import Step from './Step'
import IngredientField from './IngredientField'

const StockStep = {
  title: '',
  desc: '',
}
const StockIngredient = { name: '', amount: 0 }

const Section = (props) => {
  const data = props.value
  const ParentChange = props.onChange;

  const HandleChange = (values, idx) => {
    let newData = [ ...data ];
    newData[idx] = values;
    ParentChange(newData, props.id);
  }

  const AddItem = () => {
    let newData = [ ...data ];
    newData[newData.length] =
      props.type === "ingredient" ?
        { ...StockIngredient }
        :
        { ...StockStep };
    ParentChange(newData, props.id);
  }

  const GetSteps = () => {
    return data.map((item, idx) => {
      return (
        <Step
          key={idx}
          value={item}
          id={idx}
          onChange={HandleChange}
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
      <button onClick={AddItem}>Add Item</button>
    </div>
  )
}

export default Section