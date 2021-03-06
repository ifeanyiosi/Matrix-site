import React from 'react'


import {Footer, Header, Possibility, WhatMatrix, Features, Blog} from './Containers'
import {CTA, Brand, Navbar, Feature } from './Components'
import './App.css'

const App = () => {
  return (
    <div className='App'>

      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
        

      </div>
      {/* <Brand/> */}
      <WhatMatrix/>
      <Feature/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
        
    </div>
  )
}

export default App