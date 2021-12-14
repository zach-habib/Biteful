import { useState } from "react"
import Step from './Step'

let data, setData

const HandleChange = (values) => {
  setData(prev => {
    const newRecipe = { ...prev }
    newRecipe.steps[values.id] = values
    return newRecipe
  })
}

const AddStep = () => {
  setData(prev => {
    const newStep = {
      id: prev.steps.length,
      title: '',
      desc: ''
    }
    return { ...prev, steps: [...prev.steps, newStep] }
  })
}

const Section = () => {
  [data, setData] = useState(
    {
      title: '',
      desc: '',
      steps: [<Step />]
    }
  )

  return (
    <div>
      {data.steps.map(item => {
        return (
          <Step
            key={item.id}
            item={item}
            onChange={HandleChange}
          />
        )
      })}
      <button onClick={AddStep}>Add Step</button>
    </div>
  )
}

export default Section