import React, { useEffect, useState } from 'react'

import './home.style.scss'

import logoName from '../../assets/images/logo-no-background (another copy).png'
import { Link } from 'react-router-dom'
import { AnimatedLetters } from '../AnimatedLetters/animatedLetters.component'
import Logo from './Logo/logo.component'
import Loader from 'react-loaders'

export const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['n', 'a', 'g', '-', 'b', 'e', 'y']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <Loader type="pacman" />
        <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img src={logoName} alt="Developer Name" />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
          <h2>Frontend Javascript Developer (React js)</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
    </>
  )
}
