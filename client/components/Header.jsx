import React from 'react'

const Header = () => {
  return(
    <header className="header">
      <nav className="row">
        <div className="headerLeft two columns"><i class="fas fa-bars"></i></div>
        <div className="headerMiddle four columns"><img className="logo" src="/logo.png" alt="logo" /></div>
        <div className="headerRight two columns"></div>
      </nav>
    </header>
  )
}

export default Header