import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout,Login,Courses,Course} from './Components'


// import Course from './pages/Course.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/dashboard",
            element: <Courses/>,
        },
        {
            path: "/",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
          path: "/course/:id",
          element: <Course />,
      },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
