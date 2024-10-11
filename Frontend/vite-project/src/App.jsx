import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./BackendApi/auth.js"
import {login, logout} from "./store/authSlice"
import {Header} from './Components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className="min-h-screen flex flex-col bg-blue-200">
      {/* Header */}
      <header className="w-ful shadow-md">
        <Header />
      </header>
      
      {/* Main Content */}
      {/* <main className="flex-grow flex flex-col items-center justify-center"> */}
        {/* Render the Outlet */}
        <Outlet />
      {/* </main> */}
      
      
    </div>
  ) : null;
  
}

export default App
