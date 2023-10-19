import React from 'react'
import "./Password.css"
import { Link } from 'react-router-dom'

export default function Password() {
    return (
        <div className='password-details'>
            <div className='details'>
            <h2>Reset Password</h2>
            <p className='para1'>Please enter your email to receive a link to create a new password via email</p>
            <form action="">
                <p>
                    <input type="Email" className='input-details' placeholder='Email'/>
                </p>
                <p id='para-with-link'><Link to='/otpPage' id='send-button'>Send</Link></p>
            </form>
            </div>
        </div>
    ) 
}
