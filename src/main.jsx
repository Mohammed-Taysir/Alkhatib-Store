import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'
import App from './App.jsx'
import { CssBaseline } from '@mui/material';
import ThemeContextProvider from './context/ThemeContext.jsx';
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  
    <>
        <ThemeContextProvider>
            <ToastContainer />
            <App />    
        </ThemeContextProvider>    
    </>
  
)
