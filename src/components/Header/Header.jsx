import React from 'react'
import "./header.css"
import pic from "../../assets/download.png";
import Typed from 'typed.js';

//  var typed = new Typed('.typed',{
//     string:["Innovation","Incubation","Ideation"],
//     typeSpeed:55,
//     backSpeed:44,
//   });


const Header = () => {
  
 
  return (
    <div className='ecell__header'>
      <div className='ecell__header__items'>

      <div className='ecell__header__title '>
            <h1>E-Cell IIT BHU</h1>
      </div>
      <div className='ecell__header__qoute'>
        <h1>Accelerate Your Idea </h1>
        {/* <h1><span class = "typed"></span></h1> */}
        {/* <h1>Journey!</h1> */}
      </div>
      <div className='ecell__header__message'>
        <p>Welcome to the entrepreneurship community of IIT BHU where we ideate, innovate and incubate the future innovations of the century!</p>
      </div>
      <button className='ecell__header__button btn btn-outline-secondary'>
      Get started
      </button>
      </div>

      <div className='ecell__header__img '>
          <img src={pic} alt="image"></img>
      </div>

    </div>
  )
}

export default Header