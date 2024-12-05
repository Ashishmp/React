import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthLayout, Login } from './components/index.js'
import Home from './pages/Home.jsx'
import AddPost from "./pages/AddPost";
import EditPost from './pages/EditPost'
import AllPost from './pages/AllPosts'
import Post from './pages/Post'
import Signup from './pages/Signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: "login",
        element: (
                <AuthLayout authentication={false}>
                    <Login/>
                </AuthLayout> 
        )
      },
    
  

  {
    path: "/signup",
    element: (
        <AuthLayout authentication={false}>
            <Signup />
        </AuthLayout>
    ),
},
{
    path: "/all-posts",
    element: (
        <AuthLayout authentication>
            {" "}
            <AllPosts />
        </AuthLayout>
    ),
},
{
    path: "/add-post",
    element: (
        <AuthLayout authentication>
            {" "}
            <AddPost />
        </AuthLayout>
    ),
},
{
    path: "/edit-post/:slug",
    element: (
        <AuthLayout authentication>
            {" "}
            <EditPost />
        </AuthLayout>
    ),
},
{
    path: "/post/:slug",
    element: <Post />,
},
],

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>

    </RouterProvider>
    </Provider>
    
  </React.StrictMode>,
)
