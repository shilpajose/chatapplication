import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from './join.jpg';

function Join() {

  const navigate = useNavigate()
  const [userName,setUserName] = useState("")
  console.log(userName);


  const goToChat = () =>{
    if(userName){
      navigate('/chat',{state:userName})
    }
    else{
      alert("Enter Your Name")
    }
  }

  return (
    <>
        <div style={{height:'100vh',backgroundColor:"black"}} className='d-flex justify-content-center align-items-center'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className='hh1'>CanVtalk Chat App</h1>
                <img width={'80%'} className='img-fluid' src={logo} alt="logo" style={{borderRadius:'50%'}}/>
                <div className='mt-3'>
                    <input type="text" onChange={(e)=>setUserName(e.target.value)} className='form-control' placeholder='Enter your Username'/>
                    <button onClick={goToChat} className="btn btn-outline-danger mt-2 w-100">Start Chat</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Join