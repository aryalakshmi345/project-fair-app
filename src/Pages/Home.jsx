import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'
import { homeProjectAPI } from '../Services/allAPI'

function Home() {
  const [loggedin,setLoggedin] = useState(false)
  const [homeProjects,setHomeProjects] = useState([])

  // api calling
  const getHomeProjects = async ()=>{
    const result = await homeProjectAPI()
    if(result.status==200){
      setHomeProjects(result.data)
    }else{
      console.log(result);
      console.log(result.response.data);
    }
  }
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoggedin(true)
    }else{
      setLoggedin(false)
    }
      getHomeProjects()
  },[])
  //  console.log(homeProjects);
  return (
    <>
      <div className='container-fluid' style={{width:'100%',height:'100vh'}}>
        <Row className='m-5 align-items-center p-5'>
          <Col sm={12} md={6}>
            <h1 className='fw-bolder'><i class="fa-solid fa-book"></i> Project Fair</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam labore quasi, minima omnis amet, non nam at nihil magnam laborum quas velit repudiandae, voluptatem sit vel perferendis expedita quis recusandae.</p>
           { loggedin ?
           <Link to={'/dashboard'}  className='btn btn-warning'>Manage your projects <i class="fa-solid fa-arrow-right fa-beat"></i></Link>
           :
            <Link to={'/login'}  className='btn btn-warning'>Start to Explore <i class="fa-solid fa-arrow-right fa-beat"></i></Link>}
          </Col>
          <Col sm={12} md={6}>
            <img className='w-75 ms-5' style={{marginTop:'100px'}} src="https://img.freepik.com/free-vector/project-initiation-abstract-concept-vector-illustration-project-documentation-business-analysis-vision-scope-determine-goals-task-assignment-timeframe-timeline-abstract-metaphor_335657-2944.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1698019200&semt=ais" alt="picture" />
          </Col>
        </Row>
      </div>
      {/* all projects */}
      <div className='all-projects mt-5 '>
        <h3 className="text-center mb-5">Explore Our Projects</h3>
        <marquee scrollAmount={25}>
        <div className='d-flex justify-content-between'>
          { 
             homeProjects?.length>0?homeProjects.map(project=>(
              <div className='me-5' style={{ width: '500px' }}>
              <ProjectCard project={project}/>
            </div>
             ))
            :null
          }
        </div>
        </marquee>
        <div className='text-center mt-5 mb-5'> <Link to={'/projects'}>View more Projects</Link></div>
      </div>
    </>
  )
}

export default Home