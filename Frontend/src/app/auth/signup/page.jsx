'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'


const page = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [username, setUsername] = useState('');
    const [state, setState] = useState(1);
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePass = (e) => {
        setPass(e.target.value);
    }
    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleNext = async () => {
        if (state === 1 && !email) return;
        if (state === 2 && !pass) return;
        if (state === 3 && !username) return;
        if (state < 3) {
            setState(state => state + 1)
        }
        else {
            handleSubmit();
        }
    }
    const handleSubmit = async () => {
        await axios.post("http://127.0.0.1:5000/api/auth/signup", {
            username: username,
            email: email,
            password: pass
        }, {
            headers: {                       /*bhai axios json parse output de toh deta hai par, isse bhi json parse karna jaruri hai*/
                "Content-Type": "application/json" /*, warna yaad rakhio kitna dimag kharab hua tha pehle din backend me problem dhoondne me*/
            }
        }).catch((error) => {
            console.log("Connection error");
        });
    }
    return (
        <div className='sign_page'>
            <div className='sign_box'>
                <div className='sign_comp_logo'>PATHFINDER</div>
                <div className='font-poppins font-semibold text-xl p-1 '>Create your Pathfinder account</div>
                {state===1&&(<div className='font-poppins text-sm mb-5'>Enter your email</div>)}
                {state===2&&(<div className='font-poppins text-sm mb-5'>Enter your password</div>)}
                {state===3&&(<div className='font-poppins text-sm mb-5'>Enter your username</div>)}
                <div className='sign_comp_input'>
                    {state === 1 && (
                        <div>
                            <input className='data_box'
                                type="email"
                                placeholder='Email'
                                value={email}
                                onChange={handleEmail}
                            />
                        </div>
                    )}
                    {state === 2 && (
                        <div>
                            <input className='data_box'
                                type="password"
                                placeholder='Password'
                                value={pass}
                                onChange={handlePass}
                            />
                        </div>
                    )}
                    {state === 3 && (
                        <div>
                            <input className='data_box'
                                type="text"
                                placeholder='Username'
                                value={username}
                                onChange={handleUsername}
                            />
                        </div>
                    )}
                    <button className="button" onClick={handleNext}>{(state < 3) ? 'Next' : 'Submit'}</button>
                </div>
                <div>Already have an account? <Link href="/signin" className='text-[#3498dd]'><strong>Sign in</strong></Link></div>
            </div>
        </div>
    )
}

export default page
