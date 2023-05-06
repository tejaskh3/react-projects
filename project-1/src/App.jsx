import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import './styles/App.scss'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './components/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/contact'  element={<Contact/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App
