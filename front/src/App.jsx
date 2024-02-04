import './App.css'

import { Routes, Route, Link, Navigate } from 'react-router-dom'

import { UseAuthContextProvider } from './context/AuthContext'

import Home from './views/Home'
import Dashboard from './views/Dashboard'
import Login from './views/Login'
import Register from './views/Register'

import Header from './components/Header'
import Logout from './components/Logout'

import { ToastContainer } from 'react-toastify' 

const ProtectedRoute = ({children}) => {

  const { isAuthenticated } = UseAuthContextProvider()
  console.log(isAuthenticated)

  if(!isAuthenticated) return <Navigate to="/" />
  return children
  
}

const IsLogged = ({children}) => {
  const { isAuthenticated } = UseAuthContextProvider()
  

  if(isAuthenticated) return <Navigate to="/dashboard" />
  return children
}

function App() {
  
  const { isAuthenticated } = UseAuthContextProvider()

  return (
      <div className='max-w-[1400px] mx-2 xl:mx-auto'>
        <Header>
          {
            isAuthenticated
            ? <>
              <Link to="/dashboard">/Dashboard</Link>
              <Logout />
            </>
            : <Link to="/login">/Login</Link>
          }
          <a href="https://www.linkedin.com/in/adriel-machado-50892025a/" target='_blank'>LinkedIn</a>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/login" element={<IsLogged><Login /></IsLogged>} />
          <Route path="/register" element={<IsLogged><Register /></IsLogged>} />
        </Routes>
        <ToastContainer />
      </div>
  )
}

export default App
