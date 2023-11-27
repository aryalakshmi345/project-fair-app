import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { addprojectAPI } from '../Services/allAPI';
import { addProjectResponseContext } from '../Context/ContextShare';

function AddProject() {
    const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)
    const [show, setShow] = useState(false);
    const [projectDetail, setProjectDetails] = useState({
      projectImage:"", title:"",languages:"",github:"",website:"",overview:""
    })
    const [preview, setPreview] = useState("")
    const [token, setToken] = useState("")
    const handleClose = () => {
      setShow(false);
      setProjectDetails({
        projectImage:"", title:"",languages:"",github:"",website:"",overview:""
      })
      setPreview("")
    }
    const handleShow = () => setShow(true);
    // console.log(projectDetail);
    useEffect(()=>{
      if(projectDetail.projectImage){
        setPreview(URL.createObjectURL(projectDetail.projectImage))
      }
    },[projectDetail.projectImage])
    
    useEffect(()=>{
      if(sessionStorage.getItem("token")){
        setToken(sessionStorage.getItem("token"))
      }else{
        setToken("")
      }
    },[])
    const handleAdd = async(e)=>{
      e.preventDefault()
      const {title,languages,github,website,overview,projectImage} = projectDetail
      if(!title || !languages || !github || !website || !overview || !projectImage){
        toast.info("Please fill the form completely")
      }else{
        const reqBody = new FormData()
        reqBody.append("title",title)
        reqBody.append("languages",languages)
        reqBody.append("github",github)
        reqBody.append("website",website)
        reqBody.append("overview",overview)
        reqBody.append("projectImage",projectImage)

        if(token){
          const reqHeader = {
            "Content-Type" : "multipart/form-data",
            "Authorization" : `Bearer ${token}`
          }
          const result = await addprojectAPI(reqBody,reqHeader)
         if(result.status===200){
          console.log(result.data);
          handleClose()
          setAddProjectResponse(result.data)
         }else{
          console.log(result);
          console.log(result.response.data);
         }
        }
      }
    }
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
                    <input type="file" style={{display:'none'}} onChange={e=>setProjectDetails({...projectDetail,projectImage:e.target.files[0]})}/>
                    <img className='img-fluid m-4' src={preview?preview:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"} alt="" />
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
                  <input type="text" className='form-control' placeholder='Website Link' value={projectDetail.website} onChange={e=>setProjectDetails({...projectDetail,website:e.target.value})}/>
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
          <Button variant="warning" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject