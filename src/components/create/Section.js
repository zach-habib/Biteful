import { useEffect } from "react"
import Step from './Step'

const StockStep = {
  title: '',
  desc: '',
}

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
    newData.steps[newData.steps.length] = { ...StockStep };
    ParentChange(newData, props.id);
  }

  useEffect(() => {
    if (data.steps.length === 0) AddStep();
  })


  return (
    <div>
      {data.steps.map((item, idx) => {
        return (
          <Step
            key={idx}
            values={item}
            id={idx}
            onChange={HandleChange}
          />
        )
      })}
      <button onClick={AddStep}>Add Step</button>
    </div>
  )
}

export default Section