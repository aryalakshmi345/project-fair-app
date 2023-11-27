import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import projectPic from '../Assets/projectPic.png'
import { BASE_URL } from '../Services/baseurl';

function ProjectCard({project}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     {project && <Card className='shadow mb-5 btn' onClick={handleShow}>
      <Card.Img variant="top" style={{height:'200px'}} src={project?`${BASE_URL}/uploads/${project.projectImage}`:projectPic} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
      </Card.Body>
    </Card> }

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                 <img style={{height:'200px'}} className='img-fluid' src={project?`${BASE_URL}/uploads/${project.projectImage}`:projectPic} alt="" />
                </Col>
                <Col md={6}>
                 <h4 className='text-warning'>{project.title}</h4>
                 <p>{project.overview}</p>
                 <p>Language Used: <span className='text-danger fw-bolder'>{project.languages}</span></p>
                </Col>
            </Row>
            <div>
                <a href={project.github} className='me-3 btn' target='_blank'><i class="fa-brands fa-github fa-2x"></i></a>
                <a href={project.website} className='me-3 btn' target='_blank'><i class="fa-solid fa-link fa-2x"></i></a>
            </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard