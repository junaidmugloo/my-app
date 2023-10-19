import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

export default function Login() {
    return (
            <div className='login-details'>
                <div className='text'>
                    <h2>Login</h2>
                    <p>Add your details to login</p>
                    <form action="">
                    <p>
                        <input className='form-details detail1' type="email" placeholder='Your Email' tabIndex={1} />
                    </p>
                    <p>
                        <input className='form-details' type="password" placeholder='Password' tabIndex={2} />
                    </p>
                    <button className='login-button' >Login</button>
                    </form>
                    <p className='forgot-link'><Link to='/password' className='link'>Forgot your password?</Link></p>
                    <p className='login-portion'>or Login With</p>
                    <button className='login-button facebook-login-button'><i class="fa-brands fa-facebook-f"></i> Login with Facebook</button>
                    <button className='login-button google-login-button'><i class="fa-brands fa-google-plus-g"></i> Login with Google</button>
                    <p className='para-with-signUp-link'>Don't have an Account?
                    <Link to='/signup' className='sign-up'>Sign Up</Link>
                    </p>
                </div>
                
            </div>
    )
}
