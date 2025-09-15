import React from 'react'
import TopBar from '../components/header/TopBar'
import MidBar from '../components/header/MidBar'
import BottomBar from '../components/header/BottomBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

function MainLayout() {
  return (
    <>
        <TopBar />
        <MidBar />
        <BottomBar />
        <Outlet />
        <Footer />
        
    </>
  )
}

export default MainLayout