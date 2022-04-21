import React from 'react'
import './header.scss'
import people from '../../assets/people.png'
import ai from '../../assets/ai.jpg'

const Header = () => {
  return (
    <div className='matrix__header section__padding'id='home'>

      <div className='matrix__header-content'>

        <h1 className='gradient__text'>
          Lets get you plugged into the Matrix for new and amazing experiences
        </h1>

        <p>The Matrix is an opportunity for you to live out your wildest dreams from the comfort of your home. do you want to be a secret agent? A Rockstar? or A Superhero? The options are limitless. Get plugged in today</p>

        <div className='matrix__header-content__input'>

          <input type="email" placeholder='your email address' />
          <button type='button' >Get Started</button>

        </div>

        <div className='matrix__header-content__people'>

          <img src={people} alt="people" />

          <p> Over 1,600 have requested early access </p>

        </div>

        <div className='matrix__header-image' >
          <img src={ai} alt="AI" />
        </div>

      </div>

    </div>
  )
}

export default Header