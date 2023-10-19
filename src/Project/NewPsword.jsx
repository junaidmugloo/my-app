import React from 'react'
import { Link } from 'react-router-dom'
import "./otpPage.css"

export default function NewPsword() {
    return (
        <div className='container2'>
            <h2 className='heading'>New Password</h2>
            <p className='description'>Please enter your email to receive a link to create a new password via email</p>
            <form  action="">
                <input type="Password" className='input1 newPassword' placeholder='New Password'/>
                <input type="Password" className='input1'placeholder='Confirm Password'/>
                <p className='para4'><Link to='/startpage1' className='next-button2'>Next</Link></p>
            </form>
        </div>
    )
}
