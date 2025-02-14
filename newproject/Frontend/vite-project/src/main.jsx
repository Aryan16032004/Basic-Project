import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Header from './Header.jsx'
import ContactPage from './Contact.jsx';

const router= createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path:'/contact',
    element:<ContactPage/>
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
