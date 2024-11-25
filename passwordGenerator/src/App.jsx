import { useState } from 'react'



function App() {
const [length, setLength] = useState(8)
const [numberAllowed, setNumberAllowed] = useState(false)
const [charactersAllowed, setCharacterAllowed] = useState(false)
const [Password, setPassword]  = useState("")


  const PasswordGenerator = () => {}

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
