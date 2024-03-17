import React from 'react'

const Box = (props) => {
  return (
    <div className="boxi">
      <img src={props.img}></img>
      <h1>{props.head}</h1>
      <p>{props.para}</p>
    </div>
  )
}

export default Box