import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import CreateUser from './components/Tables/CreateUser'
import Home from './pages/Home/Home'
import CreateAccount from './pages/Signup/CreateAccount'
import CategoryPage from './pages/Categories/CategoryPage'
import Cart from './pages/Cart/Cart'
function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<CreateAccount />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/create-user' element={<CreateUser />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
