import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/button'
import Welcome from './components/handler'
import Greet from './components/handler1'
import FormExample from './components/formhandler'
import ToggleMessage from './components/handler2'
import Advancehooks from './components/Advancehooks'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greet />
      <Welcome />
      <Counter />
      <FormExample />
      <ToggleMessage />
      <Advancehooks/>
    </>

  )
}

export default App
