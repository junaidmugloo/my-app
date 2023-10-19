import React from 'react'
import './otpPage.css'
import { Link } from 'react-router-dom'

export default function Menus() {
  return (
    <div className='container9'>
      {/* Copied from profile page */}
      {/* Css is same for both the headings */}
      <div className='profile'>
        <div className='profile-text'>Menu</div>
        <div className='profilePage-cart-icon'><ion-icon name="cart"></ion-icon></div>
      </div>
      {/* Copied from profile page */}
      {/* Css is same for both the headings */}
      <form className='menu-form' action="">
        <p className='search-icon'><ion-icon name="search"></ion-icon></p>
        <p><input className='menu-search' type="text" placeholder='Search Food' /></p>
      </form>
      <div className='food-types-container'>
        <div className='left-div'></div>
        <div className='right-div'>
          <Link className='menu-page-links'>
          <div className='foods'>
            <div className='foods-image'>
              <img src="../../pizza2.jpg" alt="" />
            </div>
            <div className='foods-details'>
              <h5>Food</h5>
              <p>120 items</p>
            </div>
            <div className='food-arrow'>
              <Link className='arrow-icon'><ion-icon className='arrow-icon' name="chevron-forward-outline"></ion-icon></Link>
            </div>
          </div>
          </Link>
          <Link className='menu-page-links'>
          <div className='foods'>
            <div className='foods-image'>
              <img src="../../Beverages.jpg" alt="" />
            </div>
            <div className='foods-details'>
              <h5>Beverages</h5>
              <p>220 items</p>
            </div>
            <div className='food-arrow'>
              <Link className='arrow-icon'><ion-icon className='arrow-icon' name="chevron-forward-outline"></ion-icon></Link>
            </div>
          </div>
          </Link>
          <Link className='menu-page-links'>
          <div className='foods'>
            <div className='foods-image'>
              <img src="../../desserts.jpg" alt="" />
            </div>
            <div className='foods-details'>
              <h5>Desserts</h5>
              <p>155 items</p>
            </div>
            <div className='food-arrow'>
              <Link className='arrow-icon'><ion-icon className='arrow-icon' name="chevron-forward-outline"></ion-icon></Link>
            </div>
          </div>
          </Link>
          <Link className='menu-page-links'>
          <div className='foods'>
            <div className='foods-image'>
              <img src="../../promotions.jpg" alt="" />
            </div>
            <div className='foods-details'>
              <h5>Promotions</h5>
              <p>25 items</p>
            </div>
            <div className='food-arrow'>
              <Link className='arrow-icon'><ion-icon className='arrow-icon' name="chevron-forward-outline"></ion-icon></Link>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
