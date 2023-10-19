import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div className='footer-fixed '>
                    <div className="navigation">
                        <ul>
                            <li className="list ">
                                <Link className='Link' to="menus">
                                    <span className="icon"><ion-icon name="grid"></ion-icon></span>
                                    <span className="text ">Menu</span>
                                </Link>
                            </li>
                            <li className="list ">
                                <Link className='Link' to="offers">
                                    <span className="icon"><ion-icon name="bag"></ion-icon></span>
                                    <span className="text">offers</span>
                                </Link>
                            </li>
                            <li className="list list-home active">
                                <Link className='Link' to="/">
                                    <span className="icon"><ion-icon name="home"></ion-icon></span>
                                    <span className="text">Home</span>
                                </Link>
                            </li>
                            <li className="list">
                                <Link className='Link' to="profile">
                                    <span className="icon"><ion-icon name="person"></ion-icon></span>
                                    <span className="text">Profile</span>
                                </Link>
                            </li>
                            <li className="list">
                                <Link className='Link' to="more">
                                    <span className="icon"><ion-icon name="reorder-four"></ion-icon></span>
                                    <span className="text">More</span>
                                </Link>
                            </li>
                            <div className="indicator"></div>
                        </ul>
                    </div>
                </div>
    )
}
