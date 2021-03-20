import React from 'react'
import './Tours.scss';
import carOnSand from '../../images/car-on-sand-2.jpg';
import girlOnCamel from '../../images/girl-on-camel.jpg';
import caravan from '../../images/caravan.jpg';
import camels from '../../images/camels.jpg';
import giveMeHand from '../../images/give-me-hand.jpg';




function Tours() {
  return (
   <div className="section-tours">
      <div className="u-text-center u-margin-bottom-big">
        <h2 className="heading-secondary">
          exiting tours for adventours people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="heading-container">
          <h3 className="heading-tertiary ">exiting tours with camels</h3>
          <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aspernatur laborum atque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis esse eligendi quia.</p>
          <h3 className="heading-tertiary u-margin-top-small">Suv tours throu sands with camels</h3>
          <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis esse eligendi quia. Quis esse elige Quis esse elige</p>
          </div> 
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img src={carOnSand} alt="car-on-sand" className="composition__photo composition__photo--1"/>
            <img src={girlOnCamel} alt="girl-on-camel" className="composition__photo composition__photo--2"/>
            <img src={caravan} alt="caravan" className="composition__photo composition__photo--3"/>
            <img src={carOnSand} alt="car-on-sand" className="composition__photo composition__photo--4"/>
            <img src={giveMeHand} alt="giveMeHand" className="composition__photo composition__photo--5"/>
            <img src={camels} alt="camels" className="composition__photo composition__photo--6"/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Tours
