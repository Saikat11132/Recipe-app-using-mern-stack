import React, { useState } from 'react'

export const Auth = () => {
  return (
    <div>
        <Login/>
        <Register/>
    </div>
  )
}


const Login=()=>{
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")

    return <Form
    username={username} 
    setUsername={setUsername} 
    password={password} 
    setPassword={setPassword}
    lable="Login"/>
    
}

const Register=()=>{
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")

    return <Form 
    username={username} 
    setUsername={setUsername} 
    password={password} 
    setPassword={setPassword}
    lable="Register"/>
}

const Form =({username,setUsername,password,setPassword,lable})=>{
    return( <div className="auth-container">
        <form>
            <h2>{lable}</h2>
            <div className='form-group'>
                <lable htmlFor="username">Username</lable>
                <input type="text"
                id="username" 
                value={username} 
                onChange={(event)=>setUsername(event.target.value)} />
            </div>
            <div className='form-group'>
                <lable htmlFor="password">Password</lable>
                <input type="text" 
                id="password" 
                value={password} 
                onChange={(event)=>setPassword(event.target.value)} />
            </div>
            <button type="submit" >{lable}</button>
        </form>
    </div>)
}