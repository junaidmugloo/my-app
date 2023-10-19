import React from 'react'
import './otpPage.css'
import { Link } from 'react-router-dom'

export default function AboutUs() {
    return (
        <div className='container14'>
            <div className='aboutUs'>
                <div className='aboutUs-back-icon'><Link to='/more'><i class="fa-solid fa-angle-left"></i></Link></div>
                <div className='aboutUs-text'>About Us</div>
                <div className='aboutUsPage-cart-icon'><ion-icon name="cart"></ion-icon></div>
            </div>
            <div className='aboutUs-details'>
                    <div className='aboutUs1'>
                        <div className='div-with-shaped-para'>
                            <p className='aboutUs-dot-shaped-para'></p>
                        </div>
                        <div className='aboutUs-notification-details'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, possimus illum. Consectetur, ex expedita deserunt neque eos modi minima omnis aspernatur hic adipisci fugiat, quia blanditiis ut. Ex porro beatae odit aspernatur praesentium facere repellat dicta atque fugit consequuntur perspiciatis, eveniet iste, obcaecati molestias sunt laborum, pariatur laboriosam sequi nulla!</p>
                        </div>
                    </div>
                    <div className='aboutUs1'>
                        <div className='div-with-shaped-para'>
                            <p className='aboutUs-dot-shaped-para'></p>
                        </div>
                        <div className='aboutUs-notification-details'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, possimus illum. Consectetur, ex expedita deserunt neque eos modi minima omnis aspernatur hic adipisci fugiat, quia blanditiis ut. Ex porro beatae odit aspernatur praesentium facere repellat dicta atque fugit consequuntur perspiciatis, eveniet iste, obcaecati molestias sunt laborum, pariatur laboriosam sequi nulla!</p>
                        </div>
                    </div>
                    <div className='aboutUs1'>
                        <div className='div-with-shaped-para'>
                            <p className='aboutUs-dot-shaped-para'></p>
                        </div>
                        <div className='aboutUs-notification-details'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, possimus illum. Consectetur, ex expedita deserunt neque eos modi minima omnis aspernatur hic adipisci fugiat, quia blanditiis ut. Ex porro beatae odit aspernatur praesentium facere repellat dicta atque fugit consequuntur perspiciatis, eveniet iste, obcaecati molestias sunt laborum, pariatur laboriosam sequi nulla!</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}
