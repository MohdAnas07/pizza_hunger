import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Home from './pages/Home'
import './scss/app.scss'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <Home />

      {/* <Footer /> */}
    </div>
  )
}

export default App
