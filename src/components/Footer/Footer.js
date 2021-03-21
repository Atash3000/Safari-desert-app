import React from 'react';
import './Footer.scss';



function Footer() {
  return (
    <footer className="footer">
      <div class="row">
        <div class="col-1-of-2">
          <div class="footer__navigation">
            <ul class="footer-list">
              <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
              <li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
              <li class="footer__item"><a href="#" class="footer__link">Careers</a></li>
              <li class="footer__item"><a href="#" class="footer__link">privacy policy</a></li>
              <li class="footer__item"><a href="#" class="footer__link">terms</a></li>
            </ul>
          </div>
        </div>
          <div class="col-1-of-2">
            <p class="footer__copyright">
              Built my <a href="#" class="footer__link">Atamurad</a> for my project.Copyright &copy; by Atamurad Babakulyyev. as a software developer.
            </p>
          </div>
        </div>
    </footer>
  )
}

export default Footer;
