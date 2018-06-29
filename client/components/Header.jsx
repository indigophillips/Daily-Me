import React from 'react'

const Header = () => {
  return(
    <header className="header">
      <nav className="row">
        <div className="headerLeft"><i className="fas fa-bars"></i></div>
        <div className="headerMiddle"><img className="logo" src="/logo.png" alt="logo" /></div>
      </nav>
    </header>
  )
}

export default Header