import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideDashboard}) {
  return (
    <>
     <Navbar className="bg-dark position-fixed top-0 w-100">
        <Container>
          <Navbar.Brand>
          <Link to={'/'} style={{textDecoration: 'none', color:'white'}}>
              <i className="fa-solid fa-book"></i>  Project Fair
          </Link>
          </Navbar.Brand>
           { insideDashboard &&
           <button style={{border:'none',background:'none',fontSize:'20px',color:'white'}}>Logout <i className="fa-solid fa-right-from-bracket text-light"></i></button>}
        </Container>
      </Navbar>
    </>
  )
}

export default Header