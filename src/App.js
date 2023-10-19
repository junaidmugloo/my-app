import { BrowserRouter as Router,Switch, Route, redirect, Routes } from 'react-router-dom'
import React from 'react'
import StartPage from './Project/StartPage'
import Login from './Project/Login'
import SignUp from './Project/SignUp'
import Password from './Project/Password'
import OTPPage from './Project/OTPPage'
import NewPsword from './Project/NewPsword'
import Startpage1 from './Project/Startpage1'
import Startpage02 from './Project/Startpage02'
import Startpage003 from './Project/Startpage003'
import Home from './Project/Home'
import SharedLayouts from './Project/SharedLayouts'
import Profile from './Project/Profile'
import Offers from './Project/Offers'
import More from './Project/More'
import Menus from './Project/Menus'
import Notifications from './Project/Notifications'
import AboutUs from './Project/AboutUs'
import Inbox from './Project/Inbox'
import PaymentDetails from './Project/PaymentDetails'
import MyOrder from './Project/MyOrder'
import CheckOut from './Project/CheckOut'
import QuantityPage from './Project/QuantityPage'
import LoginPage1 from './Project/LoginPage1'


export default function App() {
  return (
    
    <Router>
      <Routes>
        <Route exact path='startpage' element={<StartPage/>}/>
        <Route exact path='loginPage1' element={<LoginPage1/>}/>
        <Route exact path='login' element={<Login/>}/>
        <Route exact path='signup' element={<SignUp/>}/>
        <Route exact path='password' element={<Password/>}/>
        <Route exact path='otpPage' element={<OTPPage/>}/>
        <Route exact path='newPassword' element={<NewPsword/>}/>
        <Route exact path='startpage1' element={<Startpage1/>}/>
        <Route exact path='startpage02' element={<Startpage02/>}/>
        <Route exact path='startpage003' element={<Startpage003/>}/>
        <Route exact path='/' element={<SharedLayouts/>}>
          <Route index element={<Home/>}/>
          <Route path='quantitypage' element={<QuantityPage/>}/>
          <Route exact path='profile' element={<Profile/>}/>
          <Route exact path='more' element={<More/>}/>
          <Route exact path='offers' element={<Offers/>}/>
          <Route exact path='menus' element={<Menus/>}/>
          <Route exact path='notifications' element={<Notifications/>}/>
          <Route exact path='aboutUs' element={<AboutUs/>}/>
          <Route exact path='inbox' element={<Inbox/>}/>
          <Route exact path='paymentdetails' element={<PaymentDetails/>}/>
          <Route exact path='myOrder' element={<MyOrder/>}/>
          <Route exact path='checkout' element={<CheckOut/>}/>
        </Route>
      </Routes>
    </Router>
    
  )
}
