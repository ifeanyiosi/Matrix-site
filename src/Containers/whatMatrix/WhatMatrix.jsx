import React from 'react'
import { Feature } from '../../Components'
import Features from '../features/Features'
import './whatMatrix.scss'

const WhatMatrix = () => {
  return (
    <div className='matrix__whatmatrix section__margin' id='whatmatrix'>

      <div className='matrix__whatmatrix-feature'>
        <Feature/>
      </div>

      <div className='matrix__whatmatrix-heading'>
        <h1 className='gradient__text'>
          The Possibilities are beyond your imagination
        </h1>
        <p>
          Explore The Library
        </p>
      </div>

        <div className='matrix__whatmatrix-container'>
          <Features/>
          <Features/>
          <Features/>
        </div>
    </div>
  )
}

export default WhatMatrix