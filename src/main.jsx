import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import {ClerkProvider} from '@clerk/clerk-react'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/contact',
    element:<Contact/>
  }

])

// Import your publishable key
const PUBLISHABLE_KEY =k_test_cmVuZXdlZC1yaW5ndGFpbC03MC5jbGVyay5hY2NvdW50cy5kZXYk

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router}/>
    </ClerkProvider>
    
  </StrictMode>,
)
