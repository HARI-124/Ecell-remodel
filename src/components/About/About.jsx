import React from 'react'
import "./about.css"
import startup from "../../assets/images.jfif";

const About = () => {
  return (
    <div className='ecell__about'>
    <div className='ecell__about__items'>
       <div className='ecell__about__items-title'>
        <h1><strong>Who are we?</strong></h1>
       </div>
       <div className='ecell__about__items-details'>
        <p>E-Cell IIT BHU is an institute body run by the students of IIT (BHU) Varanasi devoted to acting as a symbiotic link between the entrepreneurs of E-Cell and the existing startup ecosystem as well as acting as a hub where all the startups can meet ,collaborate and innovate!</p>
       </div>
       <button className='btn btn-outline-secondary ecell__about__items-button'>Learn more about Ecell</button>
        <div className='ecell__about__items-counts'>
          <div className='ecell__about__items-count1'>
              <h1>5000+</h1>
              <p>overall social reach!</p>
          </div>
          <div className='ecell__about__items-count2'>
              <h1>108</h1>
              <p>overall social reach!</p>
          </div>
        </div>

    </div>

    <div className='ecell__about__image'>
      <img src={startup} alt="startup"></img>
    </div>

    </div>
  )
}

export default About