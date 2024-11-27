import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AboutUs from './components/AboutUS/AboutUs.jsx';
import Contact from './components/ContactUs/ContactUs.jsx';

// Define routes using `createBrowserRouter` and `createRoutesFromElements`
// const router = createBrowserRouter([
//   {
//     path: '/', // Corrected to '/'
//     element: <Layout />,
//     children: [
//       {
//         path: '', // Empty path corresponds to Home component
//         element: <Home />,
//       },
//       {
//         path: 'about', // Corrected path for AboutUs route
//         element: <AboutUs />,
//       },
//       {
//         path: 'ContactUs', // Corrected path for AboutUs route
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

// Render the app with RouterProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
