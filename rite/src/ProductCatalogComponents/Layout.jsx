import React from 'react'
import { Outlet } from 'react-router-dom'
import CartTab from './CartTab'
import Header from './Header'

const Layout = () => {
  return (
    <div className='Layout-Container'>
     <main className='mainLayout-container'>
      <Header />
      <Outlet />
     </main>
      <CartTab /> 
    </div>
  )
}

export default Layout