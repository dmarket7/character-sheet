import { useState } from 'react'
import { TextInput } from '@mantine/core'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <TextInput label="Character Name"/>
    </>
  )
}

export default App
