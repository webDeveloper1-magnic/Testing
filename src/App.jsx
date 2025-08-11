
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Contact from './Components/Contact';
import Cart from './Components/Cart1';

function App() {

  return (
    <>
        <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
