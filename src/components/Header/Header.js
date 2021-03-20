import React from 'react'
import './Header.scss';


function Header() {
  return (
    <header class="header">
    <div class="header__text-box">
      <h1 class="heading-primary u-margin-bottom-medium">
        <span class="heading-primary--main">desert safari </span>
        <span class="heading-primary--sub"> where dreams come true</span>
      </h1>
      <a href="#" class="btn btn--white">explore safari</a>
    </div>
  </header>
  )
}

export default Header
