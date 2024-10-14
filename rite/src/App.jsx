import './App.css'
import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import ProtectRoute from './Services/ProtectRoute'
import Search from './ProductSearchComponents/Search'

import CartTab from './ProductCatalogComponents/CartTab'
import Header from './ProductCatalogComponents/Header'
import Layout from './ProductCatalogComponents/Layout'

import Detail from './ProductPagesComponets/Detail'
import HomePage from './ProductPagesComponets/HomePage'





const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
      <Routes>
         <Route path="/login" element={ <Login />} ></Route>
          <Route path="/register" element={ <Register />} ></Route>
        <Route path="/" element={ <Home />} ></Route>
      </Routes>
      </BrowserRouter> */}
      
    
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} /> 
          <Route path='/' element={<HomePage />} /> 
          <Route path='/:slug' element={<Detail />} >
           </Route>
        </Routes>
        </BrowserRouter>
     

      
    </div>
  )
}

export default App
