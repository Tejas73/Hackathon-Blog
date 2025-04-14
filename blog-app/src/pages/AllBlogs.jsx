import React from 'react'
import { Link } from 'react-router-dom'

function AllBlogs() {
  return (
    <div>
      <h1 className='page-header'>My Blogs</h1>
      <div className='row'> 
        <div className='col'></div>
        <div className='col'>
          <div>
          
          <table class="table table-bordered border-primary">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Category</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                </tbody>
            </table>

          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}

export default AllBlogs
