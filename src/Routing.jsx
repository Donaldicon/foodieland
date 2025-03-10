import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './main/Navbar'
import Footer from './main/Footer'

//Pages
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import About from './pages/About'


const Routing = () => {

  return (
    <div>
        <Navbar />
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Recipes/>} path='/Recipes' />
            <Route element={<Blog/>} path='/Blog' />
            <Route element={<Contact/>} path='/Contact' />
            <Route element={<About/>} path='/About' />
        </Routes>
        <Footer />
    </div>
  )
}

export default Routing