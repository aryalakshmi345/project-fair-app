import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import logimg from '../Assets/logimg.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../Services/allAPI';
import { tokenAuthorisationContext } from '../Context/TokenAuth';

function Auth({register}) {
    const {isAuthorized, setIsAuthorized} = useContext(tokenAuthorisationContext)
    const [userData,setUserData] = useState({
        username:"",email:"",password:""
    })
    const navigate = useNavigate()
    const isRegisterForm = register?true:false
    const handleRegister = async (e)=>{
        e.preventDefault()
        const {username,email,password}=userData
        if(!username || !email || !password){
            toast.info("Please Fill the form completely...!")
        }else{
            const result = await registerAPI(userData)
            if(result.status===200){
                toast.success(`${result.data.username} has registered successfully..!`)
                setUserData({
                 username:"",email:"",password:""
                })
                navigate('/login')
            }else{
                toast.warning(result.response.data)
                console.log(result);
            }
        }
    }

    const handleLogin = async (e)=>{
        e.preventDefault()
        const {email,password}=userData
        if(!email || !password){
            toast.info("Please Fill the form completely...!")
        }else{
            const result = await loginAPI(userData)
            if(result.status===200){
                sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
                sessionStorage.setItem("token",result.data.token)
                setIsAuthorized(true)
                setUserData({
                 email:"",password:""
                })
                navigate('/')
            }else{
                toast.warning(result.response.data)
                console.log(result);
            }
        }
    }
  return (
    <>
       <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className='w-75 container'>
         <Link to={'/'} style={{textDecoration:'none', color:'blue'}}><i class="fa-solid fa-arrow-left"></i>Back to Home</Link>
         <div className='card shadow p-5 bg-dark'>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <img src={logimg} className='rounded-start w-100' style={{width:'300px',height:'470px'}} alt="" />
                </div>
                <div className="col-lg-6">
                   <div className='d-flex flex-column align-items-center'>
                        <h1 className='fw-bolder text-light mt-2'><i class="fa-solid fa-book"></i> Project Fair</h1>
                        <h5 className='fw-bolder text-light mt-2 pb-2'>
                            {
                                isRegisterForm ? 'Sign up to your account': 'Sign In to your Account'
                            }
                        </h5>
                        <Form className='text-light w-100'>
                            {
                                isRegisterForm &&
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Username" value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})}/>
                                </Form.Group>
                            }
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control type="email" placeholder="Enter Email Id" value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control type="password" placeholder="Enter Password" value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})}/>
                            </Form.Group>
                            {
                                isRegisterForm?
                                 <div>
                                    <button className='mb-2 btn btn-warning w-100' onClick={handleRegister}>Register</button>
                                    <p className='text-center' >Already have account? Click here to  <Link to={'/login'}>Login</Link></p>
                                 </div>:
                                 <div>
                                 <button className='mb-2 btn btn-warning w-100' onClick={handleLogin}>Login</button>
                                 <p className='text-center'>New user ? Click here to  <Link to={'/register'}>Register</Link></p>
                              </div>
                            }
                        </Form>
                   </div> 
                </div>
            </div>
         </div>
      </div>
    </div> 
        <ToastContainer 
      position='top-center'
      autoClose={2000}
      />
    </>
  )
}

export default Auth