import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Header from './Header.jsx'
import ContactPage from './Contact.jsx';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm.jsx';
import { Provider } from 'react-redux'
import store from './store/store.js'

const router= createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path:'/login',
    element:<LoginForm/>
  },
  {
    path:'/signup',
    element:<SignUpForm/>
  },
  {
    path:'/contact',
    element:<ContactPage/>
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
