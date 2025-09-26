import React, { useMemo, useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import router from './routes'
import { CssBaseline } from '@mui/material'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { CacheProvider } from '@emotion/react'
import theme, { createCacheWithDirection } from './theme'
import i18n from './i18n.jsx';

function App() {
  const queryClient = new QueryClient();
  const [direction, setDirection] = useState(i18n.dir());

  // إعادة تحديث عند تغيير اللغة (استخدم i18n events إذا كان i18next)
  i18n.on('languageChanged', (lng) => {
    const newDir = i18n.dir();
    setDirection(newDir);
    document.body.dir = newDir;  // حدث الـ body
  });

  const cache = useMemo(() => createCacheWithDirection(direction), [direction]);
  const currentTheme = useMemo(() => theme('light'), [direction]);  // أو 'dark' حسب الـ mode

  return (
    <>
    <CacheProvider value={cache}>
      <QueryClientProvider client = {queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router = {router} />
      </QueryClientProvider>
      </CacheProvider>
    </>
  )
}

export default App