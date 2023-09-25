import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Register = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate=useNavigate();


    const submit =async(e)=>{
        e.preventDefault();
        const res = await axios.post("http://localhost:4000/register",{name,email,password})
        if(res.status===200){
               navigate("/login");
        }
    }


   
  return (
    <div  style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100%"}}>
        <form style={{display:"flex",flexDirection:"column"}}>
            <input type="text" placeholder='enter your name'onChange={(e)=>setname(e.target.value)} />
            <input type="email" placeholder='enter your email' onChange={(e)=>setemail(e.target.value)}  />
            <input type="password" placeholder='enter your password' onChange={(e)=>setpassword(e.target.value)}  />
            <button onClick={submit}>Register</button>
        </form>
    </div>
  )
}

export default Register