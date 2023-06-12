import { useState } from 'react'
import './App.css'

function App() {
  const [snake, setSnake] = useState({});

  let x = 100
  function control() {
    setSnake({
      transform: 'translateX(50%)',
      transform: `translateY(${x}%)`
    })
    x=x+100
  }

  return (
    <div className="App">
      <div className='snake' style={snake}></div>

      <section className='control'>
        <button className='a' onClick={control}>a</button>
        <button className='b'>b</button>
        <button className='c'>c</button>
        <button className='d'>d</button>
      </section>
    </div>
  )
}

export default App
