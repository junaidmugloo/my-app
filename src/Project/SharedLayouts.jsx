import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import './otpPage.css'

export default function SharedLayouts() {
    return (
        <div className='container8'>
            <Outlet/>
            <Footer/>
        </div>
    )
}
