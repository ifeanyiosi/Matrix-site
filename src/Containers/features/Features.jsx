import React from 'react'
import './features.scss'

const Features = ({title, text}) => {
  return (
    <div className='matrix__features-container__feature'>
      <div className='matrix__features-container__feature-title'>
        <div />
        <h1>
          {title}
        </h1>

      </div>
      <div className='matrix__features-container_feature-text'>
        <p>
          {text}
        </p>
      </div>

    </div>
  )
}

export default Features