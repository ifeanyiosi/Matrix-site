import React from 'react'
import './possibility.css'

import possibility from '../../assets/possibilityimg.png'

const Possibility = () => {
  return (
    <div className='matrix__possibility section_padding gradient__bg' id='possibility'>

      <div className='matrix__possibility-image'>
        <img src={possibility} alt="possibility" />
      </div>

      <div className='matrix__possibility-content'>
        <h4>
          Request Early Access to get Started
        </h4>
        
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
        </p>

        <h4>
          Request Early Access to Get Started
        </h4>

      </div>

    </div>
  )
}

export default Possibility