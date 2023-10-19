import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage1() {
    return (
        <div className='container22'>
            <div className='design-div'>
                <div className='design-innerDiv1'></div>
                <div className='design-innerDiv2'></div>
                <div className='design-innerDiv3'></div>
                <div className='design-innerDiv4'></div>
                <div className='design-innerDiv5'></div>
                <div className='design-innerDiv6'></div>
                <div className='design-innerDiv7'></div>
                <div className='design-innerDiv8'></div>
                <div className='design-innerDiv9'></div>
                <div className='design-innerDiv10'></div>
            </div>
            <div className='logo-div'>
            <img src="../../meal-monkey-icon1.png" alt="" />
            </div>
            <div className='logo22-details'>
                <h1><span>Meal</span> Monkey</h1>
                <h6>FOOD DELIVERY</h6>
                <p>Discover the best foos from over 1,000 rstaurants and fast delivery to your doorstep</p>
            </div>
            <div className='buttons-div'>
                <Link to='/login' className='login-btn11'>Login</Link>
                <Link to='/signup' className='login-btn12'>Create an Account</Link>
            </div>
        </div>
    )
}
