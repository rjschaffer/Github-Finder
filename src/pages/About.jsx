import React from 'react'

function About() {
  return (
    <div w-full h-screen>
    <h1 className='text-6xl mt-4 mb-4 text-white'>
        Github Finder
    </h1>
    <p className='mb-16 mt-16 text-2xl font-light text-white'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
          {' '}
          React Front To Back
        </a>{' '}
        Udemy course by
        <strong>
          <a href='https://traversymedia.com'> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-gray'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By: <a className='text-gray' href='https://twitter.com/hassibmoddasser'>
           Hassib Moddasser
        </a>
      </p>
      
    </div>
  )
}

export default About