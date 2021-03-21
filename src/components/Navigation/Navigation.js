import React ,{useState}from 'react';
import './Navigation.scss';





function Navigation() {
  const [active ,setActive] = useState('');
  const showMenu =()=>{
    setActive('active');
    active && setActive('');
  }
  return (
    <div className='navigation'>
    <div class={`navigation__background ${active}`}>&nbsp;</div>

      <div className="hamburger " onClick={showMenu}>
        <div className="hamburger__box">
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
        </div>
        
      </div>
      <nav class={`navigation__nav ${active}`}>
        <ul class="navigation__list">
          <li class="navigation__item"><a href="#" class="navigation__link"><span>01</span> About Safari</a></li>
          <li class="navigation__item"><a href="#" class="navigation__link"><span>02 </span> Your benefit</a></li>
          <li class="navigation__item"><a href="#" class="navigation__link"><span>03</span> Popular Tours</a></li>
          <li class="navigation__item"><a href="#" class="navigation__link"><span>04</span> Stories</a></li>
          <li class="navigation__item"><a href="#" class="navigation__link"><span>05</span> Book now</a></li>
        </ul>
          </nav>
    </div>
  )
}

export default Navigation;
