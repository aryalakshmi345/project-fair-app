import React, { useContext, useEffect, useState } from 'react'
import AddProject from './AddProject'
import EditProject from './EditProject'
import { deleteProjectAPI, userProjectAPI } from '../Services/allAPI'
import { addProjectResponseContext, editProjectResponseContext } from '../Context/ContextShare'
import { toast } from 'react-toastify'

function MyProjects() {
  const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)
  const {editProjectResponse, setEditProjectResponse} = useContext(editProjectResponseContext)
  const [userProjects, setUserProjects] = useState([])

  const getUserProjects = async ()=>{
    if(sessionStorage.getItem("token")){
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type":"application/json", "Authorization" : `Bearer ${token}`
        }
        const result = await userProjectAPI(reqHeader)
        if(result.status===200){
            setUserProjects(result.data)
        }else{
            console.log(result);
            console.log(result.response.data);
        }
    }
  }
  useEffect(()=>{
    getUserProjects()
  },[addProjectResponse,editProjectResponse])

  const handleDelete = async(id) =>{
    const token = sessionStorage.getItem("token")
    const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
    }
    const result = await deleteProjectAPI(id,reqHeader)
    if(result.status===200){
        // page reload
        getUserProjects()
    }else{
        toast.error(result.response.data)
    }
  }
  return (
    <div className='card shadow p-3 mt-4 mb-5'>
        <div className='d-flex'>
            <h4>My Projects</h4>
            <div className='ms-auto'>
                <AddProject/>
            </div>

            </div>
            <div className="mt-4">
              { userProjects?.length>0? userProjects.map(project=>(
                        <div className="border d-flex align-items-center rounded p-2 mb-4">
                        <h6>{project.title}</h6>
                        <div className="icon ms-auto">
                            <EditProject project={project}/>
                            <a href={`${project.github}`} target='_blank' className='btn'><i class="fa-brands fa-github fa-2x"></i></a>
                            <button onClick={()=>handleDelete(project._id)} className='btn'><i class="fa-solid fa-trash fa-2x"></i></button>
                        </div>
                    </div>
                    )):
           
                <p className='text-danger fw-bolder mt-2'>No Projects Uploaded Yet..!</p>
                }
            </div>
        </div>
   
  )
}

export default MyProjects 