import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';

function Profile() {
    const [open, setOpen] = useState(false);
  return (
    <>
     <div className='border rounded shadow mb-5'> 
       <div className='d-flex justify-content-between align-items-center m-3'>
        <h3>My Profile</h3>
        <button onClick={() => setOpen(!open)} className='shadow btn p-3'><i className="fa-solid fa-angle-down"></i></button>
        </div>
       <Collapse in={open}>
            <div>
                <div className='d-flex justify-content-center align-items-center w-100'>
                    <label >
                        <input  style={{display:'none'}} type="file" />
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" style={{height:'200px',widows:'200px',borderRadius:'50%'}} alt="" />
                    </label>
                 </div>
                 <div className='m-3'>
                    <input type="text" className='form-control' placeholder='GitHub' />
                 </div>
                 <div className='m-3'>
                    <input type="text" className='form-control' placeholder='Linkedin' />
                 </div>
                 <div className='m-3 mb-5'>
                    <button className='btn btn-warning w-100'>Update</button>
                 </div>
            </div>
      </Collapse>
     </div>
    </>
  )
}

export default Profile