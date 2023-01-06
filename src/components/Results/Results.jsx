import React from 'react'
import "./results.css"
import startups from "../../assets/startups.webp"

const Results = () => {
  return (
    <div className='ecell__results'>
      <h1 className='ecell__results-title'><strong>Successful Ventures From IIT BHU Alumni</strong></h1>
      <img src={startups} alt="startups" className='ecell__results-img'></img>
    </div>
  )
}

export default Results