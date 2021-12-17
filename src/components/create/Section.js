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
    let newData = { ...data };
    newData.steps[idx] = values;
    ParentChange(newData, props.id);
  }

  const AddStep = () => {
    let newData = { ...data };
    newData.steps[newData.steps.length] =
      props.type === "ingredient" ?
        { ...StockIngredient }
        :
        { ...StockStep };
    ParentChange(newData, props.id);
  }

  const GetSteps = () => {
    return data.steps.map((item, idx) => {
      return (
        <Step
          key={idx}
          values={item}
          id={idx}
          onChange={HandleChange}
        />
      )
    })
  }

  const GetIngredients = () => {
    return data.steps.map((item, idx) => {
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
    if (data.steps.length === 0) AddStep();
  })

  return (
    <div>
      {props.type === "ingredients" ? GetIngredients() : GetSteps()}
      <button onClick={AddStep}>Add Step</button>
    </div>
  )
}

export default Section