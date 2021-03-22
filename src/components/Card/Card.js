import React from 'react'
import './Card.scss';



function Card() {
  return (
    <section class="section-card">
      <div class="u-text-center u-margin-bottom-big">
        <h2 class="heading-secondary ">
          our most popular tour list
        </h2>
      </div>
      <div class="row">
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--1">&nbsp;</div>
              <h4 class="card__header">camel tour</h4>
              <div class="card__details u-margin-top-big">
                <ul>
                  <li>2 hours camer tour</li>
                  <li>2 hours camer tour</li>
                  <li>2 hours camer tour</li>
                  <li>2 hours camer tour</li>
                </ul>
              </div>
            </div>

            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                  <div class="card__price-box">
                      <p class="card__price-only">only</p>
                      <p class="card__price-value">$299</p>
                  </div>
                  <a href="#" class="btn btn--white">book now!</a>
              </div>
          </div>
          </div>
        </div>
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--2">&nbsp;</div>
              <h4 class="card__header">SUV Tour</h4>
              <div class="card__details u-margin-top-big">
                <ul>
                  <li>2 hours SUV tour</li>
                  <li>2 hours SUV tour</li>
                  <li>2 hours SUV tour</li>
                  <li>2 hours SUV tour</li>
                </ul>
              </div>
            </div>

            <div class="card__side card__side--back card__side--back-2">
              <div class="card__cta">
                  <div class="card__price-box">
                      <p class="card__price-only">only</p>
                      <p class="card__price-value">$299</p>
                  </div>
                  <a href="#" class="btn btn--white">book now!</a>
              </div>
          </div>
          </div>
        </div>
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--3">&nbsp;</div>
              <h4 class="card__header">Sand skating</h4>
              <div class="card__details u-margin-top-big">
                <ul>
                  <li>2 hours SUV tour</li>
                  <li>2 hours SUV tour</li>
                  <li>2 hours SUV tour</li>
                  <li>2 hours SUV tour</li>
                </ul>
              </div>
            </div>

            <div class="card__side card__side--back card__side--back-3">
              <div class="card__cta">
                  <div class="card__price-box">
                      <p class="card__price-only">only</p>
                      <p class="card__price-value">$99</p>
                  </div>
                  <a href="#" class="btn btn--white">book now!</a>
              </div>
          </div>
          </div>
        </div>
      </div>
      <div class="u-text-center u-margin-top-big">
      <a href="#" class="btn btn--blue">discover all tours</a>
s
      </div>
    </section>
  )
}

export default Card
