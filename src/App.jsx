import { useState } from 'react'
import { TextInput } from '@mantine/core'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <TextInput label="Character Name"/>
        <TextInput label="Class & Level"/>
        <TextInput label="Background"/>
        <TextInput label="Player Name"/>
        <TextInput label="Alignment"/>
        <TextInput label="Experience Points"/>
    </>
  )
}

export default App
