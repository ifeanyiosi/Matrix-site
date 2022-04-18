import React from 'react'
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri'
import './navbar.scss'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='matrix__navbar'>

      <div className='matrix__navbar-links'>

        <div className='matrix__navbar-links_logo'>
          <img className='logo-matrix' src={logo} alt="" />

        </div>

        <div className='matrix__navbar-links-container'>

          <p className='links-text' >
              <a className='links' href="#home">Home</a>
              <a href="#whatmatrix">What is The Matrix</a>
              <a href="#possibility">Skynet AI</a>
              <a href="#features">Case Studies</a>
              <a href="#blog">Library</a>
          </p>

        </div>
      </div>
      
    </div>
  )
}

export default Navbar