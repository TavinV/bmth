import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'

import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/discografia', element: <div>Discografia Page</div> },
  { path: '/sobre', element: <div>Sobre Page</div> },
  { path: '/contato', element: <div>Contato Page</div> },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
