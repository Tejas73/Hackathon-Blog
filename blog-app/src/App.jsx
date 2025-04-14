import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import MenuBoard from './pages/MenuBoard'
import CreateBlog from './pages/CreateBlog'
import AllBlogs from './pages/AllBlogs'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route
          path=''
          element={<Login />}
        />
        <Route
          path='register'
          element={<Register />}
        />
        <Route
          path='menu-board'
          element={<MenuBoard/>}
        />
        <Route
          path='create-blog'
          element={<CreateBlog/>}
        />
        <Route
          path='all-blog'
          element={<AllBlogs/>}
        />
        
      </Routes>
    </div>
  )
}

export default App
