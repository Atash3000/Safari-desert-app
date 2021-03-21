import React from 'react';
import './TourInfo.scss';




function TourInfo() {
  return (
     <section className="section-tour-info">
      <div className="u-text-center u-margin-bottom-big">
        <h2 className="heading-secondary ">
          explore our tour options
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-4">
          <div className="tour-options u-text-center">
            <i className="tour-options__icon fas fa-map-marker-alt"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Location pickups</h3>
            <ul className='tour-options__ulList'>
              <li> free airport pickups</li>
              <li>friendly stuff</li>
              <li>safe transport</li>
              <li>only for you</li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="tour-options u-text-center">
            <i className="tour-options__icon fas fa-child"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Kids welcome</h3>
            <ul className='tour-options__ulList'>
              <li> kids from 12 years old</li>
              <li>parent follow</li>
              <li>free tour for kids</li>
              <li>only for kids</li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="tour-options u-text-center">
            <i className="tour-options__icon fas fas fa-compass"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">365 days a year</h3>
            <ul className='tour-options__ulList'>
              <li> 365/24 work flow</li>
              <li>winter discounts</li>
              <li>safe transport</li>
              <li>only for you</li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="tour-options u-text-center">
            <i className="tour-options__icon fas fa-share"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">safaty first</h3>
            <ul className='tour-options__ulList'>
              <li> all trips insured</li>
              <li>safety belts provided</li>
              <li>cars full inspected</li>
              <li> for your safety</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}

export default TourInfo
