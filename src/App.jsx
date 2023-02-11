import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Home from './pages/Home'
import './scss/app.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Contact from './pages/Contact'
import Cart from './pages/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='#Menu' element={<Home />} /> */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
