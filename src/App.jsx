import { useState } from 'react'
import { Button } from "@/components/ui/button"

import './App.css'
import AppLayout from './layouts/AppLayout';
import LandingPage from './pages/LandingPage';
import { RouterProvider ,createBrowserRouter } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import JobPage from './pages/JobPage';
import SavedJobs from './pages/SavedJobs';
import MyJobs from './pages/MyJobs';
import PostJob from './pages/PostJob';
import JobListing from './pages/JobListing';
import { ThemeProvider } from './components/theme-provider';
import ProtectedRoute from './components/protected-route';



const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
         </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
           <ProtectedRoute>
            <JobListing />
          //  </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
           <ProtectedRoute>
            <PostJob />
           </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
           <ProtectedRoute>
            <MyJobs />
           </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
           <ProtectedRoute>
            <SavedJobs />
           </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
           <ProtectedRoute>
            <JobPage />
           </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  
  return (
    
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router}/>
    </ThemeProvider>
      
       
    
  )
}

export default App
