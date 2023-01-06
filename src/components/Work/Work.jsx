import React from 'react'
import "./work.css"
import Card from '../cards/Card'
import learn from "../../assets/learn.png";
import scale from "../../assets/scale.jfif";
import build from "../../assets/build.jfif"


const Work = () => {
  
  
  return (
    <div className='ecell__work'>
       <h1><strong>What we do?</strong> </h1>
       <p>Through our vision of "Learn, Build and Scale" we implement various initiatives and events in IIT BHU to foster the entrepreneurial minds and create a culture of enthralling startups bound for success!</p>
       <div className='ecell__work__cards'>
          <Card 
            className="ecell__work__card1"
            img = {learn}
            title = "Learn"
            details = 'Through our Programmes like "E-Mentorship" and "Learn Together", we teach the students about all aspects of entrepreneurial journey!'
            button="Learn here ->"
          />
           <Card 
            className="ecell__work__card2"
            img = {build}
            title = "Build"
            details = 'With Initiatives like "Build With Us" and "Startup 101", deep dive into the ocean of building the solutions for tomorrow!'
            button="Build with us ->"
          />
           <Card 
            className="ecell__work__card3"
            img = {scale}
            title = "Scale"
            details = 'Network with alumni founders, Get incubated in our incubators and seize the opportunity to pitch in front of Angel Investors & VCs!'
            button="Escalate ->"
          />
       </div>
    </div>
  )
}

export default Work