import React from 'react'
import { RouterProvider } from 'react-router-dom'

import router from './routes'
import { CssBaseline } from '@mui/material'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client = {queryClient}>
        <RouterProvider router = {router} />
      </QueryClientProvider>
    </>
  )
}

export default App