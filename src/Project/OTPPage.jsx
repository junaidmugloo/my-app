import React from 'react'
import { Link } from 'react-router-dom'
import "./otpPage.css"

export default function OTPPage() {
  return (
    <div className='container'>
      <h2 className='heading'>We have sent an OTP to your Mobile</h2>
      <p className='paragraph'>Please check your mobile number 962*****83 continue to reset your password</p>
      <form  action="">
        <div className='form'>
        <input className='form-inputs' type="text" placeholder='*' maxLength={1}/>
        <input className='form-inputs' type="text" placeholder='*' maxLength={1}/>
        <input className='form-inputs' type="text" placeholder='*' maxLength={1}/>
        <input className='form-inputs' type="text" placeholder='*' maxLength={1}/>
        </div>
        <p className='para2'><Link to='/newPassword' className='next-button'>Next</Link></p>
      </form>
      <p className='para3'>Didn't Recieve?<Link className='click-here-link'>Click Here</Link></p>
    </div>
  )
}
