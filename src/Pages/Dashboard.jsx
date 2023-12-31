import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import Profile from '../Components/Profile'
import MyProjects from '../Components/MyProjects'

function Dashboard() {
  const [username,setUserName] = useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      setUserName(JSON.parse(sessionStorage.getItem("existingUser")).username)
    }
  },[])
  return (
    <div>
      <Header insideDashboard />
      <Row style={{marginTop:'100px'}} className='container-fluid'>
        <Col sm={12} md={8}>
          <h3>Welcome <span className='text-warning'>{username}</span></h3>
         <MyProjects/>
        </Col>
        <Col sm={12} md={4}>
        <Profile/>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard