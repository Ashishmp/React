import { useState } from 'react'

import './App.css'

function App() {
  
  let [counter, setCounter] = useState(10)
  //let counter = 15
const addValue = () => {
  counter = counter + 1
  setCounter(counter)
  if(counter > 20){
    setCounter(20)
  }
}
const removeValue = () => {
  counter = counter - 1
  setCounter(counter)
  if(counter<=0){
    setCounter(0)
  }
}
  return (
    <>
    <h1>Hello visitor this is a learning repo</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue }>
      Add Value
      </button>
      <br />
      <button onClick={removeValue}>
      Remove Value
      </button>

      
    </>
  )
}

export default App
