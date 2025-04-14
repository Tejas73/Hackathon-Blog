import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register';
import AllBlogs from './pages/AllBlogs';
import CreateBlog from './pages/CreateBlog';
import MenuBoard from './pages/MenuBoard';
import SearchBlog from './pages/SearchBlog';

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
          path='all-blog'
          element={<AllBlogs />}
        />
        <Route
          path='create-blog'
          element={<CreateBlog />}
        />
        <Route
          path='menu-board'
          element={<MenuBoard />}
        />
        <Route
          path='search-blog'
          element={<SearchBlog />}
        />
      </Routes>
    </div>
  )
}

export default App

