import React from 'react'


const Card = (props) => {
  return (
    <div className={props.className}>
    <img src={props.img}></img>
    <p><strong>{props.title}</strong></p>
    <p>{props.details}</p>
    <button className='btn btn-outline-secondary'>{props.button}</button>
    </div>
  )
}

export default Card