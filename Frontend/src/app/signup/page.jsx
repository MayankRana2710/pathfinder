'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const page = () => {
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [username,setUsername]=useState('');
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }
    const handlePass = (e)=>{
        setPass(e.target.value);
    }
    const handleUsername = (e)=>{
        setUsername(e.target.value);
    }
    const handleSubmit = ()=>{
        axios.post("http://localhost:3000/authentication/signup",{
            username:username,
            email:email,
            password:pass
        })
    }
    return (
        <div className='about_container flex text-white flex-col'>
            <label htmlFor="username">Username</label>
            <input id='username'
                type="text"
                placeholder='Enter username'
                value={username}
                onChange={handleUsername}
            />
            <label htmlFor="email">Email</label>
            <input id='email'
                type="email"
                placeholder='Enter email'
                value={email}
                onChange={handleEmail}
            />
            <label htmlFor="password">Password</label>
            <input id='password'
            type="password"
                placeholder='Enter password'
                value={pass}
                onChange={handlePass}
            />
            <button onChange={handleSubmit}>Submit</button>
        </div>
    )
}

export default page
