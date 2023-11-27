import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { BASE_URL } from '../Services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProjectAPI } from '../Services/allAPI';
import { editProjectResponseContext } from '../Context/ContextShare';

function EditProject({project}) {
    const {editProjectResponse, setEditProjectResponse} = useContext(editProjectResponseContext)
    const [projectDetail, setProjectDetails] = useState({
      id:project._id, projectImage:"", title:project.title,languages:project.languages,github:project.github,website:project.website,overview:project.overview
      })
  const [preview, setPreview] = useState("")
  const [show, setShow] = useState(false);
  const handleClose = () =>{ 
     setShow(false);
     setProjectDetails({
      id:project._id, projectImage:"", title:project.title,languages:project.languages,github:project.github,website:project.website,overview:project.overview
     })
     setPreview("")
    }
  const handleShow = () => setShow(true);

  useEffect(()=>{
    if(projectDetail.projectImage){
      setPreview(URL.createObjectURL(projectDetail.projectImage))
    }
  })

  const handleUpdate = async ()=>{
    const {id,title,languages,github,website,overview,projectImage} = projectDetail
    if(!title || !languages || !github || !website || !overview ){
      toast.info("Please fill the form completely..!")
    }else{
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("overview",overview)
      preview?reqBody.append("projectImage",projectImage): reqBody.append("projectImage",project.projectImage)
      const token = sessionStorage.getItem("token")
      if(preview){
        const reqHeader = {
          "Content-Type" : "multipart/form-data",
          "Authorization" : `Bearer ${token}`
        }
        // api call
        const result = await editProjectAPI(id,reqBody,reqHeader)
        if(result.status===200){
          handleClose()
          // pass response to myproject
          setEditProjectResponse(result.data)
        }else{
          console.log(result);
          toast.error(result.response.data)
        }
      }else{
        const reqHeader = {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${token}`
        }
        // api call
        const result = await editProjectAPI(id,reqBody,reqHeader)
        if(result.status===200){
          handleClose()
          // pass response to myproject
          setEditProjectResponse(result.data)
        }else{
          console.log(result);
          toast.error(result.response.data)
        }
      }
    }
  }
  return (
    <>
     <button onClick={handleShow} className='btn'><i class="fa-regular fa-pen-to-square fa-2x"></i></button>

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
                    <input type="file" style={{display:'none'}} onChange={e=>setProjectDetails({...projectDetail,projectImage:e.target.files[0]})} />
                    <img className='img-fluid m-4' src={preview?preview:`${BASE_URL}/uploads/${project.projectImage}`} alt="" />
                    </label>
            </div>
            <div className="col-lg-6">
                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Project Title' value={projectDetail.title} onChange={e=>setProjectDetails({...projectDetail,title:e.target.value})}/>
                  </div>
                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Langauge Used' value={projectDetail.languages} onChange={e=>setProjectDetails({...projectDetail,languages:e.target.value})}/>
                  </div>
                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Github Link' value={projectDetail.github} onChange={e=>setProjectDetails({...projectDetail,github:e.target.value})}/>
                  </div>
                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Website Link' value={projectDetail.website} onChange={e=>setProjectDetails({...projectDetail,website:e.target.value})} />
                  </div>
                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Project Overview' value={projectDetail.overview} onChange={e=>setProjectDetails({...projectDetail,overview:e.target.value})}/>
                  </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer 
      position='top-center'
      autoClose={2000}
      />
    </>
  )
}

export default EditProject