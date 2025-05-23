import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import { auth } from '../FirebaseConfig/FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import './SignupFrom.css'
import { useNavigate } from 'react-router-dom'
const SignupFrom = () => {
const [userSignupDetails,setuserSignupDetails]=useState({
  name:"",
  email:"",
  password:"",
  role:""
})
const navigate =useNavigate()
const getUserDetails=(e)=>{
setuserSignupDetails((prevstate)=>({...prevstate,[e.target.name]:e.target.value}))
}
const handleFireAuthWithUserDetails=async (e)=>{
  e.preventDefault()
// console.log(userSignupDetails)
try{
  const {email,password}=userSignupDetails;
const userCredentials = await createUserWithEmailAndPassword(auth,email,password);
const user = userCredentials.user;
alert(`Hello ${user.email} Signup successful! Redirecting to login...`)
navigate('/login')
}
catch(err){
  alert(`Error ${err}`)
}
}
  return (
    <div>
       <Form style={{margin:"3rem auto",maxWidth:"350px"} } className='SignupFrom' onSubmit={handleFireAuthWithUserDetails}>
          <Form.Group className="mb-3" >
        <Form.Label>Signup here</Form.Label>
      </Form.Group>
  <Form.Group className="mb-3" >
        <Form.Label>Enter name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name='name' onChange={getUserDetails}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' onChange={getUserDetails}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={getUserDetails}/>
      </Form.Group>

        <Form.Group className="mb-3" >
    <Form.Select name='role' onChange={getUserDetails}>
      <option value="">Select role</option>
      <option value="Recruiter">Recruiter</option>
      <option value="Recruiter">Jobseeker</option>
    </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
                <Form.Label>
                  Already have an account?{' '}
                  <span onClick={() => navigate('/login')} style={{ color: 'green', cursor: 'pointer' }}>
                    Login
                  </span>
                </Form.Label>
              </Form.Group>

    
      <Button variant="primary" type="submit">
        signup
      </Button>
    </Form>
    </div>
  )
}

export default SignupFrom
