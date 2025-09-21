import React from 'react'
import { RouterProvider } from 'react-router-dom'

import router from './routes'
import { CssBaseline } from '@mui/material'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client = {queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router = {router} />
      </QueryClientProvider>
    </>
  )
}

export default App