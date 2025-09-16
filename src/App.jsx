import React from 'react'
import { RouterProvider } from 'react-router-dom'

import router from './routes'
import { CssBaseline } from '@mui/material'


function App() {
  return (
    <>
      
      <RouterProvider router = {router} />
    </>
  )
}

export default App