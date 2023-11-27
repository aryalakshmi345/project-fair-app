import React, { useContext } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorisationContext } from '../Context/TokenAuth'

function Header({insideDashboard}) {
  const {isAuthorized, setIsAuthorized} = useContext(tokenAuthorisationContext)
  const navigate = useNavigate()
  const handleLogout = ()=>{
    // remove all existing user details from browser
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsAuthorized(false)
    // navigate to landing page
    navigate('/')
  }
  return (
    <>
     <Navbar className="bg-dark position-fixed top-0 w-100" style={{zIndex:"1"}}>
        <Container>
          <Navbar.Brand>
          <Link to={'/'} style={{textDecoration: 'none', color:'white'}}>
              <i className="fa-solid fa-book"></i>  Project Fair
          </Link>
          </Navbar.Brand>
           { insideDashboard &&
           <button onClick={handleLogout} style={{border:'none',background:'none',fontSize:'20px',color:'white'}}>Logout <i className="fa-solid fa-right-from-bracket text-light"></i></button>}
        </Container>
      </Navbar>
    </>
  )
}

export default Header