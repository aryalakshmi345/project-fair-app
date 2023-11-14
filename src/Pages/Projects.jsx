import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (
    <>
     <Header/>
      <div style={{marginTop:'100px'}} className='projects'>
        <h2 className='text-center fw-bolder mb-5'>All Projects</h2>
         <div className='d-flex justify-content-center align-items-center w-100'>
            <div className="d-flex border w-50 rounded">
              <input type="text" className='form-control' placeholder='Search Projects By Technologies' />
              <i style={{marginLeft:'-45px',marginTop:'13px'}} class="fa-solid fa-magnifying-glass"></i>
            </div>
         </div>
         <Row className='mt-5 container-fluid'>
          <Col sm={12} md={6} lg={4}>
          <ProjectCard/>
          </Col>
         </Row>
      </div>
    </>
  )
}

export default Projects 