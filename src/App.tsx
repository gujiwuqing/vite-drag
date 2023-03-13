import { useState } from 'react'
import reactLogo from './assets/react.svg'
import View from './View';
import Tool from './Tool';
import Panel from './Panel';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Panel/>
      <View/>
      <Tool/>
    </div>
  )
}

export default App
