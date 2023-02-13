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
import MenuPage from './pages/MenuPage'

function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
