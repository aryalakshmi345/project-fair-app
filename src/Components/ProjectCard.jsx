import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import projectPic from '../Assets/projectPic.png'

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className='shadow mb-5 btn' onClick={handleShow}>
      <Card.Img variant="top" src={projectPic} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card> 

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                 <img style={{height:'200px'}} className='img-fluid' src={projectPic} alt="" />
                </Col>
                <Col md={6}>
                 <h4>Project Title</h4>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatem illo consequatur ipsum qui reiciendis nobis, dolorum odio obcaecati? Nisi repellendus ullam maxime deleniti error porro </p>
                 <p>Language Used: <span>HTML, CSS, React</span></p>
                </Col>
            </Row>
            <div>
                <a href="https://github.com/aryalakshmi345/e-cart-website" className='me-3 btn' target='_blank'><i class="fa-brands fa-github fa-2x"></i></a>
                <a href="https://e-cart-website.vercel.app/" className='me-3 btn' target='_blank'><i class="fa-solid fa-link fa-2x"></i></a>
            </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard