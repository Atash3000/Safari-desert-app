import React from 'react'
import './Header.scss';


function Header() {
  return (
    <header className="header">
    <div className="header__text-box">
      <h1 className="heading-primary u-margin-bottom-medium">
        <span className="heading-primary--main">desert safari </span>
        <span className="heading-primary--sub"> where dreams come true</span>
      </h1>
      <a href="#" className="btn btn--white">explore safari</a>
    </div>
  </header>
  )
}

export default Header
