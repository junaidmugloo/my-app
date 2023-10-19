import React from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <div className='login-detail'>
                <div className='texts'>
                    <h2>Sign Up</h2>
                    <p>Add your details to sign up</p>
                    <form action="">
                    <p>
                        <input className='form-detail' type="text" placeholder='Name' tabIndex={1} />
                    </p>
                    <p>
                        <input className='form-detail' type="email" placeholder='Email' tabIndex={2} />
                    </p>
                    <p>
                        <input className='form-detail' type="tel" placeholder='Mobile No' tabIndex={2} />
                    </p>
                    <p>
                        <input className='form-detail' type="text" placeholder='Address' tabIndex={2} />
                    </p>
                    <p>
                        <input className='form-detail' type="password" placeholder='Password' tabIndex={2} />
                    </p>
                    <p>
                        <input className='form-detail' type="password" placeholder='Confirm Password' tabIndex={2} />
                    </p>
                    <button className='login-buttons' >Sign Up</button>
                    </form>
                    <p className='paras-with-login-link'>Don't have an Account?
                    <Link to='/login' className='login'>Login</Link>
                    </p>
                </div>
                
            </div>
    )
}
