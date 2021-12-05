import React from 'react'
import Icons from './Icons'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <div className='header-container'>
        <Link to='/'>
          <img alt='logo' className='logo' src='https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_960_720.png' />
        </Link>
        <Nav />
        <Icons />
      </div>
    </header>

  )
}

export default NavBar
