import React from 'react'
import { Feature } from '../../Components'
import Features from '../features/Features'


import './whatMatrix.scss'

const WhatMatrix = () => {
  return (
    <div className='matrix__whatmatrix section__margin ' id='whatmatrix'>

      <div className='matrix__whatmatrix-feature'>
        <Features
        title="What is The Matrix"
        text= "The Matrix is a  computer-generated artificial reality in which people can reside, oblivious to the pain, suffering, and general crappiness of the real world."
        />
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
          <Features
          title="Chatbox"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
          />
          <Features
          title="Knowledgebase"
          text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          />
          <Features
          title="Education"
          text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          />
        </div>
    </div>
  ) 
}

export default WhatMatrix