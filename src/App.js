import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import UseStateTest from './components/UseStateTest'
import UseEffectTest from './components/UseEffectTest'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => setShow(false)}>NASCONDI COMPONENTE</Button>
        {/* <UseStateTest /> */}
        {show && <UseEffectTest />}
      </header>
    </div>
  )
}

export default App
