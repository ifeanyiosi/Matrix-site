import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri'
import './navbar.scss'
import logo from '../../assets/logo.png'

const Menu = () => (
  <>
   <p className='links-text' >
              <a className='links' href="#home">Home</a></p>
          <p><a href="#whatmatrix">What is  The Matrix</a></p>
          <p><a href="#possibility">Skynet AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
     const [toggleMenu, setToggleMenu] = useState(false)

     

  return (
    <div className='matrix__navbar'>

      <div className='matrix__navbar-links'>

        <div className='matrix__navbar-links-logo'>
          <img className='logo-matrix' src={logo} alt="" />

        </div>

        <div className='matrix__navbar-links-container'>

         <Menu/>

           
              
              
              

        </div>
      </div>

      <div className='matrix__navbar-sign'>

        <p className='sign-in'>Sign In</p>
        <button type='button'>Sign Up</button>

      </div>

      <div className='matrix__navbar-menu'>

          {toggleMenu ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)} /> : <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)} />  
          }
          {toggleMenu && (
            <div className='matrix__navbar-menu-container scale-up-center'>
                <div className='matrix__navbar-menu-container-links'>
                  <Menu/>  
                  <div className='matrix__navbar-menu-container-links-sign'>

        <p className='sign-in'>Sign In</p>
        <button type='button'>Sign Up</button>

      </div>
                </div>
            </div>
          )}

      </div>
      
    </div>
  )
}

export default Navbar