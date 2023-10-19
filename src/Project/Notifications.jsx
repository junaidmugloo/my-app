import React from 'react'
import './otpPage.css'
import { Link } from 'react-router-dom'

export default function Notifications() {
    return (
        <div className='container13'>
            <div className='notification'>
                <div className='notification-back-icon'><Link to='/more'><i class="fa-solid fa-angle-left"></i></Link></div>
                <div className='notification-text'>Notifications</div>
                <div className='notificationPage-cart-icon'><ion-icon name="cart"></ion-icon></div>
            </div>
            <div className='div-with-notifications'>
                    <div className='notification1'>
                        <div className='div-with-span'>
                            <p className='dot-shaped-para'></p>
                        </div>
                        <div className='notification-details'>
                            <h6>Your orders has been picked up</h6>
                            <p>Now</p>
                        </div>
                    </div>
                    <div className='notification1'>
                        <div className='div-with-span'>
                            <p className='dot-shaped-para'></p>
                        </div>
                        <div className='notification-details'>
                            <h6>Your order has been delivered</h6>
                            <p>1h ago</p>
                        </div>
                    </div>
                    <div className='notification1'>
                        <div className='div-with-span'>
                            <p className='dot-shaped-para'></p>
                        </div>
                        <div className='notification-details'>
                            <h6>Lorem ipsum dolor sit amet, consectetur</h6>
                            <p>3h ago</p>
                        </div>
                    </div>
                    <div className='notification1'>
                        <div className='div-with-span'>
                            <p className='dot-shaped-para'></p>
                        </div>
                        <div className='notification-details'>
                            <h6>Lorem ipsum dolor sit amet, consectetur</h6>
                            <p>5h ago</p>
                        </div>
                    </div>
                    <div className='notification1'>
                        <div className='div-with-span'>
                            <p className='dot-shaped-para'></p>
                        </div>
                        <div className='notification-details'>
                            <h6>Lorem ipsum dolor sit amet, consectetur</h6>
                            <p>05 Sep 2020</p>
                        </div>
                    </div>
                    <div className='notification1'>
                        <div className='div-with-span'>
                            <p className='dot-shaped-para'></p>
                        </div>
                        <div className='notification-details'>
                            <h6>Lorem ipsum dolor sit amet, consectetur</h6>
                            <p>12 Aug 2020</p>
                        </div>
                    </div>
                    <div className='notification1'>
                        <div className='div-with-span'>
                            <p className='dot-shaped-para'></p>
                        </div>
                        <div className='notification-details'>
                            <h6>Lorem ipsum dolor sit amet, consectetur</h6>
                            <p>20 Jul 2020</p>
                        </div>
                    </div>
                    <div className='notification1'>
                        <div className='div-with-span'>
                            <p className='dot-shaped-para'></p>
                        </div>
                        <div className='notification-details'>
                            <h6>Lorem ipsum dolor sit amet, consectetur</h6>
                            <p>12 Jul 2020</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}
