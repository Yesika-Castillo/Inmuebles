import React from 'react'

const Card = props => {
  return (
    <div className="container-card">
      <img src={props.item.url} alt="imagen" className="images" />
      <h2>{props.item.title}</h2>
      <p className="description">{props.item.description}</p>
    </div>
  )
}

export default Card
