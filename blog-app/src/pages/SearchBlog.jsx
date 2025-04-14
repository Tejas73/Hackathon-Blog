import React from 'react'
import { Link } from 'react-router-dom'

const SearchBlog = () => {
  return (
    <div>
      <h1 className='page-header'>Search Blog</h1>
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div>
            <div className='mb-3'>
              <label for='ksearch'>Keywords:</label>
              <input
                type='search'
                id='ksearch'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Contents :</label>
              <textarea
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Category :</label>
              <select className='category'>
                <option value='1'>Nature </option>
                <option value='2'>Movie</option>
                <option value='3'>Music</option>
                <option value='4'>Technology</option>
                <option value='5'>Java</option>
              </select>
            </div>

            <div className='mb-3'>

              <button className='btn btn-success'>Create</button>

              <button className='btn btn-success'>Cancel</button>

            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}

export default SearchBlog
