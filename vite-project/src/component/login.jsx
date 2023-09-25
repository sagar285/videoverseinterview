import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate=useNavigate();


    const submit =async(e)=>{
        e.preventDefault();
        const res = await axios.post("http://localhost:4000/login",{email,password})
        if(res.status===200){
               navigate("/");
        }
    }


   
  return (
    <div>
        <form>
            <input type="email" placeholder='enter your email' onChange={(e)=>setemail(e.target.value)}  />
            <input type="password" placeholder='enter your password' onChange={(e)=>setpassword(e.target.value)}  />
            <button onClick={submit}>Login</button>
        </form>
    </div>
  )
}

export default Login