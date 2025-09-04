import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingScreen/LandingPage.jsx'
import Login from './pages/Login/Login.jsx'
import Signup from './pages/Signup/Signup.jsx'
import Profile from './pages/Profile/Profile.jsx'

let route = createBrowserRouter([
  {
    path: '/',
    Component: LandingPage
  },
  {
    path: '/login',
    Component: Login
  },
  {
    path: '/signup',
    Component: Signup
  },
  {
    path: '/profile',
    Component: Profile
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}>
    <StrictMode>
      <App />
    </StrictMode>,
  </RouterProvider>
)
