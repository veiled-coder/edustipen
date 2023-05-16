import React from 'react'
import "../styles/nav.css"
import Btn from "../components/Btn"
import { NavLink } from 'react-router-dom'



function Nav() {
  return (
      <div className='nav-container'>
       <NavLink to="/">Contact us</NavLink>
      <Btn text="Signup"/>
      </div>
  )
}

export default Nav