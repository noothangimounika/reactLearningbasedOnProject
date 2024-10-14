import React from 'react'


const Header = () => {
  return (
    <div className='Header-Container'>
      <header>
        <Link to="/" className='header-menu'></Link>
        <div>
          <img src="assets/Cart.jpeg" alt="" />
        </div>
      </header>
    </div>
  )
}

export default Header