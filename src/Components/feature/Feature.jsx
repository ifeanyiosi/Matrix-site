import React from 'react'
import { Features } from '../../Containers'
import './feature.scss'


const featuresData = [
  {
    title:'Improving end distrusts instantly',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  },

  {
    title:'The new begining',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  },

  {
    title:'Become the tended active',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  },

  {
    title:'Message or nothing',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  },

]

const Feature = () => {
  return (
    <div className='matrix__feature section__padding'>

      <div className='matrix__feature-heading'>

        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realize it. Step into the Future Today & Make it Happen.
        </h1>

        <p>
          Request Early Acess to Get Started
        </p>

      </div>

      <div className='matrix__feature-container'>
          {featuresData.map((item, index) =>(
            <Features title={item.title} text={item.text} key={item.title + index } />
          ))}

      </div>
      
    </div>
  )
}

export default Feature