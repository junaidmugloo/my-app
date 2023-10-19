import React from 'react'
import { Link } from 'react-router-dom'
import './otpPage.css'

export default function Profile() {
  return (
    <div className='container11'>
      <div className='profile'>
        <div className='profile-text'>Profile</div>
        <div className='profilePage-cart-icon'><ion-icon name="cart"></ion-icon></div>
      </div>
      <div className='profile-photo-and-details'>
        <div className='div-for-photo'>
          <img className='profile-photo' src="../../emilia.jpg" alt="" />
          <p className='camera-icon'><ion-icon name="camera"></ion-icon></p>
        </div>
        <div className='div-for-details'>
          <p className='para-with-edit-icon'><i class="fa-solid fa-pen"></i><span>Edit Profile</span></p>
          <h5 className='heading-with-name'>Hi there Emilia</h5>
          <p className='sign-out'><Link to='/login' className='sign-out-link'>Sign Out</Link></p>
        </div>
      </div>
      <form action="" className='profile-form'>
        <label className='label1'>Name</label>
        <p className='para-with-input1'><input className='profile-input1' type="text" placeholder='Emilia Clarke' /></p>
        <label className='label1'>Email</label>
        <p className='para-with-input1'><input className='profile-input1' type="Email" placeholder='EmiliaClarke@email.com' /></p>
        <label className='label1'>Mobile No</label>
        <p className='para-with-input1'><input className='profile-input1' type="text" placeholder='999-888-777-1' /></p>
        <label className='label1'>Address</label>
        <p className='para-with-input1'><input className='profile-input1' type="text" placeholder='No 23, 6th Lane, Colombo 03' /></p>
        <label className='label1'>Password</label>
        <p className='para-with-input1'><input className='profile-input1' type="Password" placeholder='**********' /></p>
        <label className='label1'>Confirm Password</label>
        <p className='para-with-input1'><input className='profile-input1' type="Password" placeholder='**********' /></p>
        <button className='profile-save-button' type='submit'>Save</button>
      </form>
    </div>
  )
}
