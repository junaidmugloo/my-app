import React from 'react'
import Footer from '../components/Footer'
import './otpPage.css'
import { Link } from 'react-router-dom'


export default function More() {
  return (
    <div className='container12'>
      {/* Copied from profile page */}
      {/* Css is same for both the headings */}
      <div className='profile'>
        <div className='profile-text'>More</div>
        <div className='profilePage-cart-icon'><ion-icon name="cart"></ion-icon></div>
      </div>
      {/* Copied from profile page */}
      {/* Css is same for both the headings */}
      <div className='more-options'>
        <Link to='/paymentdetails' className='more-page-links'>
          <div className='payment-details'>
            <div className='payment-logo'><i class="fa-sharp fa-solid fa-hand-holding-dollar"></i></div>
            <div className='payment-text'>Payment Details
            </div>
            <div className='payment-forward-details'><i class="fa-sharp fa-solid fa-angle-right"></i></div>
          </div>
        </Link>
        <Link to='/myOrder' className='more-page-links'>
          <div className='payment-details'>
            <div className='payment-logo'><i class="fa-sharp fa-solid fa-bag-shopping"></i></div>
            <div className='payment-text'>My Orders
            </div>
            <div className='payment-forward-details'><i class="fa-sharp fa-solid fa-angle-right"></i></div>
          </div>
        </Link>
        <Link to='/notifications' className='more-page-links'>
          <div className='payment-details'>
            <div className='payment-logo'><i class="fa-sharp fa-solid fa-bell"></i></div>
            <div className='payment-text'>
              <div>Notifications</div>
            <div className='notification-counts'>15</div>
            </div>
            <div className='payment-forward-details'><i class="fa-sharp fa-solid fa-angle-right"></i></div>
          </div>
        </Link>
        <Link to='/inbox' className='more-page-links'>
          <div className='payment-details'>
            <div className='payment-logo'><i class="fa-solid fa-envelope"></i></div>
            <div className='payment-text'>Inbox
            </div>
            <div className='payment-forward-details'><i class="fa-sharp fa-solid fa-angle-right"></i></div>
          </div>
        </Link>
        <Link to='/aboutUs' className='more-page-links'>
          <div className='payment-details'>
            <div className='payment-logo'><i class="fa-solid fa-circle-info"></i></div>
            <div className='payment-text'>About Us
            </div>
            <div className='payment-forward-details'><i class="fa-sharp fa-solid fa-angle-right"></i></div>
          </div>
        </Link>
      </div>
    </div>
    
  )
}
