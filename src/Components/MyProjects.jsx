import React from 'react'
import AddProject from './AddProject'

function MyProjects() {
  return (
    <div className='card shadow p-3 mt-4 mb-5'>
        <div className='d-flex'>
            <h3>My Projects</h3>
            <div className='ms-auto'>
                <AddProject/>
            </div>
            </div>
            <div className="mt-4">
                <div className="border d-flex align-items-center rounded p-2">
                    <h5>Project Title</h5>
                    <div className="icon ms-auto">
                        <button className='btn'><i class="fa-regular fa-pen-to-square fa-2x"></i></button>
                        <button className='btn'><i class="fa-brands fa-github fa-2x"></i></button>
                        <button className='btn'><i class="fa-solid fa-trash fa-2x"></i></button>
                    </div>
                </div>
                <p className='text-danger fw-bolder mt-2'>No Projects Uploaded Yet..!</p>
            </div>
        </div>
   
  )
}

export default MyProjects 