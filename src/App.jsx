import React from 'react'
import Layout from './Layout/Layout'
import './App.css'
import { BrowserRouter, Route,Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import AboutUs from './pages/AboutUs/AboutUs'
import NotFound from './pages/NotFound/NotFound'
import Product from './pages/Prodcut page/Product'
import Blog from './pages/Blog/Blog'
import Cart from './pages/Cart/Cart'
import Register from './pages/Register/Register'
import './Global/style.scss'





function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='catalog' element={<Catalog/>}/>
          <Route path='aboutus' element={<AboutUs/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='blog' element={<Blog/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
       
    </>
  )
}

export default App
