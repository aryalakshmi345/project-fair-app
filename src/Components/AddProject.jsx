import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function AddProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <button onClick={handleShow} className='btn btn-warning'>Add Project</button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
                <label>
                    <input type="file" style={{display:'none'}}/>
                    <img className='img-fluid m-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" alt="" />
                    </label>
            </div>
            <div className="col-lg-6">
                <div className='mb-3'><input type="text" className='form-control' placeholder='Project Title' /></div>
                <div className='mb-3'><input type="text" className='form-control' placeholder='Langauge Used' /></div>
                <div className='mb-3'><input type="text" className='form-control' placeholder='Github Link' /></div>
                <div className='mb-3'><input type="text" className='form-control' placeholder='Website Link' /></div>
                <div className='mb-3'><input type="text" className='form-control' placeholder='Project Overview' /></div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning">Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject