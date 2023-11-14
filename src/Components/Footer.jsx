import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer d-flex flex-column  justify-content-center bg-dark' style={{width: '100%', height:'300px', lineHeight: '35px'}}>
       <div className='d-flex justify-content-evenly flex-wrap'>
         <div className="footer-head" style={{width: '400px'}}>
         <Link 
            to={"/"}
            className='fs-5'
            style={{textDecoration:"none", color:'white'}}>
             Project Fair
            </Link>
         <h6 className='mt-2 text-light'>Designed and built with all the love in the world by the Projet Fair team with the help of our contributors.</h6>
         <h6 className='text-light'>Code licensed Projet Fair team, docs CC BY 3.0.</h6>
         <p className='text-light'>Currently v1.0.0.</p>
         </div>
         <div className="link d-flex flex-column">
          <h4>Links</h4>
          <Link to={"/"}  style={{textDecoration:"none", color:'white'}}>Home</Link>
          <Link to={"/login"}  style={{textDecoration:"none", color:'white'}}>Login </Link>
          <Link to={"/register"}  style={{textDecoration:"none", color:'white'}}>Register</Link>
          <Link to={"/projects"}  style={{textDecoration:"none", color:'white'}}>Projects</Link>
          <Link to={"/dashboard"}  style={{textDecoration:"none", color:'white'}}>Dashboard</Link>

         </div>
         <div className="guide d-flex flex-column">
         <h4>Guides</h4>
          <Link to={"https://react-bootstrap.netlify.app/"}  style={{textDecoration:"none", color:'white'}}>React</Link>
          <Link to={"https://react-bootstrap.netlify.app/"}  style={{textDecoration:"none", color:'white'}}>React Bootstrap </Link>
          <Link to={"https://react-bootstrap.netlify.app/"}  style={{textDecoration:"none", color:'white'}}>Routing</Link>
         </div>
         <div className="contact">
          <h4>Contact Us</h4>
          <div className='d-flex'>
            <input type="text" className='form-control ' placeholder='Enter Email ID' />
            <button className='btn btn-warning'>Subscribe</button>
          </div>
          <div className=' mt-3 d-flex justify-content-evenly' style={{width: '200px'}}>
          <Link to={""}  style={{textDecoration:"none", color:'white', fontSize:'20px'}}><i class="fa-brands fa-facebook-f"></i></Link>
          <Link to={""}  style={{textDecoration:"none", color:'white', fontSize:'20px'}}><i class="fa-brands fa-instagram"></i></Link>
          <Link to={""}  style={{textDecoration:"none", color:'white', fontSize:'20px'}}><i class="fa-brands fa-twitter"></i></Link>
          <Link to={""}  style={{textDecoration:"none", color:'white', fontSize:'20px'}}><i class="fa-brands fa-linkedin"></i></Link>

          </div>
         </div>
       </div>
       <div className='d-flex justify-content-center align-items-center'>
        <p className='text-light mt-3'>Copyright © 2023 E-Cart. Built with React.</p>
        </div>
    </div>
  )
}

export default Footer